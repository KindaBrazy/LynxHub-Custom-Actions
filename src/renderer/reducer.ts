import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

import {CustomCard, CustomCategory, CustomExecuteActions} from '../cross/CrossTypes';

export type CustomActionsState = {
  modals: {isOpen: boolean; tabID: string}[];
  customCards: CustomCard[];
  view: 'list' | 'form';
  editingCard?: CustomCard;
  saveCards?: boolean;
};

type CustomActionsStateTypes = {
  [K in keyof CustomActionsState]: CustomActionsState[K];
};

const initialState: CustomActionsState = {
  modals: [],
  customCards: [],
  view: 'list',
  editingCard: undefined,
  saveCards: false,
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
      state.editingCard = {
        id: 'temp',
        title: '',
        accentColor: '#AA00FF',
        urlConfig: {useAutoCatch: true, openImmediately: true, timeout: 5},
        categories: {pinned: true},
        actions: [],
      };
      state.view = 'form';
    },
    removeCard: state => {
      state.customCards = state.customCards.filter(item => item.id !== state.editingCard?.id);
      state.editingCard = undefined;
      state.view = 'list';
    },
    saveCard: state => {
      if (state.customCards.some(card => card.id === state.editingCard?.id)) {
        state.customCards = state.customCards.map(card =>
          card.id === state.editingCard?.id ? state.editingCard : card,
        );
      } else {
        state.customCards = [...state.customCards, state.editingCard!];
      }

      state.view = 'list';
      state.editingCard = undefined;
      state.saveCards = true;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      if (state.editingCard) {
        const targetId = `${action.payload}_custom_action`;
        state.customCards = state.customCards.map(item =>
          item.id === state.editingCard!.id ? {...item, id: targetId} : item,
        );
        state.editingCard.title = action.payload;
        state.editingCard.id = targetId;
      }
    },
    setAccentColor: (state, action: PayloadAction<string>) => {
      if (state.editingCard) state.editingCard.accentColor = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      if (state.editingCard) state.editingCard.description = action.payload;
    },
    setIcon: (state, action: PayloadAction<string>) => {
      if (state.editingCard) state.editingCard.icon = action.payload;
    },

    setView: (state, action: PayloadAction<'list' | 'form'>) => {
      state.view = action.payload;
    },
    setEditingCard: (state, action: PayloadAction<CustomCard | undefined>) => {
      state.editingCard = action.payload;
    },
    setCustomUrl: (state, action: PayloadAction<string>) => {
      if (state.editingCard) state.editingCard.urlConfig.customUrl = action.payload;
    },
    setUseAutoCatch: (state, action: PayloadAction<boolean>) => {
      if (state.editingCard) state.editingCard.urlConfig.useAutoCatch = action.payload;
    },
    setOpenImmediately: (state, action: PayloadAction<boolean>) => {
      if (state.editingCard) state.editingCard.urlConfig.openImmediately = action.payload;
    },
    setTimeoutValue: (state, action: PayloadAction<number>) => {
      if (state.editingCard) state.editingCard.urlConfig.timeout = action.payload;
    },
    setCategories: (state, action: PayloadAction<{id: CustomCategory; value: boolean}>) => {
      if (state.editingCard) state.editingCard.categories[action.payload.id] = action.payload.value;
    },
    setActions: (state, action: PayloadAction<CustomExecuteActions[]>) => {
      if (state.editingCard) state.editingCard.actions = action.payload;
    },
    removeAction: (state, action: PayloadAction<number>) => {
      if (state.editingCard) {
        state.editingCard.actions = state.editingCard.actions.filter((_, index) => index !== action.payload);
      }
    },
    addAction: (state, action: PayloadAction<CustomExecuteActions>) => {
      if (state.editingCard) state.editingCard.actions = [...state.editingCard.actions, action.payload];
    },
    clearSaveCards: state => {
      state.saveCards = false;
    },
  },
});

export const useCustomActionsState = <T extends keyof CustomActionsState>(
  propertyName: T,
): CustomActionsStateTypes[T] => useSelector((state: any) => state.extension[propertyName]);

export const reducerActions = customActionsSlice.actions;

export default customActionsSlice.reducer;
