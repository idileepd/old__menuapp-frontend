import { AnyAction, Dispatch } from '@reduxjs/toolkit';

import { appSlice } from './appSlice';

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = appSlice.actions;

export const incrementCounter = (dispatch: Dispatch<AnyAction>) => {
  dispatch(increment());
};
