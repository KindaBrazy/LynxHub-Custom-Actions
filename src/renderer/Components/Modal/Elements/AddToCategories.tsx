import {Checkbox, Label} from '@heroui/react';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {CustomCategory} from '../../../../cross/CrossTypes';
import {reducerActions, useCustomActionsState} from '../../../reducer';

export function AddToCategories() {
  const dispatch = useDispatch();

  const editingCard = useCustomActionsState('editingCard');
  const categories = useMemo(() => editingCard?.categories, [editingCard]);

  const handleCategoryChange = (id: CustomCategory, value: boolean) => {
    dispatch(reducerActions.setCategories({id, value}));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <Checkbox
        id="pinned"
        isSelected={categories?.pinned || false}
        onChange={value => handleCategoryChange('pinned', value)}>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="pinned" className="cursor-pointer">
            Pinned
          </Label>
        </Checkbox.Content>
      </Checkbox>

      <Checkbox
        id="recentlyUsed"
        isSelected={categories?.recentlyUsed || false}
        onChange={value => handleCategoryChange('recentlyUsed', value)}>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="recentlyUsed" className="cursor-pointer">
            Recently Used
          </Label>
        </Checkbox.Content>
      </Checkbox>

      <Checkbox id="all" isSelected={categories?.all || false} onChange={value => handleCategoryChange('all', value)}>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="all" className="cursor-pointer">
            All
          </Label>
        </Checkbox.Content>
      </Checkbox>

      <Checkbox
        id="image"
        isSelected={categories?.image || false}
        onChange={value => handleCategoryChange('image', value)}>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="image" className="cursor-pointer">
            Image Generation
          </Label>
        </Checkbox.Content>
      </Checkbox>

      <Checkbox
        id="text"
        isSelected={categories?.text || false}
        onChange={value => handleCategoryChange('text', value)}>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="text" className="cursor-pointer">
            Text Generation
          </Label>
        </Checkbox.Content>
      </Checkbox>

      <Checkbox
        id="audio"
        isSelected={categories?.audio || false}
        onChange={value => handleCategoryChange('audio', value)}>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="audio" className="cursor-pointer">
            Audio Generation
          </Label>
        </Checkbox.Content>
      </Checkbox>
    </div>
  );
}
