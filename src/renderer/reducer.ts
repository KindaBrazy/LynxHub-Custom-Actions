import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

import {CustomCard} from '../cross/CrossTypes';

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
    removeCard: state => {
      state.customCards = state.customCards.filter(item => item.id !== state.editingCard?.id);
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.customCards = state.customCards.map(item => {
        if (item.id === state.editingCard?.id) {
          return {...item, id: `${action.payload}_ca`, title: action.payload};
        }
        return item;
      });
      if (state.editingCard) state.editingCard.title = action.payload;
    },
    setAccentColor: (state, action: PayloadAction<string>) => {
      state.customCards = state.customCards.map(item => {
        if (item.id === state.editingCard?.id) {
          return {...item, accentColor: action.payload};
        }
        return item;
      });
      if (state.editingCard) state.editingCard.accentColor = action.payload;
    },
    setIcon: (state, action: PayloadAction<string>) => {
      state.customCards = state.customCards.map(item => {
        if (item.id === state.editingCard?.id) {
          return {...item, icon: action.payload};
        }
        return item;
      });
      if (state.editingCard) state.editingCard.icon = action.payload;
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
