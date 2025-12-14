import {motion} from 'framer-motion';
import {ReactElement} from 'react';
import {useDispatch} from 'react-redux';

import {useAppState} from '../../../../../src/renderer/src/App/Redux/Reducer/AppReducer';
import {cardsActions} from '../../../../../src/renderer/src/App/Redux/Reducer/CardsReducer';
import {useTabsState} from '../../../../../src/renderer/src/App/Redux/Reducer/TabsReducer';
import {SvgProps} from '../../../../../src/renderer/src/assets/icons/SvgIconsContainer';
import {CustomCard} from '../../../cross/CrossTypes';
import {customActionsChannels} from '../../../cross/CrossUtils';
import {useIpc} from '../../ObjectsHolder';
import {reducerActions} from '../../reducer';
import {backgroundVariants, cardVariants, glowVariants, iconVariants} from './ActiopnCard_Utils';

type Props = {
  icon: (props: SvgProps) => ReactElement;
  onClick?: () => void;
  className?: string;
  card: CustomCard;
};

const LINE_ENDING = window.osPlatform === 'win32' ? '\r' : '\n';
const IS_MACOS = window.osPlatform === 'darwin';
const IS_WINDOWS = window.osPlatform === 'win32';

export default function ActionCard({icon: Icon, card, className = ''}: Props) {
  const dispatch = useDispatch();

  const activeTab = useTabsState('activeTab');
  const darkMode = useAppState('darkMode');

  const ipc = useIpc();
  const {title, description, accentColor, actions, cardType, urlConfig} = card;

  const onClick = () => {
    const opens = actions.filter(action => action.type === 'open');
    opens.forEach(open => ipc.file.openPath(open.action));

    const manageUrls = (ptyId: string, onDone?: () => void) => {
      if (urlConfig.type === 'custom' && urlConfig.customUrl) {
        const openUrl = () => {
          dispatch(cardsActions.setRunningCardCustomAddress({tabId: activeTab, address: urlConfig.customUrl!}));
          if (onDone) onDone();
        };

        if (urlConfig.openImmediately) {
          openUrl();
        } else {
          setTimeout(() => openUrl(), (urlConfig.timeout || 0) * 1000);
        }
      } else if (urlConfig.type === 'findLine' && urlConfig.findLine) {
        // Start URL catching session in redux (handled by CustomHooks)
        dispatch(reducerActions.startUrlCatching({ptyId, tabId: activeTab, findLine: urlConfig.findLine}));
      }
    };

    const getScriptCommand = (scriptPath: string): string => {
      const ext = scriptPath.substring(scriptPath.lastIndexOf('.')).toLowerCase();

      if (IS_WINDOWS) {
        // Windows: Use appropriate interpreter based on extension
        switch (ext) {
          case '.py':
            return `python "${scriptPath}"${LINE_ENDING}`;
          case '.js':
            return `node "${scriptPath}"${LINE_ENDING}`;
          default:
            return `& "${scriptPath}"${LINE_ENDING}`;
        }
      } else if (IS_MACOS) {
        // macOS: Handle .app bundles and scripts
        if (scriptPath.endsWith('.app')) {
          return `open -W "${scriptPath}"${LINE_ENDING}`;
        } else if (ext === '.command') {
          return `chmod +x "${scriptPath}" && open "${scriptPath}"${LINE_ENDING}`;
        } else if (ext === '.py') {
          return `python3 "${scriptPath}"${LINE_ENDING}`;
        } else if (ext === '.js') {
          return `node "${scriptPath}"${LINE_ENDING}`;
        } else {
          // For .sh and other scripts, use bash as fallback interpreter
          return `chmod +x "${scriptPath}" && bash "${scriptPath}"${LINE_ENDING}`;
        }
      } else {
        // Linux: Detect interpreter based on extension or use bash as fallback
        switch (ext) {
          case '.py':
            return `python3 "${scriptPath}"${LINE_ENDING}`;
          case '.js':
            return `node "${scriptPath}"${LINE_ENDING}`;
          case '.rb':
            return `ruby "${scriptPath}"${LINE_ENDING}`;
          case '.pl':
            return `perl "${scriptPath}"${LINE_ENDING}`;
          default:
            // Use bash as fallback for .sh and unknown scripts
            return `chmod +x "${scriptPath}" && bash "${scriptPath}"${LINE_ENDING}`;
        }
      }
    };

    const runCustomCommands = (ptyId: string) => {
      actions.forEach(action => {
        if (action.type === 'command') {
          ipc.pty.write(ptyId, `${action.action}${LINE_ENDING}`);
        } else if (action.type === 'script') {
          ipc.pty.write(ptyId, getScriptCommand(action.action));
        }
      });
    };

    switch (cardType) {
      case 'executable': {
        const pathToExe = actions.find(action => action.type === 'exe')?.action;
        if (!pathToExe) return;

        const ptyID = `${activeTab}_both`;
        window.electron.ipcRenderer.send(customActionsChannels.startExe, ptyID, pathToExe);

        dispatch(cardsActions.addRunningCard({tabId: activeTab, id: ptyID}));
        manageUrls(ptyID, () => {
          dispatch(cardsActions.setRunningCardView({tabId: activeTab, view: 'browser'}));
        });

        break;
      }
      case 'browser': {
        dispatch(cardsActions.addRunningEmpty({tabId: activeTab, type: 'browser'}));
        manageUrls(`${activeTab}_browser`);
        break;
      }
      case 'terminal': {
        dispatch(cardsActions.addRunningEmpty({tabId: activeTab, type: 'terminal'}));
        const ptyID = `${activeTab}_terminal`;
        manageUrls(ptyID);
        setTimeout(() => runCustomCommands(ptyID), 100);
        break;
      }
      case 'terminal_browser': {
        const ptyID = `${activeTab}_both`;
        dispatch(cardsActions.addRunningEmpty({tabId: activeTab, type: 'both'}));
        manageUrls(ptyID, () => {
          dispatch(cardsActions.setRunningCardView({tabId: activeTab, view: 'browser'}));
        });
        setTimeout(() => runCustomCommands(ptyID), 100);
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
      style={{width: '150px', height: '105px'}}
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
          `relative bg-white dark:bg-gray-900 rounded-2xl ${description ? 'p-2' : 'p-5'} border` +
          ' border-foreground-100 transition-colors duration-300 hover:border-foreground-200 shadow-lg' +
          ' shadow-gray-100 dark:shadow-gray-900/50 w-full h-full flex flex-col'
        }
        variants={cardVariants}>
        {/* Animated background gradient */}
        <motion.div
          variants={backgroundVariants}
          className="absolute inset-0 rounded-2xl"
          style={{backgroundColor: accentColor + '0D'}}
        />

        {/* Icon container with floating animation */}
        <div className="relative mb-1 flex justify-center">
          <motion.div variants={iconVariants}>
            <Icon className="size-9" />
          </motion.div>
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
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-1">{description}</p>
          )}
        </div>

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
