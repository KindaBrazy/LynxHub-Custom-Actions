import type {ReactNode} from 'react';

type Props = {title: string; children: ReactNode};

export default function FormSection({title, children}: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-base text-semi-muted">{title}</h3>
      <div className="flex flex-col gap-y-4 rounded-3xl bg-surface-secondary p-4">{children}</div>
    </div>
  );
}
