import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
// Constants
import Colors from '../constants/Colors';



const HeaderUi = ({ title }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        height: 60,
        width: '100%',
        backgroundColor: Colors.dark
    },
    textStyle:
    {
        color: Colors.white,
        fontSize: 20,
        alignSelf: 'center',
        marginTop :15
    }

});
export default HeaderUi