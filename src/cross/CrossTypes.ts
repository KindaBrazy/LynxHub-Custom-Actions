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

export type CustomUrlConfig = {customUrl?: string; openImmediately?: boolean; timeout?: number};

export type CustomExecuteActions = {action: string; type: 'bash' | 'exe' | 'open' | 'command'};

export type CustomCard = {
  id: string;
  cardType: CustomCardType;
  haveExeUI: boolean;
  urlConfig: CustomUrlConfig;
  title: string;
  description?: string;
  icon?: string;
  accentColor: string;
  categories: CustomCategories;
  actions: CustomExecuteActions[];
};
