import {Button} from '@heroui/react';

import {CodeDuo_Icon} from '../../SvgIcons';

export function AddScript() {
  return (
    <Button startContent={<CodeDuo_Icon />} fullWidth>
      Add Script
    </Button>
  );
}
