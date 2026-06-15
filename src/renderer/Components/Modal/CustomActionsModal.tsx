import {Button, Modal, UseOverlayStateReturn} from '@heroui/react';
import LynxScroll from '@lynx/components/LynxScroll';
import TabModal from '@lynx/components/TabModal';
import {topToast} from '@lynx/layouts/ToastProviders';
import {AppDispatch} from '@lynx/redux/store';
import {ArrowLeft, Diskette, TrashBin2} from '@solar-icons/react-perf/BoldDuotone';
import {useEffect, useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {reducerActions, useCustomActionsState} from '../../reducer';
import CustomActionsManager from './CustomActionsManager';

type Props = {state: UseOverlayStateReturn};

export default function CustomActionsModal({state}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  // State for view management
  const view = useCustomActionsState('view');
  const editingCard = useCustomActionsState('editingCard');

  const formTitle = useMemo(
    () =>
      view === 'list'
        ? 'Custom Actions'
        : editingCard
          ? `Editing ${editingCard.title || 'New Card'}`
          : 'Create New Custom Card',
    [editingCard, view],
  );

  const saveDisabled = useMemo(() => !editingCard?.title || !editingCard.icon, [editingCard]);

  const handleBackToList = () => {
    dispatch(reducerActions.setView('list'));
    dispatch(reducerActions.setEditingCard(undefined));
  };

  const saveCard = () => {
    dispatch(reducerActions.saveCard());
    topToast.success('Card saved successfully!');
  };
  const deleteCard = () => dispatch(reducerActions.removeCard());

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (view === 'form') {
          handleBackToList();
        } else {
          state.close();
        }
      }
    };

    document.addEventListener('keyup', onKeyUp);
    return () => document.removeEventListener('keyup', onKeyUp);
  }, [handleBackToList, view, state]);

  useEffect(() => {
    if (!state.isOpen) {
      dispatch(reducerActions.setView('list'));
      dispatch(reducerActions.setEditingCard(undefined));
    }
  }, [state.isOpen, dispatch]);

  return (
    <TabModal
      isOpen={state.isOpen}
      dialogClassName="px-0"
      onOpenChange={state.setOpen}
      isKeyboardDismissDisabled={true}>
      {view !== 'form' && <Modal.CloseTrigger />}
      <Modal.Header className="flex-row items-center gap-x-2 px-4">
        <div className="w-10 h-10 flex items-center justify-center">
          {view === 'form' && (
            <Button variant="ghost" onPress={handleBackToList} isIconOnly>
              <ArrowLeft className="size-5" />
            </Button>
          )}
        </div>

        <Modal.Heading>{formTitle}</Modal.Heading>
      </Modal.Header>

      <Modal.Body className="overflow-hidden">
        <LynxScroll className="size-full px-4">
          <CustomActionsManager />
        </LynxScroll>
      </Modal.Body>

      <Modal.Footer className="justify-between px-4">
        {view === 'form' && (
          <>
            <Button onPress={deleteCard} variant="danger-soft">
              <TrashBin2 />
              Delete
            </Button>
            <div className="flex flex-row items-center gap-x-2">
              <Button onPress={saveCard} isDisabled={saveDisabled}>
                <Diskette />
                Save Card
              </Button>
              <Button variant="secondary" onPress={handleBackToList}>
                Cancel
              </Button>
            </div>
          </>
        )}
      </Modal.Footer>
    </TabModal>
  );
}
