import {CardIconId} from '../renderer/Components/CardIcons';

export type CustomCard = {
  id: string;
  title: string;
  icon?: CardIconId;
  accentColor: string;
};
