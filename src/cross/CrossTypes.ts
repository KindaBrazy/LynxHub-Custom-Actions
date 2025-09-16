export type CustomCategories = {
  pinned?: boolean;
  recentlyUsed?: boolean;
  all?: boolean;
  image?: boolean;
  text?: boolean;
  audio?: boolean;
};

export type CustomCategory = keyof CustomCategories;

export type CustomUrlConfig = {customUrl?: string; useAutoCatch: boolean; openImmediately?: boolean; timeout?: number};

export type CustomCard = {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  accentColor: string;
  categories: CustomCategories;
  urlConfig: CustomUrlConfig;
};
