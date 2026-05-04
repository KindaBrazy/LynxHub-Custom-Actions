import {Button} from '@heroui/react';
import filesIpc from '@lynx_shared/ipc/files';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {reducerActions} from '../../../reducer';
import {CodeDuo_Icon} from '../../SvgIcons';

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
    <Button
      onPress={handleAdd}
      isLoading={isLoading}
      startContent={!isLoading && <CodeDuo_Icon className="size-4" />}
      fullWidth>
      Add Script
    </Button>
  );
}
