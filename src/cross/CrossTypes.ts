export type CustomCard = {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  accentColor: string;
  categories: {
    pinned?: boolean;
    recentlyUsed?: boolean;
    all?: boolean;
    image?: boolean;
    text?: boolean;
    audio?: boolean;
  };
  urlConfig: {customUrl?: string; useAutoCatch: boolean; openImmediately?: boolean; timeout?: number};
};
