import {Description, Key, Label, ListBox, Select} from '@heroui/react';
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

  const onSelectionChange = (key: Key | null) => {
    if (!key || typeof key === 'number') return;

    dispatch(reducerActions.setCardType(key as CustomCardType));
  };

  return (
    <div className="flex flex-col gap-y-3">
      <Select value={cardType} onChange={onSelectionChange} placeholder="Select Card Type" fullWidth>
        <Label>Select the card type that fits your needs:</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="executable" key="executable" textValue="Executable">
              <div className="flex flex-col">
                <Label className="flex items-center gap-x-2">
                  <Play />
                  Executable
                </Label>
                <Description>Run and manage a program</Description>
              </div>
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="terminal_browser" key="terminal_browser" textValue="Terminal & Browser">
              <div className="flex flex-col">
                <Label className="flex items-center gap-x-2">
                  <div className="flex flex-row items-center gap-x-1">
                    <Terminal_Icon />
                    <Earth />
                  </div>
                  Terminal & Browser
                </Label>
                <Description>Open a terminal and a browser simultaneously.</Description>
              </div>
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="browser" key="browser" textValue="Browser">
              <div className="flex flex-col">
                <Label className="flex items-center gap-x-2">
                  <Earth />
                  Browser
                </Label>
                <Description>Open a browser with a custom URL.</Description>
              </div>
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="terminal" key="terminal" textValue="Terminal">
              <div className="flex flex-col">
                <Label className="flex items-center gap-x-2">
                  <Terminal_Icon />
                  Terminal
                </Label>
                <Description>Open a terminal to run custom commands or scripts.</Description>
              </div>
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
}
