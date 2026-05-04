import StorageManager from '@lynx_main/storage/storageOperations';

import {CustomCard} from '../../cross/CrossTypes';
import {storageKeys} from '../../cross/CrossUtils';

export function getCards(storageManager: StorageManager) {
  return (storageManager.getCustomData(storageKeys.customActions) as CustomCard[]) || [];
}
export function setCards(storageManager: StorageManager, cards: CustomCard[]) {
  storageManager.setCustomData(storageKeys.customActions, cards);
}
