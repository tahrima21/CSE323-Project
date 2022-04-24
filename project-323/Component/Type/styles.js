import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    buttonContainer: {

        //position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',


    },

    cpuContainer: {
        width: '100%',
        height: '100%',
    
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute', //to keep the image underneath 
    
    
      },
    
      titles: {
        marginTop: '50%',
        alignItems: 'center',
    
    
      },
    
      title:{
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF5EE'
         
    
      },
    
      subtitle:{
        fontSize: 5,
        color: '#FFF5EE',
    
      },
});

export default styles;