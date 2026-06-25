import {Checkbox} from '@heroui/react';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {CustomCategory} from '../../../../cross/CrossTypes';
import {reducerActions, selectEditingCard} from '../../../reducer';

export function AddToCategories() {
  const dispatch = useDispatch();

  const editingCard = useSelector(selectEditingCard);
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
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Pinned
        </Checkbox.Content>
      </Checkbox>

      <Checkbox
        id="recentlyUsed"
        isSelected={categories?.recentlyUsed || false}
        onChange={value => handleCategoryChange('recentlyUsed', value)}>
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Recently Used
        </Checkbox.Content>
      </Checkbox>

      <Checkbox id="all" isSelected={categories?.all || false} onChange={value => handleCategoryChange('all', value)}>
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          All
        </Checkbox.Content>
      </Checkbox>

      <Checkbox
        id="image"
        isSelected={categories?.image || false}
        onChange={value => handleCategoryChange('image', value)}>
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Image Generation
        </Checkbox.Content>
      </Checkbox>

      <Checkbox
        id="text"
        isSelected={categories?.text || false}
        onChange={value => handleCategoryChange('text', value)}>
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Text Generation
        </Checkbox.Content>
      </Checkbox>

      <Checkbox
        id="audio"
        isSelected={categories?.audio || false}
        onChange={value => handleCategoryChange('audio', value)}>
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Audio Generation
        </Checkbox.Content>
      </Checkbox>
    </div>
  );
}
