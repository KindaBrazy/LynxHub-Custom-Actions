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
import {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

import {reducerActions, useCustomActionsState} from '../../../reducer';
import {CardIconById, CardIconsList} from '../../CardIcons';

export function CardDetails() {
  const dispatch = useDispatch();
  const editingCard = useCustomActionsState('editingCard');

  const [title, setTitle] = useState<string>(editingCard?.title || '');
  const [desc, setDesc] = useState<string>(editingCard?.description || '');

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [color, setColor] = useState(parseColor(editingCard?.accentColor || '#325578'));
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

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  const changeIcon = (icon: string) => {
    dispatch(reducerActions.setIcon(icon));
  };

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      dispatch(reducerActions.setTitle(title));
    }, 150);
  }, [title]);
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      dispatch(reducerActions.setDescription(desc));
    }, 150);
  }, [desc]);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="md:col-span-2 space-y-4">
        <Input
          value={title || ''}
          placeholder="Card Title (required)"
          onChange={e => setTitle(e.target.value)}
          fullWidth
        />

        <TextArea
          value={desc || ''}
          onChange={e => setDesc(e.target.value)}
          placeholder="Card Description (optional)"
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
              <ColorSwatch size="xl" />
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
        </div>
      </div>
    </div>
  );
}
