import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center'
    },
    carousel: {
        height: 350,
        marginVertical: 15,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    carouselContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    imageStyle: {
        height: 300,
        width: 240,
        borderRadius :15
    },
    cardContainerStyle :{
      height :300,
      borderRadius :15
    },
    titleTextStyle:
    {
        fontSize: 20,
        color: Colors.dark,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontFamily :'Helvetica-Bold'
    },
    subTitleStyle: {
        fontSize: 16,
        color: Colors.blueyGrey,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily :'Helvetica'
    }
});

export default styles;
