import {motion} from 'framer-motion';
import {compact} from 'lodash';
import {ReactElement, useMemo} from 'react';
import {useDispatch} from 'react-redux';

import {useAppState} from '../../../../../src/renderer/src/App/Redux/Reducer/AppReducer';
import {cardsActions} from '../../../../../src/renderer/src/App/Redux/Reducer/CardsReducer';
import {useTabsState} from '../../../../../src/renderer/src/App/Redux/Reducer/TabsReducer';
import {SvgProps} from '../../../../../src/renderer/src/assets/icons/SvgIconsContainer';
import {CustomCard} from '../../../cross/CrossTypes';
import {extRendererIpc} from '../../Extension';
import {ArrowLine_Icon} from '../SvgIcons';
import {
  arrowVariants,
  backgroundVariants,
  cardVariants,
  getContrastingTextColor,
  glowVariants,
  iconVariants,
  particle1Variants,
  particle2Variants,
} from './ActiopnCard_Utils';

type Props = {
  icon: (props: SvgProps) => ReactElement;
  onClick?: () => void;
  className?: string;
  card: CustomCard;
};

export default function ActionCard({icon: Icon, card, className = ''}: Props) {
  const dispatch = useDispatch();

  const activeTab = useTabsState('activeTab');
  const darkMode = useAppState('darkMode');

  const {title, description, accentColor, actions, cardType, urlConfig, iconColor} = useMemo(
    () => ({...card, iconColor: getContrastingTextColor(card.accentColor)}),
    [card],
  );

  const onClick = () => {
    const opens = actions.filter(action => action.type === 'open');
    opens.forEach(open => extRendererIpc.file.openPath(open.action));

    const manageUrls = (onDone?: () => void) => {
      if (urlConfig.customUrl) {
        const openUrl = () => {
          dispatch(cardsActions.setRunningCardCustomAddress({tabId: activeTab, address: urlConfig.customUrl!}));
          if (onDone) onDone();
        };

        if (urlConfig.openImmediately) {
          openUrl();
        } else {
          setTimeout(() => openUrl(), (urlConfig.timeout || 0) * 1000);
        }
      }
    };

    const runCustomCommands = (ptyId: string) => {
      const commands = compact(
        actions.map(action => {
          if (action.type === 'command') {
            return action.action;
          } else if (action.type === 'script') {
            return window.osPlatform === 'win32' ? `& "${action.action}"` : `"${action.action}"`;
          } else {
            return null;
          }
        }),
      );
      extRendererIpc.pty.customCommands(ptyId, 'start', commands);
    };

    switch (cardType) {
      case 'executable':
        // TODO: Add support for executable cards
        break;
      case 'browser': {
        dispatch(cardsActions.addRunningEmpty({tabId: activeTab, type: 'browser'}));
        manageUrls();
        break;
      }
      case 'terminal': {
        const ptyID = `${activeTab}_terminal`;
        runCustomCommands(ptyID);
        dispatch(cardsActions.addRunningEmpty({tabId: activeTab, type: 'terminal'}));
        break;
      }
      case 'terminal_browser': {
        const ptyID = `${activeTab}_both`;
        runCustomCommands(ptyID);
        dispatch(cardsActions.addRunningEmpty({tabId: activeTab, type: 'both'}));
        manageUrls(() => {
          dispatch(cardsActions.setRunningCardView({tabId: activeTab, view: 'browser'}));
        });
        break;
      }
    }
  };

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
          'relative bg-white dark:bg-gray-900 rounded-2xl p-4 border border-foreground-100 transition-colors' +
          ' duration-300 hover:border-foreground-200 shadow-lg shadow-gray-100 dark:shadow-gray-900/50 w-full' +
          ' h-full flex flex-col'
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
          <motion.div className="mt-1" variants={iconVariants}>
            <Icon className="size-10" />
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
        <div className={`relative flex-1 text-center ${!description ? 'flex flex-col justify-center' : ''}`}>
          <motion.h3
            variants={{
              initial: {color: darkMode ? '#ffffff' : '#000000'},
              hover: {color: accentColor, transition: {duration: 0.3}},
            }}
            className={`text-sm font-bold text-gray-900 dark:text-white ${description ? 'mb-1' : 'mb-8'}`}>
            {title}
          </motion.h3>

          {description && (
            <p className="text-gray-600 dark:text-gray-300 text-xs mt-1.5 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Animated arrow */}
        <motion.div variants={arrowVariants} className="absolute bottom-3 right-3">
          <div
            style={{backgroundColor: accentColor}}
            className="size-6 rounded-full flex items-center justify-center shadow-sm">
            <ArrowLine_Icon style={{color: iconColor}} />
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
