import {
  Button,
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  Input,
  Label,
  parseColor,
  TextArea,
} from '@heroui-v3/react';
import {Shuffle} from '@solar-icons/react-perf/BoldDuotone';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {reducerActions, useCustomActionsState} from '../../../reducer';
import {CardIconById, CardIconsList} from '../../CardIcons';

export function CardDetails() {
  const dispatch = useDispatch();
  const editingCard = useCustomActionsState('editingCard');

  const [color, setColor] = useState(parseColor('#325578'));
  const colorPresets = [
    '#ef4444',
    '#f97316',
    '#eab308',
    '#22c55e',
    '#06b6d4',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#f43f5e',
  ];
  const shuffleColor = () => {
    const randomHue = Math.floor(Math.random() * 360);
    const randomSaturation = 50 + Math.floor(Math.random() * 50); // 50-100%
    const randomLightness = 40 + Math.floor(Math.random() * 30); // 40-70%
    setColor(parseColor(`hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`));
  };

  useEffect(() => {
    dispatch(reducerActions.setAccentColor(color.toString('hex')));
  }, [color]);

  const changeIcon = (icon: string) => {
    dispatch(reducerActions.setIcon(icon));
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
        <Input
          value={editingCard?.title || ''}
          placeholder="Card Title (required)"
          onChange={e => onTitleChange(e.target.value)}
          fullWidth
        />

        <TextArea
          value={editingCard?.description || ''}
          placeholder="Card Description (optional)"
          onChange={e => onDescChange(e.target.value)}
          fullWidth
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-y-4">
        <div className="flex flex-row flex-wrap gap-2">
          {CardIconsList.map(icon => {
            const Target = CardIconById(icon);
            const isSelected = editingCard?.icon === icon;
            return (
              <Button
                size="lg"
                key={icon}
                variant={'ghost'}
                onPress={() => changeIcon(icon)}
                className={`size-20 ${isSelected ? 'bg-accent-soft-hover' : ''}`}
                isIconOnly>
                <Target className="size-14" />
              </Button>
            );
          })}
        </div>
        <div>
          <ColorPicker value={color} onChange={setColor}>
            <ColorPicker.Trigger>
              <ColorSwatch size="lg" />
              <Label>Accent Color</Label>
            </ColorPicker.Trigger>
            <ColorPicker.Popover className="gap-2">
              <ColorSwatchPicker size="xs" className="justify-center pt-2">
                {colorPresets.map(preset => (
                  <ColorSwatchPicker.Item key={preset} color={preset}>
                    <ColorSwatchPicker.Swatch />
                  </ColorSwatchPicker.Item>
                ))}
              </ColorSwatchPicker>
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="max-w-full"
                aria-label="Color area">
                <ColorArea.Thumb />
              </ColorArea>
              <div className="flex items-center gap-2 px-1">
                <ColorSlider channel="hue" colorSpace="hsb" className="flex-1" aria-label="Hue slider">
                  <ColorSlider.Track>
                    <ColorSlider.Thumb />
                  </ColorSlider.Track>
                </ColorSlider>
                <Button size="sm" variant="ghost" onPress={shuffleColor} aria-label="Shuffle color" isIconOnly>
                  <Shuffle className="size-5" />
                </Button>
              </div>
              <ColorField aria-label="Color field">
                <ColorField.Group variant="secondary">
                  <ColorField.Prefix>
                    <ColorSwatch size="xs" />
                  </ColorField.Prefix>
                  <ColorField.Input />
                </ColorField.Group>
              </ColorField>
            </ColorPicker.Popover>
          </ColorPicker>
          {/*<ColorPicker
            size="large"
            defaultFormat="hex"
            onChangeComplete={changeAccent}
            value={editingCard?.accentColor}
            showText
            disabledFormat
          />*/}
        </div>
      </div>
    </div>
  );
}
