import {motion, Variants} from 'framer-motion';
import {ReactElement} from 'react';

import {useAppState} from '../../../../src/renderer/src/App/Redux/Reducer/AppReducer';
import {SvgProps} from '../../../../src/renderer/src/assets/icons/SvgIconsContainer';

type Props = {
  title: string;
  description: string;
  icon: (props: SvgProps) => ReactElement;
  onClick?: () => void;
  accentColor?: string;
  className?: string;
};

// Framer Motion Variants for cleaner animation definitions
const cardVariants: Variants = {
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

const glowVariants: Variants = {
  initial: {opacity: 0},
  hover: {opacity: 0.2, transition: {duration: 0.5, ease: 'easeOut'}},
};

const backgroundVariants: Variants = {
  initial: {opacity: 0},
  hover: {opacity: 0.05, transition: {duration: 0.3}},
};

const iconVariants: Variants = {
  initial: {scale: 1, rotate: 0},
  hover: {scale: 1.2, rotate: -2, transition: {duration: 0.5, ease: 'easeOut'}},
};

const particle1Variants: Variants = {
  initial: {opacity: 0, x: 0, y: 0},
  hover: {
    opacity: 0.6,
    x: 4,
    y: -4,
    transition: {duration: 0.7, ease: 'easeOut'},
  },
};

const particle2Variants: Variants = {
  initial: {opacity: 0, x: 0, y: 0},
  hover: {
    opacity: 0.4,
    x: -4,
    y: 4,
    transition: {duration: 0.5, delay: 0.1, ease: 'easeOut'},
  },
};

const arrowVariants: Variants = {
  initial: {opacity: 0.6, x: 0},
  hover: {opacity: 1, x: 2, transition: {duration: 0.3, ease: 'easeOut'}},
};

export default function ActionCard({
  title,
  description,
  icon: Icon,
  onClick,
  accentColor = '#3B82F6',
  className = '',
}: Props) {
  const darkMode = useAppState('darkMode');

  return (
    <motion.div
      whileTap="tap"
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      style={{width: '180px', height: '160px'}}
      className={`relative group cursor-pointer select-none ${className}`}>
      {/* Glow effect */}
      <motion.div
        variants={glowVariants}
        style={{backgroundColor: accentColor + '40'}}
        className="absolute -inset-1 rounded-2xl blur"
      />

      {/* Main card */}
      <motion.div
        className={
          'relative bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200' +
          ' dark:border-gray-700 shadow-lg shadow-gray-100 dark:shadow-gray-900/50 w-full h-full flex flex-col'
        }
        variants={cardVariants}>
        {/* Animated background gradient */}
        <motion.div
          variants={backgroundVariants}
          className="absolute inset-0 rounded-2xl"
          style={{backgroundColor: accentColor + '0D'}}
        />

        {/* Icon container with floating animation */}
        <div className="relative mb-3 flex justify-center">
          <motion.div variants={iconVariants}>
            <Icon className="size-8" />
          </motion.div>

          {/* Floating particles effect */}
          <motion.div
            variants={particle1Variants}
            style={{backgroundColor: accentColor}}
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
          />
          <motion.div
            variants={particle2Variants}
            style={{backgroundColor: accentColor}}
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="relative flex-1 text-center">
          <motion.h3
            variants={{
              initial: {color: darkMode ? '#ffffff' : '#000000'},
              hover: {color: accentColor, transition: {duration: 0.3}},
            }}
            className="text-sm font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3">{description}</p>
        </div>

        {/* Animated arrow */}
        <motion.div variants={arrowVariants} className="absolute bottom-3 right-3">
          <div
            style={{backgroundColor: accentColor}}
            className="w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-white">
              <path strokeWidth={2} d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        {/* Ripple effect on tap */}
        <motion.div
          variants={{
            tap: {opacity: 0.2, transition: {duration: 0.3}},
            initial: {opacity: 0.04},
          }}
          style={{backgroundColor: accentColor}}
          className="absolute inset-0 rounded-2xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
