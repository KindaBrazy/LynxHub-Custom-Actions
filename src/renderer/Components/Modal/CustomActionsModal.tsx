import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@heroui/react';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

import LynxScroll from '../../../../../src/renderer/src/App/Components/Reusable/LynxScroll';
import {AppDispatch} from '../../../../../src/renderer/src/App/Redux/Store';
import {lynxTopToast} from '../../../../../src/renderer/src/App/Utils/UtilHooks';
import {ArrowDuo_Icon, DiskDuo_Icon} from '../../../../../src/renderer/src/assets/icons/SvgIcons/SvgIcons';
import {reducerActions, useCustomActionsState} from '../../reducer';
import {TrashDuo_Icon} from '../SvgIcons';
import CustomActionsManager from './CustomActionsManager';

type Props = {isOpen: boolean; show: string; tabID: string};

export default function CustomActionsModal({show, isOpen, tabID}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  // State for view management
  const view = useCustomActionsState('view');
  const editingCard = useCustomActionsState('editingCard');

  const formTitle = useMemo(
    () =>
      view === 'list' ? 'Custom Actions' : editingCard ? `Editing "${editingCard.title}"` : 'Create New Custom Card',
    [editingCard],
  );

  const handleBackToList = () => {
    dispatch(reducerActions.setView('list'));
    dispatch(reducerActions.setEditingCard(undefined));
  };

  const onOpenChange = (value: boolean) => {
    if (!value) {
      dispatch(reducerActions.closeModal({tabID: tabID}));
      setTimeout(() => {
        dispatch(reducerActions.removeModal({tabID: tabID}));
      }, 500);
    }
  };

  const saveCard = () => {
    dispatch(reducerActions.saveCard());
    dispatch(reducerActions.setView('list'));
    dispatch(reducerActions.setEditingCard(undefined));
    lynxTopToast(dispatch).success('Card saved successfully!');
  };
  const deleteCard = () => {
    dispatch(reducerActions.removeCard());
    dispatch(reducerActions.setView('list'));
  };

  return (
    <Modal
      classNames={{
        backdrop: `!top-10 ${show}`,
        wrapper: `!top-10 pb-8 ${show}`,
      }}
      size="4xl"
      isOpen={isOpen}
      placement="center"
      isDismissable={false}
      scrollBehavior="inside"
      onOpenChange={onOpenChange}
      hideCloseButton>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="justify-between">
              <div>
                {view === 'form' && (
                  <Button variant="light" onPress={handleBackToList} isIconOnly>
                    <ArrowDuo_Icon className="size-5" />
                  </Button>
                )}
              </div>

              <div key={formTitle} className="flex items-center gap-2 justify-center animate-appearance-in">
                {formTitle}
              </div>

              <div />
            </ModalHeader>

            <ModalBody as={LynxScroll}>
              <CustomActionsManager />
            </ModalBody>

            <ModalFooter className="justify-between">
              {view === 'form' ? (
                <>
                  <Button color="danger" variant="light" onPress={deleteCard} startContent={<TrashDuo_Icon />}>
                    Delete
                  </Button>
                  <div className="flex flex-row items-center gap-x-2">
                    <Button color="success" variant="light" onPress={saveCard} startContent={<DiskDuo_Icon />}>
                      Save Card
                    </Button>
                    <Button color="warning" variant="light" onPress={handleBackToList}>
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div />
                  <Button color="warning" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
