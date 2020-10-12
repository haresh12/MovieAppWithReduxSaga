import { put, call } from 'redux-saga/effects';

import { Alert } from 'react-native';
import movieList from '../api/methods/getMovieList';
import * as movieListAction from '../action/movieListActions';

export default function* moviesAsync(action) {
    yield put(movieListAction.enableLoader());

    const response = yield call(movieList);

    if (response) {
        yield put(movieListAction.getMoviesResponse(response));
        yield put(movieListAction.disableLoader({}));
    } else {
        yield put(movieListAction.getMoviesFailed());
        yield put(movieListAction.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Something went wrong', response.error);
        }, 200);
    }
}