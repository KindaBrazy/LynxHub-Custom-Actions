export type CustomCard = {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  accentColor: string;
  urlConfig: {customUrl?: string; useAutoCatch: boolean; openImmediately?: boolean; timeout?: number};
};
