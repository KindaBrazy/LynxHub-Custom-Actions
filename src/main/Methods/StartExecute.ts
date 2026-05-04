import {ptyChannels} from '@lynx_common/consts/ipcChannels/pty';
import type MainWindowManager from '@lynx_main/mainWindow';
import {ipcMain} from 'electron';

import {customActionsChannels} from '../../cross/CrossUtils';
import ExeManager from './ExeManager';

const processMap = new Map<string, ExeManager>();

export default function startExecute(appManager: MainWindowManager) {
  ipcMain.on(customActionsChannels.startExe, (_, id: string, exePath: string) => {
    // Stop existing process with same ID if any
    if (processMap.has(id)) {
      processMap.get(id)?.stop();
      processMap.delete(id);
    }
    const manager = new ExeManager(id, exePath, appManager);
    processMap.set(id, manager);
  });

  ipcMain.on(ptyChannels.stopProcess, (_, id: string) => {
    const manager = processMap.get(id);
    if (manager) {
      manager.stop();
      processMap.delete(id);
    }
  });
}
