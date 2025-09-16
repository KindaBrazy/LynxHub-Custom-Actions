import {Button, Input, Textarea} from '@heroui/react';
import {ColorPicker} from 'antd';
import {AggregationColor} from 'antd/es/color-picker/color';
import {useDispatch} from 'react-redux';

import {reducerActions, useCustomActionsState} from '../../../reducer';
import {CardIconById, CardIconsList} from '../../CardIcons';

export function CardDetails() {
  const dispatch = useDispatch();
  const editingCard = useCustomActionsState('editingCard');

  const changeIcon = (icon: string) => {
    dispatch(reducerActions.setIcon(icon));
  };
  const changeAccent = (color: AggregationColor) => {
    dispatch(reducerActions.setAccentColor(color.toHexString()));
  };
  const onTitleChange = (value: string) => {
    dispatch(reducerActions.setTitle(value));
  };
  const onDescChange = (value: string) => {
    dispatch(reducerActions.setDescription(value));
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="md:col-span-2 space-y-4">
        <Input onValueChange={onTitleChange} value={editingCard?.title || ''} placeholder="Card Title (required)" />

        <Textarea
          maxRows={3}
          onValueChange={onDescChange}
          value={editingCard?.description || ''}
          placeholder="Card Description (optional)"
        />
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
                onPress={() => changeIcon(icon)}
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
            Accent Color:
          </label>
          <ColorPicker
            size="large"
            defaultFormat="hex"
            onChangeComplete={changeAccent}
            value={editingCard?.accentColor}
            showText
            disabledFormat
          />
        </div>
      </div>
    </div>
  );
}
