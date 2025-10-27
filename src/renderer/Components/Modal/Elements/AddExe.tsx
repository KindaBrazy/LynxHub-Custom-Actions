import {Button} from '@heroui/react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {useIpc} from '../../../ObjectsHolder';
import {reducerActions} from '../../../reducer';
import {PlayDuo_Icon} from '../../SvgIcons';

export function AddExe() {
  const dispatch = useDispatch();

  const ipc = useIpc();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAdd = () => {
    setIsLoading(true);
    ipc.file.openDlg({properties: ['openFile']}).then(action => {
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
