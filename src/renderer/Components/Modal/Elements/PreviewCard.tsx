import {Card, Checkbox} from '@heroui/react';
import {motion} from 'framer-motion';
import {ReactNode} from 'react';

import {CustomCard} from '../../../../cross/CrossTypes';

type Props = {
  card: CustomCard;
  handleEdit: (card: CustomCard) => void;
  icon: ReactNode;
  isSelected?: boolean;
  onSelect?: (checked: boolean) => void;
};

export function PreviewCard({card, handleEdit, icon, isSelected, onSelect}: Props) {
  return (
    <motion.div className="relative" transition={{duration: 0.2}} whileHover={{y: -2, scale: 1.02}}>
      <Card
        variant="secondary"
        onClick={() => handleEdit(card)}
        className="w-42.5 h-37.5 cursor-pointer items-center justify-center group transition duration-200">
        <div className="flex size-[3.3rem] items-center justify-center shrink-0">{icon}</div>
        <p className="font-semibold text-center px-2">{card.title}</p>
      </Card>
      {onSelect && (
        <div onClick={e => e.stopPropagation()} className="absolute top-2 right-2 z-10">
          <Checkbox onChange={onSelect} isSelected={isSelected} aria-label={`Select ${card.title}`}>
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
            </Checkbox.Content>
          </Checkbox>
        </div>
      )}
    </motion.div>
  );
}
