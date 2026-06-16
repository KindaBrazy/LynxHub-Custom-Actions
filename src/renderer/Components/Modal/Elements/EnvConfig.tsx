import {Button, Input} from '@heroui/react';
import {TrashBin2} from '@solar-icons/react-perf/BoldDuotone';
import {Plus} from 'lucide-react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {reducerActions, selectEditingCard} from '../../../reducer';

export function EnvConfig() {
  const dispatch = useDispatch();
  const editingCard = useSelector(selectEditingCard);

  const env = editingCard?.env || [];

  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleAdd = () => {
    if (newKey.trim()) {
      dispatch(reducerActions.addEnv({key: newKey.trim(), value: newValue}));
      setNewKey('');
      setNewValue('');
    }
  };

  const handleRemove = (index: number) => {
    dispatch(reducerActions.removeEnv(index));
  };

  const handleUpdate = (index: number, key: string, value: string) => {
    dispatch(reducerActions.updateEnv({index, key, value}));
  };

  return (
    <div className="flex flex-col gap-y-4">
      {env.length > 0 && (
        <div className="flex flex-col gap-y-2">
          {env.map((item, index) => (
            <div key={index} className="flex items-center gap-x-2 w-full">
              <Input
                size="sm"
                value={item.key}
                className="w-1/3"
                placeholder="KEY (e.g., PORT)"
                onChange={e => handleUpdate(index, e.target.value, item.value)}
              />
              <Input
                size="sm"
                value={item.value}
                className="flex-1"
                placeholder="VALUE"
                onChange={e => handleUpdate(index, item.key, e.target.value)}
              />
              <Button size="sm" variant="danger-soft" onPress={() => handleRemove(index)} isIconOnly>
                <TrashBin2 className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-x-2 w-full">
        <Input
          size="sm"
          value={newKey}
          className="w-1/3"
          placeholder="New Key (e.g., NODE_ENV)"
          onChange={e => setNewKey(e.target.value)}
        />
        <Input
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAdd();
            }
          }}
          size="sm"
          value={newValue}
          className="flex-1"
          placeholder="Value (e.g., production)"
          onChange={e => setNewValue(e.target.value)}
        />
        <Button size="sm" variant="tertiary" onPress={handleAdd} isIconOnly>
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  );
}
