/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../action/types';
import loginSaga from './loginSaga';
import moviesSaga from './moviesSaga';

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.MOVIES_REQUEST, moviesSaga)]);
}
