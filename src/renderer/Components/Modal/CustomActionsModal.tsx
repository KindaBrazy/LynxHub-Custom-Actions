import {Button, Dropdown, Label, Modal, UseOverlayStateReturn} from '@heroui/react';
import LynxScroll from '@lynx/components/LynxScroll';
import TabModal from '@lynx/components/TabModal';
import {topToast} from '@lynx/layouts/ToastProviders';
import {AppDispatch} from '@lynx/redux/store';
import {ArrowLeft, Clipboard, Copy, Diskette, Export, Import, TrashBin2} from '@solar-icons/react-perf/BoldDuotone';
import {useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {customActionsChannels} from '../../../cross/CrossUtils';
import {reducerActions, selectCustomCards, selectEditingCard, selectView} from '../../reducer';
import CustomActionsManager from './CustomActionsManager';

type Props = {state: UseOverlayStateReturn};

export default function CustomActionsModal({state}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  // State for view management
  const view = useSelector(selectView);
  const editingCard = useSelector(selectEditingCard);
  const customCards = useSelector(selectCustomCards);

  // State for card selection
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);

  const handleExportClipboard = async () => {
    try {
      if (customCards.length === 0) {
        topToast.danger('No custom cards to export.');
        return;
      }
      await navigator.clipboard.writeText(JSON.stringify(customCards, null, 2));
      topToast.success('Copied all custom cards to clipboard!');
    } catch (err) {
      topToast.danger('Failed to copy to clipboard.');
      console.error(err);
    }
  };

  const handleExportSelectedClipboard = async () => {
    try {
      const selected = customCards.filter(card => selectedCardIds.includes(card.id));
      if (selected.length === 0) {
        topToast.danger('No custom cards selected to export.');
        return;
      }
      await navigator.clipboard.writeText(JSON.stringify(selected, null, 2));
      topToast.success(`Copied ${selected.length} selected card(s) to clipboard!`);
    } catch (err) {
      topToast.danger('Failed to copy to clipboard.');
      console.error(err);
    }
  };

  const handleImportClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (!text.trim()) {
        topToast.danger('Clipboard is empty.');
        return;
      }
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) {
        dispatch(reducerActions.importCards(parsed));
        topToast.success(`Successfully imported ${parsed.length} cards!`);
      } else {
        topToast.danger('Clipboard content is not a valid list of cards.');
      }
    } catch (err) {
      topToast.danger('Failed to import from clipboard. Ensure valid JSON format.');
      console.error(err);
    }
  };

  const handleExportFile = async () => {
    try {
      if (customCards.length === 0) {
        topToast.danger('No custom cards to export.');
        return;
      }
      const success = await window.electron.ipcRenderer.invoke(customActionsChannels.exportToFile, customCards);
      if (success) {
        topToast.success('Exported cards to file successfully!');
      }
    } catch (err) {
      topToast.danger('Failed to export to file.');
      console.error(err);
    }
  };

  const handleExportSelectedFile = async () => {
    try {
      const selected = customCards.filter(card => selectedCardIds.includes(card.id));
      if (selected.length === 0) {
        topToast.danger('No custom cards selected to export.');
        return;
      }
      const success = await window.electron.ipcRenderer.invoke(customActionsChannels.exportToFile, selected);
      if (success) {
        topToast.success(`Exported ${selected.length} card(s) to file successfully!`);
      }
    } catch (err) {
      topToast.danger('Failed to export to file.');
      console.error(err);
    }
  };

  const handleImportFile = async () => {
    try {
      const parsed = await window.electron.ipcRenderer.invoke(customActionsChannels.importFromFile);
      if (parsed) {
        dispatch(reducerActions.importCards(parsed));
        topToast.success(`Successfully imported ${parsed.length} cards from file!`);
      }
    } catch (err: any) {
      topToast.danger(err.message || 'Failed to import from file.');
      console.error(err);
    }
  };

  const handleToggleSelectCard = (id: string) => {
    setSelectedCardIds(prev => (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]));
  };

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

  const prevIsOpen = useRef(state.isOpen);

  useEffect(() => {
    if (prevIsOpen.current && !state.isOpen) {
      dispatch(reducerActions.setView('list'));
      dispatch(reducerActions.setEditingCard(undefined));
    }
    prevIsOpen.current = state.isOpen;
  }, [state.isOpen, dispatch]);

  useEffect(() => {
    return () => {
      if (state.isOpen) {
        dispatch(reducerActions.setView('list'));
        dispatch(reducerActions.setEditingCard(undefined));
      }
    };
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
          <CustomActionsManager selectedCardIds={selectedCardIds} onToggleSelect={handleToggleSelectCard} />
        </LynxScroll>
      </Modal.Body>

      <Modal.Footer className="justify-between px-4">
        {view === 'form' ? (
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
        ) : (
          <div className="flex flex-row justify-between items-center w-full">
            <span className="text-xs text-muted">
              {customCards.length} card{customCards.length !== 1 ? 's' : ''} configured
              {selectedCardIds.length > 0 && ` (${selectedCardIds.length} selected)`}
            </span>
            <div className="flex flex-row items-center gap-x-2">
              <Dropdown>
                <Dropdown.Trigger>
                  <Button size="sm" variant="secondary">
                    <Import className="size-4 text-cyan-500" />
                    Manage Cards
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={key => {
                      switch (key) {
                        case 'import-clipboard':
                          handleImportClipboard();
                          break;
                        case 'import-file':
                          handleImportFile();
                          break;
                        case 'export-clipboard-all':
                          handleExportClipboard();
                          break;
                        case 'export-file-all':
                          handleExportFile();
                          break;
                        case 'export-clipboard-selected':
                          handleExportSelectedClipboard();
                          break;
                        case 'export-file-selected':
                          handleExportSelectedFile();
                          break;
                        case 'clear-selection':
                          setSelectedCardIds([]);
                          break;
                        default:
                          break;
                      }
                    }}>
                    <Dropdown.Item id="import-clipboard" textValue="Import from Clipboard">
                      <Clipboard className="size-4 shrink-0 text-muted" />
                      <Label>Import from Clipboard</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="import-file" textValue="Import from File">
                      <Import className="size-4 shrink-0 text-muted" />
                      <Label>Import from File</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="export-clipboard-all" textValue="Export All to Clipboard">
                      <Copy className="size-4 shrink-0 text-muted" />
                      <Label>Export All to Clipboard</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="export-file-all" textValue="Export All to File">
                      <Export className="size-4 shrink-0 text-muted" />
                      <Label>Export All to File</Label>
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="export-clipboard-selected"
                      isDisabled={selectedCardIds.length === 0}
                      textValue={`Export Selected (${selectedCardIds.length}) to Clipboard`}>
                      <Copy className="size-4 shrink-0 text-muted" />
                      <Label>Export Selected ({selectedCardIds.length}) to Clipboard</Label>
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="export-file-selected"
                      isDisabled={selectedCardIds.length === 0}
                      textValue={`Export Selected (${selectedCardIds.length}) to File`}>
                      <Export className="size-4 shrink-0 text-muted" />
                      <Label>Export Selected ({selectedCardIds.length}) to File</Label>
                    </Dropdown.Item>
                    {selectedCardIds.length > 0 && (
                      <Dropdown.Item variant="danger" id="clear-selection" textValue="Clear Selection">
                        <TrashBin2 className="size-4 shrink-0 text-danger" />
                        <Label>Clear Selection</Label>
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          </div>
        )}
      </Modal.Footer>
    </TabModal>
  );
}
