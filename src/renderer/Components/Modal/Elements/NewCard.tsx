import {Card} from '@heroui/react';
import {motion} from 'framer-motion';

import {Add_Icon} from '../../../../../../src/renderer/src/assets/icons/SvgIcons/SvgIcons';

type Props = {handleCreateNew: () => void};

export function NewCard({handleCreateNew}: Props) {
  return (
    <motion.div whileHover={{y: -5, scale: 1.05}}>
      <Card
        className={
          'w-[170px] h-[150px] group flex flex-col items-center justify-center' +
          ' p-4 gap-y-4 border-2 border-dashed border-gray-600 hover:border-primary'
        }
        onPress={handleCreateNew}
        isPressable>
        <div className="flex size-12 items-center justify-center rounded-full bg-gray-700">
          <Add_Icon />
        </div>
        <p className="font-semibold text-foreground-500 group-hover:text-foreground transition-colors duration-300">
          Create New
        </p>
      </Card>
    </motion.div>
  );
}
