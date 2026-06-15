import {Button} from '@heroui/react';
import filesIpc from '@lynx_shared/ipc/files';
import {Code} from '@solar-icons/react-perf/BoldDuotone';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {reducerActions} from '../../../reducer';

export function AddScript() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAdd = () => {
    setIsLoading(true);
    filesIpc.openDlg({properties: ['openFile']}).then(action => {
      if (action) {
        const lastSeparator = Math.max(action.lastIndexOf('/'), action.lastIndexOf('\\'));
        if (lastSeparator > 0) {
          const directory = action.substring(0, lastSeparator);
          dispatch(reducerActions.addAction({action: `cd "${directory}"`, type: 'command'}));
        }
        dispatch(reducerActions.addAction({action, type: 'script'}));
      }
      setIsLoading(false);
    });
  };

  return (
    <Button onPress={handleAdd} isPending={isLoading} fullWidth>
      <Code />
      Add Script
    </Button>
  );
}
