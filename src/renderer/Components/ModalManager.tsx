import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {useTabsState} from '../../../../src/renderer/src/App/Redux/Reducer/TabsReducer';
import {AppDispatch} from '../../../../src/renderer/src/App/Redux/Store';
import {reducerActions, useSystemMonitorState} from '../reducer';
import CustomActionsModal from './CustomActionsModal';

export default function ModalManager() {
  const dispatch = useDispatch<AppDispatch>();
  const activeTab = useTabsState('activeTab');
  const tabs = useTabsState('tabs');

  const modals = useSystemMonitorState('modals');

  useEffect(() => {
    modals.forEach(card => {
      const exist = tabs.some(tab => tab.id === card.tabID);
      if (!exist) dispatch(reducerActions.closeModal({tabID: card.tabID}));
    });
  }, [tabs, modals, dispatch]);

  return (
    <>
      {modals.map(modal => (
        <CustomActionsModal
          tabID={modal.tabID}
          isOpen={modal.isOpen}
          key={`${modal.tabID}_hw_card`}
          show={activeTab === modal.tabID ? 'flex' : 'hidden'}
        />
      ))}
    </>
  );
}
