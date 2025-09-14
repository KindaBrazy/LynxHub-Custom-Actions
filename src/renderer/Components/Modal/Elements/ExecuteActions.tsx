import {Button, Code, Input} from '@heroui/react';
import {AnimatePresence, motion, Reorder} from 'framer-motion';
import {KeyboardEvent, useState} from 'react';

import {
  Add_Icon,
  OpenFolder_Icon,
  Play_Icon,
  Terminal_Icon,
} from '../../../../../../src/renderer/src/assets/icons/SvgIcons/SvgIcons';
import {FileCodeDuo_Icon, Grip_Icon, TrashDuo_Icon} from '../../SvgIcons';

export function ExecuteActions() {
  const [terminalCommandInput, setTerminalCommandInput] = useState('');
  const [terminalCommandsList, setTerminalCommandsList] = useState<string[]>(['npm install', 'npm run dev']);

  const handleAddCommand = () => {
    if (terminalCommandInput.trim()) {
      setTerminalCommandsList(prev => [...prev, terminalCommandInput.trim()]);
      setTerminalCommandInput('');
    }
  };
  const handleCommandKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCommand();
    }
  };

  const handleRemoveCommand = (indexToRemove: number) => {
    setTerminalCommandsList(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <div className="w-full flex flex-row gap-x-4 items-center justify-center">
        <Button startContent={<FileCodeDuo_Icon />} fullWidth>
          Add Script
        </Button>
        <Button startContent={<Play_Icon />} fullWidth>
          Add Executable
        </Button>
        <Button startContent={<OpenFolder_Icon />} fullWidth>
          Add Executable
        </Button>
      </div>
      <div>
        <div className="flex items-center gap-x-4">
          <Input
            value={terminalCommandInput}
            startContent={<Terminal_Icon />}
            onKeyDown={handleCommandKeyDown}
            onValueChange={setTerminalCommandInput}
            placeholder="Enter command and press Enter..."
          />
          <Button variant="flat" onPress={handleAddCommand} startContent={<Add_Icon />}>
            Add
          </Button>
        </div>

        <AnimatePresence>
          {terminalCommandsList.length > 0 && (
            <motion.div
              className="overflow-hidden"
              exit={{opacity: 0, height: 0, marginTop: 0}}
              initial={{opacity: 0, height: 0, marginTop: 0}}
              animate={{opacity: 1, height: 'auto', marginTop: '1rem'}}>
              <Reorder.Group
                axis="y"
                className="space-y-2"
                values={terminalCommandsList}
                onReorder={setTerminalCommandsList}>
                {terminalCommandsList.map((command, index) => (
                  <Reorder.Item
                    className={
                      'rounded-medium bg-foreground-100 cursor-grab active:cursor-grabbing' +
                      ' flex items-center gap-x-2 p-3'
                    }
                    key={command}
                    value={command}>
                    <Grip_Icon className="text-foreground-500" />
                    <Code radius="sm" className="w-full">
                      {command}
                    </Code>
                    <Button
                      size="sm"
                      color="danger"
                      variant="light"
                      onPress={() => handleRemoveCommand(index)}
                      isIconOnly>
                      <TrashDuo_Icon className="size-4" />
                    </Button>
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
