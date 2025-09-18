import {Button} from '@heroui/react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {extRendererIpc} from '../../../Extension';
import {reducerActions} from '../../../reducer';
import {CodeDuo_Icon} from '../../SvgIcons';

export function AddScript() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAdd = () => {
    setIsLoading(true);
    extRendererIpc.file.openDlg({properties: ['openFile']}).then(action => {
      if (action) dispatch(reducerActions.addAction({action, type: 'script'}));
      setIsLoading(false);
    });
  };

  return (
    <Button onPress={handleAdd} isLoading={isLoading} startContent={!isLoading && <CodeDuo_Icon />} fullWidth>
      Add Script
    </Button>
  );
}
