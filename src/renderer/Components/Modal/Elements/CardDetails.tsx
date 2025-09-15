import {Button, Input, Textarea} from '@heroui/react';
import {ColorPicker} from 'antd';

import {useCustomActionsState} from '../../../reducer';
import {CardIconById, CardIconsList} from '../../CardIcons';

type Props = {accentColor: string; setAccentColor: (color: string) => void};

export function CardDetails({accentColor, setAccentColor}: Props) {
  const editingCard = useCustomActionsState('editingCard');

  return (
    <div className="flex flex-col gap-y-4">
      <div className="md:col-span-2 space-y-4">
        <Input placeholder="Card Title (required)" />

        <Textarea maxRows={3} placeholder="Card Description (optional)" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="flex flex-row flex-wrap gap-2">
          {CardIconsList.map(icon => {
            const Target = CardIconById(icon);
            const isSelected = editingCard?.icon === icon;
            return (
              <Button
                size="lg"
                key={icon}
                className="size-20"
                variant={isSelected ? 'solid' : 'light'}
                color={isSelected ? 'default' : 'default'}
                isIconOnly>
                <Target className="size-14" />
              </Button>
            );
          })}
        </div>
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
