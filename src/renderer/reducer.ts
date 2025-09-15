import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

import {CustomCard} from '../cross/CrossTypes';
import {CardIconId} from './Components/CardIcons';

const mockCards: CustomCard[] = [
  {id: '1', title: 'Image Gen', icon: 'image', accentColor: '#3b82f6'},
  {id: '2', title: 'Start ComfyUI', icon: 'star', accentColor: '#10b981'},
  {id: '3', title: 'Project Folder', icon: 'folder', accentColor: '#f97316'},
  {id: '4', title: 'Code Editor', icon: 'code', accentColor: '#8b5cf6'},
];

export type CustomActionsState = {
  modals: {isOpen: boolean; tabID: string}[];
  customCards: CustomCard[];
  view: 'list' | 'form';
  editingCard?: CustomCard;
};

type CustomActionsStateTypes = {
  [K in keyof CustomActionsState]: CustomActionsState[K];
};

const initialState: CustomActionsState = {
  modals: [],
  customCards: mockCards,
  view: 'list',
  editingCard: undefined,
};

const customActionsSlice = createSlice({
  initialState,
  name: 'systemMonitor',
  reducers: {
    updateState: <K extends keyof CustomActionsState>(
      state: CustomActionsState,
      action: PayloadAction<{
        key: K;
        value: CustomActionsState[K];
      }>,
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    openModal: (state, action: PayloadAction<{tabID: string}>) => {
      state.modals.push({isOpen: true, tabID: action.payload.tabID});
    },
    closeModal: (state, action: PayloadAction<{tabID: string}>) => {
      state.modals = state.modals.map(item =>
        item.tabID === action.payload.tabID ? {...item, isOpen: false} : {...item},
      );
    },
    removeModal: (state, action: PayloadAction<{tabID: string}>) => {
      state.modals = state.modals.filter(item => item.tabID !== action.payload.tabID);
    },

    addCard: state => {
      state.customCards = [...state.customCards, {id: 'temp', title: '', accentColor: '#AA00FF'}];
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.customCards = state.customCards.filter(item => item.id !== action.payload);
    },
    setTitle: (state, action: PayloadAction<{id: string; title: string}>) => {
      state.customCards = state.customCards.map(item => {
        if (item.id === action.payload.id) {
          return {...item, title: action.payload.title};
        }
        return item;
      });
    },
    setAccentColor: (state, action: PayloadAction<{id: string; accentColor: string}>) => {
      state.customCards = state.customCards.map(item => {
        if (item.id === action.payload.id) {
          return {...item, accentColor: action.payload.accentColor};
        }
        return item;
      });
    },
    setIcon: (state, action: PayloadAction<{id: string; icon: CardIconId}>) => {
      state.customCards = state.customCards.map(item => {
        if (item.id === action.payload.id) {
          return {...item, icon: action.payload.icon};
        }
        return item;
      });
    },

    setView: (state, action: PayloadAction<'list' | 'form'>) => {
      state.view = action.payload;
    },
    setEditingCard: (state, action: PayloadAction<CustomCard | undefined>) => {
      state.editingCard = action.payload;
    },
  },
});

export const useCustomActionsState = <T extends keyof CustomActionsState>(
  propertyName: T,
): CustomActionsStateTypes[T] => useSelector((state: any) => state.extension[propertyName]);

export const reducerActions = customActionsSlice.actions;

export default customActionsSlice.reducer;
