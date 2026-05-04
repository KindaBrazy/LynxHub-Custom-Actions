import {Button} from '@heroui/react';
import filesIpc from '@lynx_shared/ipc/files';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {reducerActions} from '../../../reducer';
import {PlayDuo_Icon} from '../../SvgIcons';

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
    <Button onPress={handleAdd} isLoading={isLoading} startContent={!isLoading && <PlayDuo_Icon />} fullWidth>
      Add Executable
    </Button>
  );
}
