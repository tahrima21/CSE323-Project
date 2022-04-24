import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import StyledButton from '../StyledButton';
import styles from './styles';


const Type = () => {
    return (
        <View style={styles.cpuContainer}>

        <ImageBackground source = {require('../../assets/algo7.jpg')} //adding images in the background
        style={styles.image}
        />
        
        <View style={styles.titles}>
          <Text style={styles.title}></Text>
          <Text style={styles.subtitle}></Text>
        </View>

        <View style={styles.buttonContainer}>
          
        <StyledButton 
          type="preemptive"
          content={"FCFS"}
          onPress = {() =>{
                console.warn('FCFS WAS PRESSED');  //put press action             
            }}

        />

        <StyledButton 
          type="nonpreemptive"
          content={"RR"}
          onPress = {() =>{
                console.warn('ROUND ROBIN WAS PRESSED');               
            }}

        />  

        </View>

      </View>
    );
}

export default Type;