import {Button, Checkbox, Input, NumberInput} from '@heroui/react';
import {AnimatePresence, motion} from 'framer-motion';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {reducerActions, useCustomActionsState} from '../../../reducer';

export function UrlConfig() {
  const dispatch = useDispatch();
  const editingCard = useCustomActionsState('editingCard');

  const customUrl = useMemo(() => editingCard?.urlConfig.customUrl, [editingCard]);
  const useAutoCatch = useMemo(() => editingCard?.urlConfig.useAutoCatch, [editingCard]);
  const openImmediately = useMemo(() => editingCard?.urlConfig.openImmediately, [editingCard]);
  const timeout = useMemo(() => editingCard?.urlConfig.timeout, [editingCard]);

  const setCustomUrl = (value: string) => dispatch(reducerActions.setCustomUrl(value));
  const setUseAutoCatch = (value: boolean) => dispatch(reducerActions.setUseAutoCatch(value));
  const setOpenImmediately = (value: boolean) => dispatch(reducerActions.setOpenImmediately(value));
  const setTimeoutValue = (value: number) => dispatch(reducerActions.setTimeoutValue(value));

  return (
    <>
      <div className="flex flex-row gap-x-4 items-center justify-center">
        <Input
          value={customUrl}
          isDisabled={useAutoCatch}
          onValueChange={setCustomUrl}
          placeholder="Enter custom URL..."
          isClearable
        />
        <Checkbox id="auto-catch" className="w-64" isSelected={useAutoCatch} onValueChange={setUseAutoCatch}>
          Auto Catch Address
        </Checkbox>
      </div>
      <AnimatePresence>
        {(customUrl || useAutoCatch) && (
          <motion.div
            className="overflow-hidden"
            exit={{opacity: 0, height: 0}}
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}>
            <div className="flex items-center space-x-4 border-t border-gray-700 pt-4 mt-4">
              <span className="text-sm text-gray-300">Open URL:</span>
              <div className="flex items-center space-x-2">
                <Button
                  onPress={() => setOpenImmediately(true)}
                  variant={openImmediately ? 'flat' : 'light'}
                  color={openImmediately ? 'primary' : 'default'}>
                  Immediately
                </Button>
                <Button
                  onPress={() => setOpenImmediately(false)}
                  variant={openImmediately ? 'light' : 'flat'}
                  color={openImmediately ? 'default' : 'primary'}>
                  After Timeout
                </Button>
              </div>
              {!openImmediately && (
                <div className="flex items-center space-x-2">
                  <NumberInput
                    size="sm"
                    minValue={1}
                    maxValue={50}
                    value={timeout}
                    aria-label="Timeout Seconds"
                    placeholder="Timeout Seconds"
                    onValueChange={setTimeoutValue}
                    endContent={<span className="text-xs text-foreground-500">Seconds</span>}
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
