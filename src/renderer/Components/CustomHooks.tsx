import {Fragment, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {CustomCard} from '../../cross/CrossTypes';
import {customActionsChannels} from '../../cross/CrossUtils';
import {reducerActions, useCustomActionsState} from '../reducer';

export function CustomHook() {
  const dispatch = useDispatch();
  const customCards = useCustomActionsState('customCards');
  const saveCards = useCustomActionsState('saveCards');

  useEffect(() => {
    if (saveCards) {
      window.electron.ipcRenderer.send(customActionsChannels.setCards, customCards);
      dispatch(reducerActions.clearSaveCards());
    }
  }, [saveCards, customCards]);

  useEffect(() => {
    window.electron.ipcRenderer.invoke(customActionsChannels.getCards).then((cards: CustomCard[]) => {
      dispatch(reducerActions.updateState({key: 'customCards', value: cards}));
    });
  }, []);

  return <Fragment />;
}
