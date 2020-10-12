
import { put, call } from 'redux-saga/effects';

import { Alert } from 'react-native';
import loginUser from '../api/methods/loginUser';
import * as loginActions from '../action/loginActions';

export default function* loginAsync(action) {
     yield put(loginActions.enableLoader());

     const response = yield call(loginUser, action.username, action.password);

    console.log(response)

    if (response.token) {
        yield put(loginActions.onLoginResponse(response));
        yield put(loginActions.disableLoader({}));
        //only redirect when response is success
        action.navigation.reset({
            routes: [{ name: "App" }]
        });
    } else {
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Login failed', response.error);
        }, 200);
    }
}
