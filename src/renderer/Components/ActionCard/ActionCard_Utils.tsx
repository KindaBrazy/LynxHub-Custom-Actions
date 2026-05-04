import {Variants} from 'framer-motion';

// Framer Motion Variants for cleaner animation definitions
export const cardVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {type: 'spring', stiffness: 300, damping: 15},
  },
  tap: {
    scale: 0.95,
  },
};

export const glowVariants: Variants = {
  initial: {opacity: 0},
  hover: {opacity: 0.2, transition: {duration: 0.5, ease: 'easeOut'}},
};

export const iconVariants: Variants = {
  initial: {scale: 1, rotate: 0},
  hover: {scale: 1.2, rotate: -2, transition: {duration: 0.5, ease: 'easeOut'}},
};
