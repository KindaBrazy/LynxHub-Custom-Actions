import {Button, ButtonGroup, Description, Input, Label, NumberField, Separator, TextField} from '@heroui-v3/react';
import {AnimatePresence, motion} from 'framer-motion';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {CustomUrlConfigType} from '../../../../cross/CrossTypes';
import {reducerActions, useCustomActionsState} from '../../../reducer';

export function UrlConfig() {
  const dispatch = useDispatch();
  const editingCard = useCustomActionsState('editingCard');

  const urlConfigType = useMemo(() => editingCard?.urlConfig.type || 'nothing', [editingCard]);
  const customUrl = useMemo(() => editingCard?.urlConfig.customUrl, [editingCard]);
  const openImmediately = useMemo(() => editingCard?.urlConfig.openImmediately, [editingCard]);
  const timeout = useMemo(() => editingCard?.urlConfig.timeout, [editingCard]);
  const findLine = useMemo(() => editingCard?.urlConfig.findLine, [editingCard]);

  const setUrlConfigType = (value: CustomUrlConfigType) => dispatch(reducerActions.setUrlConfigType(value));
  const setCustomUrl = (value: string) => dispatch(reducerActions.setCustomUrl(value));
  const setOpenImmediately = (value: boolean) => dispatch(reducerActions.setOpenImmediately(value));
  const setTimeoutValue = (value: number) => dispatch(reducerActions.setTimeoutValue(value));
  const setFindLine = (value: string) => dispatch(reducerActions.setFindLine(value));

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-foreground-600">URL Detection Method:</span>
      <ButtonGroup fullWidth>
        <Button
          onPress={() => setUrlConfigType('nothing')}
          variant={urlConfigType === 'nothing' ? 'primary' : 'secondary'}>
          No Browser
        </Button>
        <Button
          onPress={() => setUrlConfigType('custom')}
          variant={urlConfigType === 'custom' ? 'primary' : 'secondary'}>
          Custom URL
        </Button>
        <Button
          onPress={() => setUrlConfigType('findLine')}
          variant={urlConfigType === 'findLine' ? 'primary' : 'secondary'}>
          Scan Terminal
        </Button>
      </ButtonGroup>

      <AnimatePresence>
        {urlConfigType === 'custom' && (
          <motion.div
            exit={{opacity: 0, height: 0}}
            initial={{opacity: 0, height: 0}}
            className="flex flex-col gap-y-3"
            animate={{opacity: 1, height: 'auto'}}>
            <Separator />
            <TextField value={customUrl} onChange={setCustomUrl}>
              <Label>Custom URL</Label>
              <Input placeholder="Enter custom URL (e.g., http://localhost:7860)" />
              <Description>Specify the exact URL to open in the browser</Description>
            </TextField>
            <div className="flex items-center gap-x-4 w-full">
              <span className="text-sm text-foreground-500 shrink-0">Open URL:</span>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  onPress={() => setOpenImmediately(true)}
                  variant={openImmediately ? 'primary' : 'secondary'}>
                  Immediately
                </Button>
                <Button
                  size="sm"
                  onPress={() => setOpenImmediately(false)}
                  variant={openImmediately ? 'secondary' : 'primary'}>
                  After Timeout (Seconds)
                </Button>
              </div>
              {!openImmediately && (
                <NumberField minValue={1} maxValue={999} value={timeout} onChange={setTimeoutValue} fullWidth>
                  <NumberField.Group>
                    <NumberField.DecrementButton />
                    <NumberField.Input />
                    <NumberField.IncrementButton />
                  </NumberField.Group>
                </NumberField>
              )}
            </div>
          </motion.div>
        )}

        {urlConfigType === 'findLine' && (
          <motion.div
            className="overflow-hidden"
            exit={{opacity: 0, height: 0}}
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}>
            <div className="flex flex-col gap-y-3 border-t border-foreground-200 pt-4 mt-2">
              <TextField value={findLine} onChange={setFindLine}>
                <Label>Line Must Contain</Label>
                <Input placeholder='e.g., "Running on local URL:" or "Uvicorn running on"' />
                <Description>
                  Enter text to search for in terminal output. The URL will be extracted from that line.
                </Description>
              </TextField>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
