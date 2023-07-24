import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Business } from '@/types';

export interface BusinessState {
  data: Business | null | undefined;
  isLoading: boolean;
  isError: boolean;
  error: string | null | object;
}

const initialState: BusinessState = {
  data: null,
  isError: false,
  isLoading: false,
  error: null,
};

export const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    businessLoading: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    },
    businessFetched: (state, action: PayloadAction<Business>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    businessFetchError: (
      state,
      action: PayloadAction<string | null | object>
    ) => {
      state.isError = true;
      state.isLoading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const businessReducer = businessSlice.reducer;
