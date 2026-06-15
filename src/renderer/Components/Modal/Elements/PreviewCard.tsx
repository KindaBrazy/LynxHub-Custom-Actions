import {Card} from '@heroui/react';
import {motion} from 'framer-motion';
import {ReactNode} from 'react';

import {CustomCard} from '../../../../cross/CrossTypes';

type Props = {card: CustomCard; handleEdit: (card: CustomCard) => void; icon: ReactNode};

export function PreviewCard({card, handleEdit, icon}: Props) {
  return (
    <motion.div transition={{duration: 0.2}} whileHover={{y: -2, scale: 1.02}}>
      <Card
        variant="secondary"
        onClick={() => handleEdit(card)}
        className="w-42.5 h-37.5 cursor-pointer items-center justify-center group transition duration-200">
        <div className="flex size-[3.3rem] items-center justify-center shrink-0">{icon}</div>
        <p className="font-semibold">{card.title}</p>
      </Card>
    </motion.div>
  );
}
