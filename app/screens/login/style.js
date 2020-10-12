import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 15,
    },
    textStyle:
    {
        fontSize: 20,
        color: Colors.dark,
        marginHorizontal: 20,
        fontWeight: 'bold',
        marginTop: 80,
        fontFamily :'Helvetica-Bold'
    },
    messageStyle: {
        fontSize: 16,
        marginBottom: 100,
        color :Colors.dark,
        marginTop :2,
        marginHorizontal: 20,
        fontFamily :'Helvetica'
    },
    inputStyle: {
        fontWeight: '500',
        borderWidth: 1,
        paddingLeft: 15,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        borderColor: Colors.blueyGrey,
        fontSize: 16,
    },
    inputContainerStyle: {
        borderBottomWidth: 0
    },
    loading: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }

});

export default styles;
