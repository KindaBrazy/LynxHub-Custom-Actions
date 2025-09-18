import {Button, ButtonGroup, Code, Input} from '@heroui/react';
import {AnimatePresence, motion, Reorder} from 'framer-motion';
import {KeyboardEvent, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';

import {Add_Icon, Terminal_Icon} from '../../../../../../src/renderer/src/assets/icons/SvgIcons/SvgIcons';
import {CustomExecuteActions} from '../../../../cross/CrossTypes';
import {extRendererIpc} from '../../../Extension';
import {reducerActions, useCustomActionsState} from '../../../reducer';
import {
  BookmarkOpenDuo_Icon,
  CodeDuo_Icon,
  FileCodeDuo_Icon,
  FolderDuo_Icon,
  Grip_Icon,
  PlayDuo_Icon,
  TrashDuo_Icon,
} from '../../SvgIcons';
import {AddExe} from './AddExe';
import {AddScript} from './AddScript';

export function ExecuteActions() {
  const dispatch = useDispatch();
  const [commandInput, setCommandInput] = useState<string>('');
  const editingCard = useCustomActionsState('editingCard');

  const [addingFile, setAddingFile] = useState<boolean>(false);
  const [addingFolder, setAddingFolder] = useState<boolean>(false);

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

  const onReorder = (items: string[]) => {
    const newOrder = items.map(actionName => actions.find(action => action.action === actionName));
    if (newOrder.every(item => item !== undefined)) {
      dispatch(reducerActions.setActions(newOrder));
    }
  };

  const handleAddFile = () => {
    setAddingFile(true);
    extRendererIpc.file.openDlg({properties: ['openFile']}).then(action => {
      if (action) dispatch(reducerActions.addAction({action, type: 'open'}));
      setAddingFile(false);
    });
  };

  const handleAddFolder = () => {
    setAddingFolder(true);
    extRendererIpc.file.openDlg({properties: ['openDirectory']}).then(action => {
      if (action) dispatch(reducerActions.addAction({action, type: 'open'}));
      setAddingFolder(false);
    });
  };

  const renderBody = (item: CustomExecuteActions, index: number) => {
    switch (item.type) {
      case 'exe':
      case 'script':
        return (
          <>
            <span>{index + 1}.</span>
            <PlayDuo_Icon />
            <span className="w-full text-small ml-1.5 truncate">{item.action}</span>
            <Button size="sm" color="danger" variant="light" onPress={() => handleRemoveCommand(index)} isIconOnly>
              <TrashDuo_Icon className="size-4" />
            </Button>
          </>
        );
      case 'open':
        return (
          <>
            <span>{index + 1}.</span>
            <BookmarkOpenDuo_Icon />
            <span className="w-full text-small ml-1.5 truncate">{item.action}</span>
            <Button size="sm" color="danger" variant="light" onPress={() => handleRemoveCommand(index)} isIconOnly>
              <TrashDuo_Icon className="size-4" />
            </Button>
          </>
        );
      case 'command':
        return (
          <>
            <span>{index + 1}.</span>
            <CodeDuo_Icon />
            <Code radius="sm" className="w-full">
              {item.action}
            </Code>
            <Button size="sm" color="danger" variant="light" onPress={() => handleRemoveCommand(index)} isIconOnly>
              <TrashDuo_Icon className="size-4" />
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
        <ButtonGroup fullWidth>
          <Button isLoading={addingFile} onPress={handleAddFile} startContent={!addingFile && <FileCodeDuo_Icon />}>
            Add File
          </Button>
          <Button isLoading={addingFolder} onPress={handleAddFolder} startContent={!addingFolder && <FolderDuo_Icon />}>
            Add Folder
          </Button>
        </ButtonGroup>
      </div>
      <div>
        {(cardType === 'terminal_browser' || cardType === 'terminal') && (
          <div className="flex items-center gap-x-4">
            <Input
              value={commandInput}
              onValueChange={setCommandInput}
              startContent={<Terminal_Icon />}
              onKeyDown={handleCommandKeyDown}
              placeholder="Enter command and press Enter..."
            />
            <Button variant="flat" onPress={handleAddCommand} startContent={<Add_Icon />}>
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
                className="space-y-2"
                onReorder={onReorder}
                values={actions.map(item => item.action)}>
                {actions.map((item, index) => (
                  <Reorder.Item
                    className={
                      'rounded-medium bg-foreground-100 cursor-grab active:cursor-grabbing' +
                      ' flex items-center gap-x-2 p-2'
                    }
                    key={item.action}
                    value={item.action}>
                    <Grip_Icon className="text-foreground-500" />
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
