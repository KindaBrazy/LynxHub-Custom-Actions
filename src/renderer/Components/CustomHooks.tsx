import {cardsActions} from '@lynx/redux/reducers/cards';
import ptyIpc from '@lynx_shared/ipc/pty';
import {isEmpty} from 'lodash-es';
import {Fragment, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {CustomCard} from '../../cross/CrossTypes';
import {customActionsChannels} from '../../cross/CrossUtils';
import {reducerActions, selectCustomCards, selectSaveCards, selectUrlCatchingSession} from '../reducer';
import {catchTerminalAddress} from './ActionCard/ActionCard_TerminalUtils';

export function CustomHook() {
  const dispatch = useDispatch();
  const customCards = useSelector(selectCustomCards);
  const saveCards = useSelector(selectSaveCards);
  const urlCatchingSession = useSelector(selectUrlCatchingSession);

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

    const offData = ptyIpc.onData((dataID, data) => {
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
