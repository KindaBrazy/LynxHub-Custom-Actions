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
        title="Custom Actions"
        onPress={modalState.open}
        icon={<Widget6 className="size-8 text-cyan-500" />}
        description="Create, customize and manage custom cards with custom scripts, actions."
      />
    </>
  );
}
