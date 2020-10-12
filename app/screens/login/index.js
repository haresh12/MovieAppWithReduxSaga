import React, { useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native';

import InputUi from '../../components/InputUi'
import ButtonUi from '../../components/ButtonUi'
import * as loginActions from '../../action/loginActions';
import { useDispatch, useSelector } from 'react-redux';



import Styles from './style'

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoginLoading = useSelector(state => state.loadingReducer.isLoginLoading);

  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")

  const onLoginPress = () => {
    if (email === "") {
      Alert.alert('Alert', "Please enter an email.");
    } else if (!isEmailValid()) {
      Alert.alert('Alert', "Please enter a valid email.");
    }
    else if (password === "") {
      Alert.alert('Alert', "Please enter a password.");
    } else if (password < 6) {
      Alert.alert('Alert', "Password must contain atleast 6 character..");
    } else {
      dispatch(loginActions.requestLogin(email, password, navigation));
    }
  }

  const isEmailValid = () => {
    let _email = email
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(String(_email.trim()).toLowerCase())
  }
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Hi again</Text>
      <Text style={Styles.messageStyle}>We just need your email and Password.</Text>
      <InputUi
        placeholder="Email Address"
        inputStyle={Styles.inputStyle}
        value={email}
        inputContainerStyle={Styles.inputContainerStyle}
        onChangeText={value => setEmail(value)}
      />
      {isLoginLoading ? <View style={Styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View> : null}
      <InputUi
        placeholder="Password"
        inputStyle={Styles.inputStyle}
        inputContainerStyle={Styles.inputContainerStyle}
        secureTextEntry={true}
        value={password}
        onChangeText={value => setPassWord(value)}
      />
      <ButtonUi
        placeholder="Login"
        onPress={onLoginPress}
      />
    </View>
  );
};

export default Login;