import {ipcMain} from 'electron';

import {ptyChannels} from '../../../../src/cross/IpcChannelAndTypes';
import ElectronAppManager from '../../../../src/main/Managements/ElectronAppManager';
import {customActionsChannels} from '../../cross/CrossUtils';
import ExeManager from './ExeManager';

let ptyManager: ExeManager | undefined = undefined;
let targetID: string | undefined = undefined;

export default function startExecute(appManager: ElectronAppManager) {
  ipcMain.on(customActionsChannels.startExe, (_, id: string, exePath: string) => {
    targetID = id;
    ptyManager = new ExeManager(id, exePath, appManager);
  });

  ipcMain.on(ptyChannels.stopProcess, (_, id: string) => {
    if (ptyManager && targetID && id === targetID) {
      ptyManager.stop();
      ptyManager = undefined;
      targetID = undefined;
    }
  });
}
