import {Select, SelectItem, SharedSelection} from '@heroui/react';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {Play_Icon, Terminal_Icon, Web_Icon} from '../../../../../../src/renderer/src/assets/icons/SvgIcons/SvgIcons';
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
        return <Play_Icon />;
      case 'browser':
        return <Web_Icon />;
      case 'terminal':
        return <Terminal_Icon />;
      case 'terminal_browser':
        return (
          <>
            <Terminal_Icon />
            <Web_Icon />
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
        <SelectItem key="executable" startContent={<Play_Icon />} description="Run and manage a program">
          Executable
        </SelectItem>
        <SelectItem
          startContent={
            <div>
              <Terminal_Icon />
              <Web_Icon />
            </div>
          }
          key="terminal_browser"
          description="Open a terminal and a browser simultaneously.">
          Terminal & Browser
        </SelectItem>
        <SelectItem key="browser" startContent={<Web_Icon />} description="Open a browser with a custom URL.">
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
