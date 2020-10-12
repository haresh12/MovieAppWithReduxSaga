/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as movieListReducer from './movieListReducer';

export default Object.assign(loginReducer, loadingReducer,movieListReducer);
 