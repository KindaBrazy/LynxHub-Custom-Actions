import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@heroui/react';
import {useDispatch} from 'react-redux';

import LynxScroll from '../../../../src/renderer/src/App/Components/Reusable/LynxScroll';
import {AppDispatch} from '../../../../src/renderer/src/App/Redux/Store';
import {Circle_Icon} from '../../../../src/renderer/src/assets/icons/SvgIcons/SvgIcons';
import {reducerActions} from '../reducer';

type Props = {isOpen: boolean; show: string; tabID: string};

export default function CustomActionsModal({show, isOpen, tabID}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const onOpenChange = (value: boolean) => {
    if (!value) {
      dispatch(reducerActions.closeModal({tabID: tabID}));
      setTimeout(() => {
        dispatch(reducerActions.removeModal({tabID: tabID}));
      }, 500);
    }
  };

  return (
    <Modal
      classNames={{
        backdrop: `!top-10 ${show}`,
        wrapper: `!top-10 pb-8 ${show}`,
      }}
      size="2xl"
      isOpen={isOpen}
      placement="center"
      isDismissable={false}
      scrollBehavior="inside"
      onOpenChange={onOpenChange}
      hideCloseButton>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="flex items-center gap-2 justify-center">
                <Circle_Icon className="size-6" />
                <span>Hardware Monitor Settings</span>
              </div>
            </ModalHeader>

            <ModalBody as={LynxScroll}></ModalBody>

            <ModalFooter className="justify-between">
              <Button color="warning" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
