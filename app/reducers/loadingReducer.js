/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../lib/createReducer';
import * as types from '../action/types';

const initialState = {
  isLoginLoading: false,
  isMovieListLoading :false
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
  [types.MOVIES_ENABLE_LOADER](state) {
    return { ...state, isMovieListLoading: true };
  },
  [types.MOVIES_DISABLE_LOADER](state) {
    return { ...state, isMovieListLoading: false };
  },
});
