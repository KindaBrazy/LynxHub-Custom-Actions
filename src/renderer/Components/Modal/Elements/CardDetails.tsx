import {Button, Input, TextArea} from '@heroui/react';
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

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  const changeIcon = (icon: string) => {
    dispatch(reducerActions.setIcon(icon));
  };

  const isFirstTitleRender = useRef(true);
  const isFirstDescRender = useRef(true);

  useEffect(() => {
    if (isFirstTitleRender.current) {
      isFirstTitleRender.current = false;
      return;
    }
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      dispatch(reducerActions.setTitle(title));
    }, 150);
  }, [title]);
  useEffect(() => {
    if (isFirstDescRender.current) {
      isFirstDescRender.current = false;
      return;
    }
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
      </div>
    </div>
  );
}
