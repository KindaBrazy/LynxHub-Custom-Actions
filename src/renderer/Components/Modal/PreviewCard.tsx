import {Card} from '@heroui/react';
import {motion} from 'framer-motion';
import {ReactNode} from 'react';

import {CustomCard} from '../../../cross/CrossTypes';

type Props = {card: CustomCard; handleEdit: (card: CustomCard) => void; icon: ReactNode};

export function PreviewCard({card, handleEdit, icon}: Props) {
  return (
    <motion.div whileHover={{y: -5, scale: 1.05}}>
      <Card
        className={
          'text-center p-8 bg-foreground-100 w-[170px] h-[150px] flex flex-col' +
          ' items-center justify-center gap-y-4 shadow-lg'
        }
        onPress={() => handleEdit(card)}
        isPressable>
        <div
          style={{backgroundColor: card.accentColor}}
          className="flex size-12 items-center justify-center rounded-full shrink-0">
          {icon}
        </div>
        <p className="font-semibold">{card.title}</p>
      </Card>
    </motion.div>
  );
}
