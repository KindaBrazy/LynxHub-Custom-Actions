import {Card} from '@heroui/react';
import {motion} from 'framer-motion';
import {ReactNode} from 'react';

import {CustomCard} from '../../../../cross/CrossTypes';
import {PenDuo_Icon} from '../../SvgIcons';

type Props = {card: CustomCard; handleEdit: (card: CustomCard) => void; icon: ReactNode};

export function PreviewCard({card, handleEdit, icon}: Props) {
  return (
    <motion.div transition={{duration: 0.2}} whileHover={{y: -5, scale: 1.05}}>
      <Card
        className={
          'text-center p-8 bg-foreground-100 w-[170px] h-[150px] flex flex-col' +
          ' items-center justify-center gap-y-4 shadow-lg group'
        }
        onPress={() => handleEdit(card)}
        isPressable>
        <div className="flex size-[3.3rem] items-center justify-center shrink-0">{icon}</div>
        <p className="font-semibold" style={{color: card.accentColor}}>
          {card.title}
        </p>
        <PenDuo_Icon
          className={'absolute top-4 right-4 opacity-0 group-hover:opacity-70 transition-opacity duration-300'}
        />
      </Card>
    </motion.div>
  );
}
