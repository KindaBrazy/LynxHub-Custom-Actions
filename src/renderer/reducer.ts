import {formatWebAddress} from '@lynx_common/utils';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

import {CustomCard, CustomCardType, CustomCategory, CustomExecuteActions} from '../cross/CrossTypes';

export type UrlCatchingSession = {
  ptyId: string;
  tabId: string;
  findLine: string;
  urlFound: boolean;
};

export type CustomActionsState = {
  customCards: CustomCard[];
  view: 'list' | 'form';
  editingCard?: CustomCard;
  saveCards?: boolean;
  urlCatchingSession?: UrlCatchingSession;
};

type CustomActionsStateTypes = {
  [K in keyof CustomActionsState]: CustomActionsState[K];
};

const initialState: CustomActionsState = {
  customCards: [],
  view: 'list',
  editingCard: undefined,
  saveCards: false,
  urlCatchingSession: undefined,
};

const customActionsSlice = createSlice({
  initialState,
  name: 'customActions',
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

    addCard: state => {
      state.editingCard = {
        id: 'temp',
        title: '',
        cardType: 'terminal_browser',
        urlConfig: {type: 'nothing', openImmediately: true, timeout: 5},
        categories: {pinned: true},
        actions: [],
      };
      state.view = 'form';
    },
    removeCard: state => {
      state.customCards = state.customCards.filter(item => item.id !== state.editingCard?.id);
      state.editingCard = undefined;
      state.view = 'list';
      state.saveCards = true;
    },
    saveCard: state => {
      const targetCard = state.editingCard!;

      let targetUrl = targetCard.urlConfig.customUrl;
      if (targetUrl) {
        targetUrl = formatWebAddress(targetUrl);
        targetCard.urlConfig.customUrl = targetUrl;
      }

      if (state.customCards.some(card => card.id === targetCard.id)) {
        state.customCards = state.customCards.map(card => (card.id === targetCard.id ? targetCard : card));
      } else {
        state.customCards = [...state.customCards, targetCard!];
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
    setCardType: (state, action: PayloadAction<CustomCardType>) => {
      if (state.editingCard) state.editingCard.cardType = action.payload;
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
    setUrlConfigType: (state, action: PayloadAction<'custom' | 'findLine' | 'nothing'>) => {
      if (state.editingCard) state.editingCard.urlConfig.type = action.payload;
    },
    setCustomUrl: (state, action: PayloadAction<string>) => {
      if (state.editingCard) state.editingCard.urlConfig.customUrl = action.payload;
    },
    setOpenImmediately: (state, action: PayloadAction<boolean>) => {
      if (state.editingCard) state.editingCard.urlConfig.openImmediately = action.payload;
    },
    setTimeoutValue: (state, action: PayloadAction<number>) => {
      if (state.editingCard) state.editingCard.urlConfig.timeout = action.payload;
    },
    setFindLine: (state, action: PayloadAction<string>) => {
      if (state.editingCard) state.editingCard.urlConfig.findLine = action.payload;
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
    updateAction: (state, action: PayloadAction<{index: number; newAction: string}>) => {
      if (state.editingCard && state.editingCard.actions[action.payload.index]) {
        state.editingCard.actions[action.payload.index].action = action.payload.newAction;
      }
    },
    clearSaveCards: state => {
      state.saveCards = false;
    },
    startUrlCatching: (state, action: PayloadAction<{ptyId: string; tabId: string; findLine: string}>) => {
      state.urlCatchingSession = {
        ptyId: action.payload.ptyId,
        tabId: action.payload.tabId,
        findLine: action.payload.findLine,
        urlFound: false,
      };
    },
    stopUrlCatching: state => {
      state.urlCatchingSession = undefined;
    },
    setUrlFound: state => {
      if (state.urlCatchingSession) {
        state.urlCatchingSession.urlFound = true;
      }
    },
  },
});

export const useCustomActionsState = <T extends keyof CustomActionsState>(
  propertyName: T,
): CustomActionsStateTypes[T] => useSelector((state: any) => state.customActions[propertyName]);

export const reducerActions = customActionsSlice.actions;

export default customActionsSlice.reducer;
