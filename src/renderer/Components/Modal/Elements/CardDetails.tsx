import {Button, Input, Textarea} from '@heroui/react';
import {ColorPicker} from 'antd';

import {ImageGeneration_Icon} from '../../../../../../src/renderer/src/assets/icons/SvgIcons/SvgIcons';

type Props = {accentColor: string; setAccentColor: (color: string) => void};

export function CardDetails({accentColor, setAccentColor}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 space-y-4">
        <Input placeholder="Card Title (required)" />

        <Textarea maxRows={3} placeholder="Card Description (optional)" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <Button className="border-2 border-dashed hover:border-success size-24 group" isIconOnly>
          <ImageGeneration_Icon className="size-10 group-hover:text-success-700 transition-colors duration-300" />
        </Button>
        <span className="text-sm text-foreground-500">Select Icon (optional)</span>
        <div className="flex items-center space-x-2">
          <label htmlFor="accent-color" className="text-sm text-foreground-500">
            Accent:
          </label>
          <ColorPicker
            defaultFormat="hex"
            value={accentColor}
            onChangeComplete={color => setAccentColor(color.toHexString())}
            showText
            disabledAlpha
            disabledFormat
          />
        </div>
      </div>
    </div>
  );
}
