import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@heroui/react';
import {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';

import LynxScroll from '../../../../../src/renderer/src/App/Components/Reusable/LynxScroll';
import {AppDispatch} from '../../../../../src/renderer/src/App/Redux/Store';
import {ArrowDuo_Icon, DiskDuo_Icon} from '../../../../../src/renderer/src/assets/icons/SvgIcons/SvgIcons';
import {CustomCard} from '../../../cross/CrossTypes';
import {reducerActions} from '../../reducer';
import CustomActionsManager from './CustomActionsManager';

type Props = {isOpen: boolean; show: string; tabID: string};

const mockCards: CustomCard[] = [
  {id: '1', title: 'Image Gen', icon: 'image', accentColor: '#3b82f6'},
  {id: '2', title: 'Start ComfyUI', icon: 'star', accentColor: '#10b981'},
  {id: '3', title: 'Project Folder', icon: 'folder', accentColor: '#f97316'},
  {id: '4', title: 'Code Editor', icon: 'code', accentColor: '#8b5cf6'},
];

export default function CustomActionsModal({show, isOpen, tabID}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  // State for view management
  const [view, setView] = useState<'list' | 'form'>('list');
  const [editingCard, setEditingCard] = useState<CustomCard | null>(null);

  const formTitle = useMemo(
    () =>
      view === 'list' ? 'Custom Actions' : editingCard ? `Editing "${editingCard.title}"` : 'Create New Custom Card',
    [editingCard],
  );

  const handleBackToList = () => {
    setView('list');
    setEditingCard(null);
  };

  const onOpenChange = (value: boolean) => {
    if (!value) {
      dispatch(reducerActions.closeModal({tabID: tabID}));
      setTimeout(() => {
        dispatch(reducerActions.removeModal({tabID: tabID}));
      }, 500);
    }
  };

  const saveCard = () => {};

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
              <CustomActionsManager
                view={view}
                cards={mockCards}
                setView={setView}
                editingCard={editingCard}
                setEditingCard={setEditingCard}
              />
            </ModalBody>

            <ModalFooter className="justify-end">
              {view === 'form' ? (
                <>
                  <Button color="success" variant="light" onPress={saveCard} startContent={<DiskDuo_Icon />}>
                    Save Card
                  </Button>
                  <Button color="warning" variant="light" onPress={handleBackToList}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button color="warning" variant="light" onPress={onClose}>
                  Close
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
