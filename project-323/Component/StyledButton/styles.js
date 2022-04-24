import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },

    button:{
        backgroundColor: '#E0FFFF',
        height: 130,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000000',
        shadowOffset: {width: -3, height: 4},
        shadowOpacity: 20,
        shadowRadius: 12,
         
    },

    text:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
        textShadowColor: '#000',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 5
         
        

    },

});

export default styles;