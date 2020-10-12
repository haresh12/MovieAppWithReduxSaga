import createReducer from '../lib/createReducer';
import * as types from '../action/types';

const initialState = {
   responseData : {},
  
};

export const movieListReducer = createReducer(initialState, {
  [types.MOVIES_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.MOVIES_RESPONSE](state, action) {
    return {
      ...state,
      responseData: action.response
    };
  },
  [types.MOVIES_FAILED](state) {
    return {
      ...state,
    };
  },
});