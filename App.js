
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  LogBox,
  ActivityIndicator
} from 'react-native';

import LoginNavigator from './app/navigation/LoginNavigator'

//redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './app/store/configureStore';


const { persistor, store } = configureStore();

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <LoginNavigator />
    </PersistGate>
  </Provider>
  );
};



export default App;
