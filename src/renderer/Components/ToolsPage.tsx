import {useOverlayState} from '@heroui-v3/react';
import {ToolsCard} from '@lynx/components/ToolsCard';

import CustomActionsModal from './Modal/CustomActionsModal';

const title: string = 'Custom Actions';
const description: string = 'Create, customize and manage custom cards with custom scripts, actions.';
const icon: string = 'https://raw.githubusercontent.com/KindaBrazy/LynxHub-Custom-Actions/refs/heads/metadata/icon.png';

export default function ToolsPage() {
  const modalState = useOverlayState();

  return (
    <>
      <CustomActionsModal state={modalState} />
      <ToolsCard icon={icon} title={title} onPress={modalState.open} description={description} />
    </>
  );
}
