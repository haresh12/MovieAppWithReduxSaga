import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Colors from '../constants/Colors'

const  ButtonUi = ({ placeholder, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>{placeholder}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default ButtonUi;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf :'center',
        marginTop :20
    },
    button: {
        backgroundColor: Colors.dark,
        paddingVertical: 15,
        borderRadius: 10,
        paddingHorizontal :40,
    },
    text:
    {
        color: Colors.white,
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal :80
    }

});