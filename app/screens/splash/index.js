import React, { useEffect } from 'react';
import {
    View,
    Image

} from 'react-native';

import Colors from '../../constants/Colors'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Auth' }]
           })
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <View style={{ flex :1, backgroundColor: Colors.dark, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/imageSplash.png')} size={100}/>
        </View>
    );
};

export default SplashScreen;