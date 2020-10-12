import React from "react";
import {
    NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Navigators
import LoginScreen from "../screens/login/index";
import SplashScreen from "../screens/splash/index";

import BottomBarNavigator from "./BottomBarNavigator";

const LoginNavigator = () => {
    const Switch = createStackNavigator();
    return (
        <NavigationContainer>
            <Switch.Navigator>
                <Switch.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Switch.Screen name="Auth" component={LoginScreen} options={{ headerShown: false }} />
                <Switch.Screen name="App" component={BottomBarNavigator} options={{ headerShown: false }} />
            </Switch.Navigator>
        </NavigationContainer>
    )
}
export default LoginNavigator;