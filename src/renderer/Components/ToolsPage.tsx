import {ToolsCard} from '@lynx/components/ToolsCard';
import {useTabsState} from '@lynx/redux/reducers/tabs';
import {Widget6} from '@solar-icons/react-perf/BoldDuotone';
import {useDispatch} from 'react-redux';

import {reducerActions} from '../reducer';

export default function ToolsPage() {
  const dispatch = useDispatch();
  const activeTab = useTabsState('activeTab');

  const onPress = () => {
    dispatch(reducerActions.openModal({tabID: activeTab}));
  };

  return (
    <ToolsCard
      description={
        'Create, customize, and manage custom shortcut cards with your own scripts, ' +
        'APIs, or shell commands to automate your daily developer workflows.'
      }
      onPress={onPress}
      title="Custom Actions"
      icon={<Widget6 className="size-8 text-cyan-500" />}
    />
  );
}
