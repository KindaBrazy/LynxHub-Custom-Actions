import {ToolsCard} from '@lynx/components/ToolsCard';
import {cardsActions} from '@lynx/redux/reducers/cards';
import {useTabsState} from '@lynx/redux/reducers/tabs';
import {SvgProps} from '@lynx_assets/icons/types';
import filesIpc from '@lynx_shared/ipc/files';
import ptyIpc from '@lynx_shared/ipc/pty';
import {ReactElement} from 'react';
import {useDispatch} from 'react-redux';

import {CustomCard} from '../../../cross/CrossTypes';
import {customActionsChannels} from '../../../cross/CrossUtils';
import {reducerActions} from '../../reducer';

type Props = {
  icon: (props: SvgProps) => ReactElement;
  onClick?: () => void;
  card: CustomCard;
};

const LINE_ENDING = window.osPlatform === 'win32' ? '\r' : '\n';
const IS_MACOS = window.osPlatform === 'darwin';
const IS_WINDOWS = window.osPlatform === 'win32';

export default function ActionCard({icon: Icon, card}: Props) {
  const dispatch = useDispatch();

  const activeTab = useTabsState('activeTab');

  const {title, description, actions, cardType, urlConfig} = card;

  const onClick = () => {
    const opens = actions.filter(action => action.type === 'open');
    opens.forEach(open => filesIpc.openPath(open.action));

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
          ptyIpc.write(ptyId, `${action.action}${LINE_ENDING}`);
        } else if (action.type === 'script') {
          ptyIpc.write(ptyId, getScriptCommand(action.action));
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
    <ToolsCard
      description={
        description ||
        'No description provided. Click to execute this action, run scripts, or open the' +
          ' configured URL in your workspace.'
      }
      title={title}
      onPress={onClick}
      icon={<Icon className="size-8" />}
    />
  );
}
