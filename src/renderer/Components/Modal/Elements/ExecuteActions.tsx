import {Button, ButtonGroup, Input, InputGroup} from '@heroui/react';
import {Terminal_Icon} from '@lynx_assets/icons';
import filesIpc from '@lynx_shared/ipc/files';
import {Bookmark, Code, FileCheck, FolderOpen, Pen, Play, TrashBin2} from '@solar-icons/react-perf/BoldDuotone';
import {AnimatePresence, motion, Reorder} from 'framer-motion';
import {GripVertical, Plus} from 'lucide-react';
import {KeyboardEvent, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {CustomExecuteActions} from '../../../../cross/CrossTypes';
import {reducerActions, selectEditingCard} from '../../../reducer';
import {AddExe} from './AddExe';
import {AddScript} from './AddScript';

export function ExecuteActions() {
  const dispatch = useDispatch();
  const [commandInput, setCommandInput] = useState<string>('');
  const editingCard = useSelector(selectEditingCard);

  const [addingFile, setAddingFile] = useState<boolean>(false);
  const [addingFolder, setAddingFolder] = useState<boolean>(false);
  const [addingCdFolder, setAddingCdFolder] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');

  const actions = useMemo(() => editingCard?.actions || [], [editingCard]);
  const cardType = useMemo(() => editingCard?.cardType || [], [editingCard]);

  const handleAddCommand = () => {
    if (commandInput.trim()) {
      dispatch(reducerActions.addAction({action: commandInput, type: 'command'}));
      setCommandInput('');
    }
  };
  const handleCommandKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCommand();
    }
  };

  const handleRemoveCommand = (indexToRemove: number) => {
    dispatch(reducerActions.removeAction(indexToRemove));
  };

  const handleStartEdit = (index: number, currentValue: string) => {
    setEditingIndex(index);
    setEditingValue(currentValue);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null && editingValue.trim()) {
      dispatch(reducerActions.updateAction({index: editingIndex, newAction: editingValue.trim()}));
    }
    setEditingIndex(null);
    setEditingValue('');
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingValue('');
  };

  const handleEditKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelEdit();
    }
  };

  const onReorder = (items: string[]) => {
    const newOrder = items.map(actionName => actions.find(action => action.action === actionName));
    if (newOrder.every(item => item !== undefined)) {
      dispatch(reducerActions.setActions(newOrder));
    }
  };

  const handleAddFile = () => {
    setAddingFile(true);
    filesIpc.openDlg({properties: ['openFile']}).then(action => {
      if (action) dispatch(reducerActions.addAction({action, type: 'open'}));
      setAddingFile(false);
    });
  };

  const handleAddFolder = () => {
    setAddingFolder(true);
    filesIpc.openDlg({properties: ['openDirectory']}).then(action => {
      if (action) dispatch(reducerActions.addAction({action, type: 'open'}));
      setAddingFolder(false);
    });
  };

  const handleAddCdFolder = () => {
    setAddingCdFolder(true);
    filesIpc.openDlg({properties: ['openDirectory']}).then(action => {
      if (action) dispatch(reducerActions.addAction({action: `cd "${action}"`, type: 'command'}));
      setAddingCdFolder(false);
    });
  };

  const renderBody = (item: CustomExecuteActions, index: number) => {
    switch (item.type) {
      case 'exe':
      case 'script':
        return (
          <>
            <span>{index + 1}.</span>
            <Play />
            <span className="w-full text-sm ml-1.5 truncate">{item.action}</span>
            <Button
              size="sm"
              className="shrink-0"
              variant="danger-soft"
              onPress={() => handleRemoveCommand(index)}
              isIconOnly>
              <TrashBin2 className="size-4" />
            </Button>
          </>
        );
      case 'open':
        return (
          <>
            <span>{index + 1}.</span>
            <Bookmark />
            <span className="w-full text-sm ml-1.5 truncate">{item.action}</span>
            <Button
              size="sm"
              className="shrink-0"
              variant="danger-soft"
              onPress={() => handleRemoveCommand(index)}
              isIconOnly>
              <TrashBin2 className="size-4" />
            </Button>
          </>
        );
      case 'command':
        return editingIndex === index ? (
          <>
            <span>{index + 1}.</span>
            <Code className="shrink-0" />
            <Input
              value={editingValue}
              onBlur={handleSaveEdit}
              onKeyDown={handleEditKeyDown}
              onChange={e => setEditingValue(e.target.value)}
              fullWidth
              autoFocus
            />
          </>
        ) : (
          <>
            <span>{index + 1}.</span>
            <Code className="shrink-0" />
            <span className="w-full truncate bg-surface-secondary py-1.5 px-2 rounded-full font-JetBrainsMono">
              {item.action}
            </span>
            <Button
              size="sm"
              variant="tertiary"
              className="shrink-0"
              onPress={() => handleStartEdit(index, item.action)}
              isIconOnly>
              <Pen className="size-4" />
            </Button>
            <Button
              size="sm"
              className="shrink-0"
              variant="danger-soft"
              onPress={() => handleRemoveCommand(index)}
              isIconOnly>
              <TrashBin2 className="size-4" />
            </Button>
          </>
        );
    }
  };

  return (
    <>
      <div className="w-full flex flex-row gap-x-4 items-center justify-center">
        {cardType === 'executable' ? (
          <AddExe />
        ) : cardType === 'terminal_browser' || cardType === 'terminal' ? (
          <AddScript />
        ) : null}
        <ButtonGroup variant="secondary">
          <Button isPending={addingFile} onPress={handleAddFile}>
            {!addingFile && <FileCheck />}
            Add File
          </Button>
          <Button isPending={addingFolder} onPress={handleAddFolder}>
            {!addingFolder && <FolderOpen />}
            Add Folder
          </Button>
          {(cardType === 'terminal_browser' || cardType === 'terminal') && (
            <Button isPending={addingCdFolder} onPress={handleAddCdFolder}>
              {!addingCdFolder && <FolderOpen />}
              CD Folder
            </Button>
          )}
        </ButtonGroup>
      </div>
      <div>
        {(cardType === 'terminal_browser' || cardType === 'terminal') && (
          <div className="flex items-center gap-x-4">
            <InputGroup fullWidth>
              <InputGroup.Prefix>
                <Terminal_Icon />
              </InputGroup.Prefix>
              <InputGroup.Input
                value={commandInput}
                onKeyDown={handleCommandKeyDown}
                placeholder="Enter command and press Enter..."
                onChange={e => setCommandInput(e.target.value)}
              />
            </InputGroup>
            <Button variant="tertiary" onPress={handleAddCommand}>
              <Plus />
              Add
            </Button>
          </div>
        )}

        <AnimatePresence>
          {actions.length > 0 && (
            <motion.div
              className="overflow-hidden"
              exit={{opacity: 0, height: 0, marginTop: 0}}
              initial={{opacity: 0, height: 0, marginTop: 0}}
              animate={{opacity: 1, height: 'auto', marginTop: '1rem'}}>
              <Reorder.Group
                axis="y"
                onReorder={onReorder}
                className="flex flex-col gap-y-2 p-1"
                values={actions.map(item => item.action)}>
                {actions.map((item, index) => (
                  <Reorder.Item
                    className={
                      'rounded-full bg-surface shadow-surface cursor-grab active:cursor-grabbing' +
                      ' flex flex-row items-center gap-x-2 p-1.5 px-2'
                    }
                    key={item.action}
                    value={item.action}>
                    <GripVertical className="text-muted shrink-0 size-4" />
                    {renderBody(item, index)}
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
