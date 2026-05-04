import {Select, SelectItem, SharedSelection} from '@heroui/react';
import {Terminal_Icon} from '@lynx_assets/icons';
import {Play} from '@solar-icons/react-perf/Bold';
import {Earth} from '@solar-icons/react-perf/BoldDuotone';
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

  const startContent = useMemo(() => {
    switch (cardType) {
      case 'executable':
        return <Play />;
      case 'browser':
        return <Earth />;
      case 'terminal':
        return <Terminal_Icon />;
      case 'terminal_browser':
        return (
          <>
            <Terminal_Icon />
            <Earth />
          </>
        );
    }
  }, [cardType]);

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-foreground-600">Select the card type that fits your needs:</span>
      <Select
        selectionMode="single"
        label="Select Card Type"
        selectedKeys={[cardType]}
        startContent={startContent}
        onSelectionChange={onSelectionChange}
        disallowEmptySelection>
        <SelectItem key="executable" startContent={<Play />} description="Run and manage a program">
          Executable
        </SelectItem>
        <SelectItem
          startContent={
            <div>
              <Terminal_Icon />
              <Earth />
            </div>
          }
          key="terminal_browser"
          description="Open a terminal and a browser simultaneously.">
          Terminal & Browser
        </SelectItem>
        <SelectItem key="browser" startContent={<Earth />} description="Open a browser with a custom URL.">
          Browser
        </SelectItem>
        <SelectItem
          key="terminal"
          startContent={<Terminal_Icon />}
          description="Open a terminal to run custom commands or scripts.">
          Terminal
        </SelectItem>
      </Select>
    </div>
  );
}
