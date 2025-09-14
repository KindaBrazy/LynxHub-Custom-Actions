import {Button, Checkbox, Input, NumberInput} from '@heroui/react';
import {AnimatePresence, motion} from 'framer-motion';

type Props = {
  customUrl: string;
  setCustomUrl: (url: string) => void;
  useAutoCatch: boolean;
  setUseAutoCatch: (use: boolean) => void;
  openImmediately: boolean;
  setOpenImmediately: (open: boolean) => void;
  timeout: number;
  setTimeoutValue: (value: number) => void;
};

export function UrlConfig({
  customUrl,
  setCustomUrl,
  useAutoCatch,
  setUseAutoCatch,
  openImmediately,
  setOpenImmediately,
  timeout,
  setTimeoutValue,
}: Props) {
  return (
    <>
      <div className="flex flex-row gap-x-4 items-center justify-center">
        <Input
          value={customUrl}
          isDisabled={useAutoCatch}
          placeholder="Enter custom URL..."
          onChange={e => setCustomUrl(e.target.value)}
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
