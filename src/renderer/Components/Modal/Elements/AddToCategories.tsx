import {Checkbox} from '@heroui/react';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {CustomCard} from '../../../../cross/CrossTypes';
import {reducerActions, useCustomActionsState} from '../../../reducer';

export function AddToCategories() {
  const dispatch = useDispatch();

  const editingCard = useCustomActionsState('editingCard');
  const categories = useMemo(() => editingCard?.categories, [editingCard]);

  const handleCategoryChange = (id: keyof CustomCard['categories'], value: boolean) => {
    dispatch(reducerActions.setCategories({id, value}));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <Checkbox
        id="pinned"
        isSelected={categories?.pinned}
        onValueChange={value => handleCategoryChange('pinned', value)}>
        Pinned
      </Checkbox>
      <Checkbox
        id="recentlyUsed"
        isSelected={categories?.recentlyUsed}
        onValueChange={value => handleCategoryChange('recentlyUsed', value)}>
        Recently Used
      </Checkbox>
      <Checkbox id="all" isSelected={categories?.all} onValueChange={value => handleCategoryChange('all', value)}>
        All
      </Checkbox>
      <Checkbox id="image" isSelected={categories?.image} onValueChange={value => handleCategoryChange('image', value)}>
        Image Generation
      </Checkbox>
      <Checkbox id="text" isSelected={categories?.text} onValueChange={value => handleCategoryChange('text', value)}>
        Text Generation
      </Checkbox>
      <Checkbox id="audio" isSelected={categories?.audio} onValueChange={value => handleCategoryChange('audio', value)}>
        Audio Generation
      </Checkbox>
    </div>
  );
}
