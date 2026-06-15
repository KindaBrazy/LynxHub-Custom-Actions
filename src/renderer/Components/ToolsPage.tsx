import {useOverlayState} from '@heroui/react';
import {ToolsCard} from '@lynx/components/ToolsCard';
import {Widget6} from '@solar-icons/react-perf/BoldDuotone';

import CustomActionsModal from './Modal/CustomActionsModal';

export default function ToolsPage() {
  const modalState = useOverlayState();

  return (
    <>
      <CustomActionsModal state={modalState} />
      <ToolsCard
        description={
          'Create, customize, and manage custom shortcut cards with your own scripts, ' +
          'APIs, or shell commands to automate your daily developer workflows.'
        }
        title="Custom Actions"
        onPress={modalState.open}
        icon={<Widget6 className="size-8 text-cyan-500" />}
      />
    </>
  );
}
