import {isEmpty} from 'lodash';
import {Fragment, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {cardsActions} from '../../../../src/renderer/src/App/Redux/Reducer/CardsReducer';
import rendererIpc from '../../../../src/renderer/src/App/RendererIpc';
import {CustomCard} from '../../cross/CrossTypes';
import {customActionsChannels} from '../../cross/CrossUtils';
import {reducerActions, useCustomActionsState} from '../reducer';
import {catchTerminalAddress} from './ActionCard/ActionCard_TerminalUtils';

export function CustomHook() {
  const dispatch = useDispatch();
  const customCards = useCustomActionsState('customCards');
  const saveCards = useCustomActionsState('saveCards');
  const urlCatchingSession = useCustomActionsState('urlCatchingSession');

  // Save cards to storage
  useEffect(() => {
    if (saveCards) {
      window.electron.ipcRenderer.send(customActionsChannels.setCards, customCards);
      dispatch(reducerActions.clearSaveCards());
    }
  }, [saveCards, customCards]);

  // Load cards from storage on mount
  useEffect(() => {
    window.electron.ipcRenderer.invoke(customActionsChannels.getCards).then((cards: CustomCard[]) => {
      dispatch(reducerActions.updateState({key: 'customCards', value: cards}));
    });
  }, []);

  // Listen for terminal data when URL catching session is active
  useEffect(() => {
    if (!urlCatchingSession || urlCatchingSession.urlFound) return;

    const {ptyId, tabId, findLine} = urlCatchingSession;

    const offData = rendererIpc.pty.onData((_, dataID, data) => {
      if (dataID !== ptyId || urlCatchingSession.urlFound) return;

      const url = catchTerminalAddress(data, findLine);
      if (url && !isEmpty(url)) {
        dispatch(reducerActions.setUrlFound());
        dispatch(cardsActions.setRunningCardAddress({address: url, tabId}));
        dispatch(cardsActions.setRunningCardView({view: 'browser', tabId}));
        // Stop catching after URL is found
        setTimeout(() => dispatch(reducerActions.stopUrlCatching()), 100);
      }
    });

    return () => offData();
  }, [urlCatchingSession, dispatch]);

  return <Fragment />;
}
