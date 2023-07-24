import { AnyAction, Dispatch } from '@reduxjs/toolkit';

import { menuSlice } from './menuSlice';

import { menuData } from '@/constants/demoMenuData';

// Action creators are generated for each case reducer function
export const { actions } = menuSlice;

export const fetchMenu = (dispatch: Dispatch<AnyAction>) => {
  dispatch(actions.menuLoading());

  try {
    console.log('menu loading');
    setTimeout(() => {
      dispatch(actions.menuFetched(menuData));
    }, 3000);
  } catch (error) {
    console.log(error);
    dispatch(actions.menuFetchError('Unable to load menu'));
  }
};

export const toggleFilterTag = (
  dispatch: Dispatch<AnyAction>,
  tagId: string
) => {
  dispatch(actions.toggleFilterTag(tagId));
};

export const setSearchString = (
  dispatch: Dispatch<AnyAction>,
  searchString: string
) => {
  dispatch(actions.setSearchString(searchString));
};
