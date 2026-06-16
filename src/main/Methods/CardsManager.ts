import StorageManager from '@lynx_main/storage/storageOperations';
import {dialog} from 'electron';
import * as fs from 'fs/promises';

import {CustomCard} from '../../cross/CrossTypes';
import {storageKeys} from '../../cross/CrossUtils';

export function getCards(storageManager: StorageManager) {
  return (storageManager.getCustomData(storageKeys.customActions) as CustomCard[]) || [];
}
export function setCards(storageManager: StorageManager, cards: CustomCard[]) {
  storageManager.setCustomData(storageKeys.customActions, cards);
}

export async function exportToFile(cards: CustomCard[]): Promise<boolean> {
  const {canceled, filePath} = await dialog.showSaveDialog({
    title: 'Export Custom Actions',
    defaultPath: 'custom_actions.json',
    filters: [{name: 'JSON/Text Files', extensions: ['json', 'txt']}],
  });

  if (canceled || !filePath) {
    return false;
  }

  await fs.writeFile(filePath, JSON.stringify(cards, null, 2), 'utf-8');
  return true;
}

export async function importFromFile(): Promise<CustomCard[] | null> {
  const {canceled, filePaths} = await dialog.showOpenDialog({
    title: 'Import Custom Actions',
    properties: ['openFile'],
    filters: [{name: 'JSON/Text Files', extensions: ['json', 'txt']}],
  });

  if (canceled || filePaths.length === 0) {
    return null;
  }

  const content = await fs.readFile(filePaths[0], 'utf-8');
  try {
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed)) {
      return parsed as CustomCard[];
    }
    throw new Error('File content is not an array');
  } catch (e) {
    console.error('Failed to parse custom actions file:', e);
    throw new Error('Invalid file format. Expected a JSON array of custom cards.', {cause: e});
  }
}
