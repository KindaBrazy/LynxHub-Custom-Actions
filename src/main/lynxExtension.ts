import {ipcMain} from 'electron';

import {
  type ExtensionMainApi,
  type MainExtensionUtils,
} from '../../../src/main/Managements/Plugin/Extensions/ExtensionTypes_Main';
import {CustomCard} from '../cross/CrossTypes';
import {customActionsChannels} from '../cross/CrossUtils';
import {getCards, setCards} from './Methods/CardsManager';
import startExecute from './Methods/StartExecute';

export async function initialExtension(lynxApi: ExtensionMainApi, utils: MainExtensionUtils) {
  lynxApi.listenForChannels(() => {
    utils.getStorageManager().then(storageManager => {
      ipcMain.handle(customActionsChannels.getCards, () => getCards(storageManager));
      ipcMain.on(customActionsChannels.setCards, (_, cards: CustomCard[]) => setCards(storageManager, cards));
    });
    utils.getAppManager().then(appManager => {
      startExecute(appManager);
    });
  });
}
