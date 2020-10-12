/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../action/types';

const initialState = {
  token: "",
  username: '',
  password: '',
  user :{},
  email : "",
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      token: action.response.token,
      user :action.response.user,

    };
  },
  [types.LOGIN_FAILED](state) {
    return {
      ...state,
    };
  },
});
