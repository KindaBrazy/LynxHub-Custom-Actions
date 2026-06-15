import {Card} from '@heroui/react';
import {motion} from 'framer-motion';
import {Plus} from 'lucide-react';
import {useDispatch} from 'react-redux';

import {reducerActions} from '../../../reducer';

export function NewCard() {
  const dispatch = useDispatch();

  const handleCreateNew = () => dispatch(reducerActions.addCard());

  return (
    <motion.div transition={{duration: 0.2}} whileHover={{y: -2, scale: 1.02}}>
      <Card
        className={
          'w-42.5 h-37.5 group items-center justify-center cursor-pointer ' +
          ' border-2 border-dashed border-muted hover:border-foreground' +
          ' transition duration-200'
        }
        variant="secondary"
        onClick={handleCreateNew}>
        <div className="flex size-12 items-center justify-center rounded-full bg-surface-tertiary">
          <Plus />
        </div>
        <p className="font-semibold text-muted group-hover:text-foreground transition-colors duration-300">
          Create New
        </p>
      </Card>
    </motion.div>
  );
}
