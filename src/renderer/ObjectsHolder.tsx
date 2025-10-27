import {useMemo} from 'react';

import type RendererIpc from '../../../src/renderer/src/App/RendererIpc';

type IpcType = typeof RendererIpc;

let extReIpc: IpcType | undefined = undefined;

export const setIpc = (ipc: IpcType) => (extReIpc = ipc);

export function useIpc(): typeof RendererIpc {
  const ipc = useMemo(() => extReIpc, []);

  if (!ipc) {
    throw new Error('IPC has not been initialized. Please restart the app.');
  }

  return ipc;
}
