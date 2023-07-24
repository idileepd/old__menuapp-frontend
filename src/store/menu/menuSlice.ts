import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CartItem, Menu } from '@/types';

export interface MenuState {
  data: Menu | null | undefined;
  isLoading: boolean;
  isError: boolean;
  error: string | null | object;
  cart: { [key: string]: CartItem };
  selectedTags: { [key: string]: string };
  searchString: string;
}

const getInitialState = (): MenuState => ({
  data: null,
  isError: false,
  isLoading: false,
  error: null,
  cart: {},
  selectedTags: {},
  searchString: '',
});

export const menuSlice = createSlice({
  name: 'menu',
  initialState: getInitialState(),
  reducers: {
    // Menu ASYNC ------
    menuLoading: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    },
    menuFetched: (state, action: PayloadAction<Menu>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
      // todo: compare the menu with persisted cart and see
      // if any price values updated for items or they removed
    },
    menuFetchError: (state, action: PayloadAction<string | null | object>) => {
      state.isError = true;
      state.isLoading = false;
      state.data = null;
      state.error = action.payload;
    },

    // SEARCH -------
    toggleFilterTag: (state, action: PayloadAction<string>) => {
      if (state.selectedTags[action.payload]) {
        delete state.selectedTags[action.payload];
      } else {
        state.selectedTags[action.payload] = action.payload;
      }
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
});

export const menuReducer = menuSlice.reducer;
