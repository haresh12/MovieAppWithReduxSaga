import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    imageStyle: {
        height: 120,
        width: 80,
        borderRadius: 15
    },
    cardContainerStyle: {
        height: 120,
        borderRadius: 15
    },
    titleTextStyle:
    {
        fontSize: 20,
        color: Colors.dark,
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily :'Helvetica-Bold'
    },
    subTitleStyle: {
        fontSize:14,
        color: Colors.blueyGrey,
        fontWeight: '600',
        fontFamily :'Helvetica'
    }
});

export default styles;
