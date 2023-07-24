import { AnyAction, Dispatch } from '@reduxjs/toolkit';

import { businessSlice } from './businessSlice';

import { businessData } from '@/constants/demoBusinessData';

// Action creators are generated for each case reducer function
export const { businessLoading, businessFetchError, businessFetched } =
  businessSlice.actions;

export const fetchBusiness = (dispatch: Dispatch<AnyAction>) => {
  dispatch(businessLoading());

  try {
    console.log('business loading');
    setTimeout(() => {
      dispatch(businessFetched(businessData));
    }, 3000);
  } catch (error) {
    console.log(error);
    dispatch(businessFetchError('Unable to load business'));
  }
};
