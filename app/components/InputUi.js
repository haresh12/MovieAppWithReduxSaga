import React from 'react';
import { Input } from 'react-native-elements';

// Constants
import Colors from '../constants/Colors';

/** 
 * Input UI component 
 * 
 */

const InputUi = (props) => {
    return (
        <Input
            placeholder={props.placeholder}
            style={props.inputStyle}
            value={props.value}
            inputContainerStyle={props.inputContainerStyle}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
        />
    )
}

export default InputUi