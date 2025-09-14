import {Checkbox, Input} from '@heroui/react';

type Props = {
  customUrl: string;
  setCustomUrl: (url: string) => void;
  useAutoCatch: boolean;
  setUseAutoCatch: (use: boolean) => void;
};

export function UrlConfig({customUrl, setCustomUrl, useAutoCatch, setUseAutoCatch}: Props) {
  return (
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
  );
}
