import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@heroui/react';
import {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';

import LynxScroll from '../../../../../src/renderer/src/App/Components/Reusable/LynxScroll';
import {AppDispatch} from '../../../../../src/renderer/src/App/Redux/Store';
import {reducerActions} from '../../reducer';
import CustomActionsManager from './CustomActionsManager';

type Props = {isOpen: boolean; show: string; tabID: string};

interface CustomCard {
  id: string;
  title: string;
  icon?: string; // SVG string or component name
  accentColor: string;
}

const mockCards: CustomCard[] = [
  {id: '1', title: 'Image Gen', icon: 'Image', accentColor: '#3b82f6'},
  {id: '2', title: 'Start ComfyUI', icon: 'Play', accentColor: '#10b981'},
  {id: '3', title: 'Project Folder', icon: 'Folder', accentColor: '#f97316'},
  {id: '4', title: 'Code Editor', icon: 'Code', accentColor: '#8b5cf6'},
];

export default function CustomActionsModal({show, isOpen, tabID}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  // State for view management
  const [view, setView] = useState<'list' | 'form'>('list');
  const [editingCard, setEditingCard] = useState<CustomCard | null>(null);

  const formTitle = useMemo(
    () => (editingCard ? `Editing "${editingCard.title}"` : 'Create New Custom Card'),
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
              <div>{view === 'form' && <Button onPress={handleBackToList}>Back</Button>}</div>

              <div className="flex items-center gap-2 justify-center">
                {view === 'list' ? 'Custom Actions' : formTitle}
              </div>

              <div />
            </ModalHeader>

            <ModalBody as={LynxScroll}>
              <CustomActionsManager view={view} cards={mockCards} setView={setView} setEditingCard={setEditingCard} />
            </ModalBody>

            <ModalFooter className="justify-end">
              {view === 'form' ? (
                <>
                  <Button color="success" variant="light" onPress={saveCard}>
                    Save Card
                  </Button>
                  <Button color="default" variant="light" onPress={handleBackToList}>
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
