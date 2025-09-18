import {Select, SelectItem, SharedSelection} from '@heroui/react';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {CustomCardType} from '../../../../cross/CrossTypes';
import {reducerActions, useCustomActionsState} from '../../../reducer';

export function CardType() {
  const dispatch = useDispatch();
  const editingCard = useCustomActionsState('editingCard');

  const cardType = useMemo(() => editingCard?.cardType || 'terminal_browser', [editingCard]);

  const onSelectionChange = (selected: SharedSelection) => {
    if (selected !== 'all') {
      const value = Array.from(selected)[0].toString() as CustomCardType;
      value.toString();
      dispatch(reducerActions.setCardType(value));
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-foreground-600">Select the card type that fits your needs:</span>
      <Select
        selectionMode="single"
        label="Select Card Type"
        selectedKeys={[cardType]}
        onSelectionChange={onSelectionChange}>
        <SelectItem key="executable" description="Run and manage a program">
          Executable
        </SelectItem>
        <SelectItem key="terminal_browser" description="Open a terminal and a browser simultaneously.">
          Terminal & Browser
        </SelectItem>
        <SelectItem key="browser" description="Open a browser with a custom URL.">
          Browser
        </SelectItem>
        <SelectItem key="terminal" description="Open a terminal to run custom commands or scripts.">
          Terminal
        </SelectItem>
      </Select>
    </div>
  );
}
