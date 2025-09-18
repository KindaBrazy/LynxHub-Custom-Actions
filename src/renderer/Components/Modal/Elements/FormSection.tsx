import {motion} from 'framer-motion';
import type {ReactNode} from 'react';

type Props = {title: string; children: ReactNode};

export default function FormSection({title, children}: Props) {
  return (
    <motion.div
      layoutId={title}
      layout="position"
      className="space-y-4"
      initial={{opacity: 0, scale: 0.95}}
      animate={{opacity: 1, scale: 1, transition: {duration: 0.2}}}
      exit={{opacity: 0, scale: 0.95, transition: {duration: 0.1}}}>
      <h3 className="text-sm font-medium text-foreground-400">{title}</h3>
      <div className="space-y-4 rounded-2xl shadow-small  bg-white dark:bg-LynxRaisinBlack p-4">{children}</div>
    </motion.div>
  );
}
