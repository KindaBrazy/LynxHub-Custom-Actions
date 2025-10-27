import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {ToolsCard} from '../../../../src/renderer/src/App/Components/Reusable/ToolsCard';
import {useTabsState} from '../../../../src/renderer/src/App/Redux/Reducer/TabsReducer';
import icon from '../icon.png';
import {reducerActions} from '../reducer';

const title: string = 'Custom Actions';
const description: string = 'Create, customize and manage custom cards with custom scripts, actions.';

export default function ToolsPage() {
  const activeTab = useTabsState('activeTab');
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(reducerActions.openModal({tabID: activeTab}));
  }, [activeTab]);

  return <ToolsCard icon={icon} title={title} onPress={openModal} description={description} />;
}
