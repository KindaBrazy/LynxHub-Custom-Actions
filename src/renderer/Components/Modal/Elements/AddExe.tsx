import {Button} from '@heroui/react';

import {PlayDuo_Icon} from '../../SvgIcons';

export function AddExe() {
  return (
    <Button startContent={<PlayDuo_Icon />} fullWidth>
      Add Executable
    </Button>
  );
}
