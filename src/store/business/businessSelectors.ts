import { AppState } from '../store';

export const getBusinessData = (state: AppState) => state.business.data;
export const getBusinessError = (state: AppState) => ({
  error: state.business.error,
  isError: state.business.isError,
});
export const getBusinessLoading = (state: AppState) => state.business.isLoading;
