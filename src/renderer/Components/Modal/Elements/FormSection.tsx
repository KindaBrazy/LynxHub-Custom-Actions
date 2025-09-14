import type {ReactNode} from 'react';

type Props = {title: string; children: ReactNode};

export default function FormSection({title, children}: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-foreground-400">{title}</h3>
      <div className="space-y-4 rounded-2xl shadow-small  bg-white dark:bg-LynxRaisinBlack p-4">{children}</div>
    </div>
  );
}
