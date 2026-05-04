import {Button} from '@heroui-v3/react';
import filesIpc from '@lynx_shared/ipc/files';
import {Play} from '@solar-icons/react-perf/Bold';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {reducerActions} from '../../../reducer';

export function AddExe() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAdd = () => {
    setIsLoading(true);
    filesIpc.openDlg({properties: ['openFile']}).then(action => {
      if (action) dispatch(reducerActions.addAction({action, type: 'exe'}));
      setIsLoading(false);
    });
  };

  return (
    <Button onPress={handleAdd} isPending={isLoading} fullWidth>
      <Play />
      Add Executable
    </Button>
  );
}
