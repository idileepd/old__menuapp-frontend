import { AppState } from '../store';

export const getMenuData = (state: AppState) => state.menu.data;
export const getMenuError = (state: AppState) => ({
  error: state.menu.error,
  isError: state.menu.isError,
});
export const getMenuLoading = (state: AppState) => state.menu.isLoading;

export const getSelectedTags = (state: AppState) => state.menu.selectedTags;
