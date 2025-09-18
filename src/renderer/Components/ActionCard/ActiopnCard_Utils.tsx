import {Variants} from 'framer-motion';

/**
 * Determines whether to use black or white text based on the brightness of a background color.
 * @param {string} hexColor - The background color in hex format (e.g., "#RRGGBB").
 * @returns {string} - Returns '#000000' (black) or '#FFFFFF' (white).
 */
export const getContrastingTextColor = hexColor => {
  if (!hexColor) return '#000000';

  // Remove the '#' if present
  const color = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;

  // Convert hex to RGB
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // Calculate the perceived brightness (YIQ formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black for light colors, white for dark colors
  return brightness > 128 ? '#000000' : '#FFFFFF';
};

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

export const backgroundVariants: Variants = {
  initial: {opacity: 0},
  hover: {opacity: 0.05, transition: {duration: 0.3}},
};

export const iconVariants: Variants = {
  initial: {scale: 1, rotate: 0},
  hover: {scale: 1.2, rotate: -2, transition: {duration: 0.5, ease: 'easeOut'}},
};

export const particle1Variants: Variants = {
  initial: {opacity: 0, x: 0, y: 0},
  hover: {
    opacity: 0.6,
    x: 3,
    y: -3,
    transition: {duration: 0.7, ease: 'easeOut'},
  },
};

export const particle2Variants: Variants = {
  initial: {opacity: 0, x: 0, y: 0},
  hover: {
    opacity: 0.4,
    // Keyframes define a looping path. The first value is the target for the initial move,
    // and the start/end values are the same for a seamless loop.
    x: [-4, -5, -3.5, -4],
    y: [4, 5.5, 3, 4],
    transition: {
      // Opacity animates once on hover and then stays.
      opacity: {duration: 0.5, delay: 0.1, ease: 'easeOut'},
      // X and Y axes loop infinitely with different durations, creating a natural,
      // de-synchronized floating effect.
      x: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay: 0.1,
      },
      y: {
        duration: 2.4,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay: 0.1,
      },
    },
  },
};

export const arrowVariants: Variants = {
  initial: {opacity: 0.6, x: 0},
  hover: {opacity: 1, x: 3, transition: {duration: 0.3, ease: 'easeOut'}},
};
