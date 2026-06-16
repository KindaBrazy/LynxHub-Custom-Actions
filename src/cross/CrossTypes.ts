export type CustomCategories = {
  pinned?: boolean;
  recentlyUsed?: boolean;
  all?: boolean;
  image?: boolean;
  text?: boolean;
  audio?: boolean;
};

export type CustomCategory = keyof CustomCategories;

export type CustomCardType = 'executable' | 'browser' | 'terminal' | 'terminal_browser';

export type CustomUrlConfigType = 'custom' | 'findLine' | 'nothing';

export type CustomUrlConfig = {
  type: CustomUrlConfigType;
  customUrl?: string;
  openImmediately?: boolean;
  timeout?: number;
  findLine?: string;
};

export type CustomExecuteActions = {action: string; type: 'script' | 'exe' | 'open' | 'command'};

export type CustomEnvVar = {key: string; value: string};

export type CustomCard = {
  id: string;
  cardType: CustomCardType;
  urlConfig: CustomUrlConfig;
  title: string;
  description?: string;
  icon?: string;
  categories: CustomCategories;
  actions: CustomExecuteActions[];
  env?: CustomEnvVar[];
};
