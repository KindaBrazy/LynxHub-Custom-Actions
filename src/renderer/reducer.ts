import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

export type CustomActionsState = {
  modals: {isOpen: boolean; tabID: string}[];
};

type CustomActionsStateTypes = {
  [K in keyof CustomActionsState]: CustomActionsState[K];
};

const initialState: CustomActionsState = {
  modals: [],
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
  },
});

export const useSystemMonitorState = <T extends keyof CustomActionsState>(
  propertyName: T,
): CustomActionsStateTypes[T] => useSelector((state: any) => state.extension[propertyName]);

export const reducerActions = customActionsSlice.actions;

export default customActionsSlice.reducer;
