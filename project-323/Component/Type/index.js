import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import StyledButton from '../StyledButton';
import styles from './styles';
import ExampleTwo from '../../table.js';
import FCFS from '../../fcfs.js';
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { Link } from "react-router-native";

const Type = () => {
  //const navigation = useNavigation();

    return (

        <View style={styles.cpuContainer}>

        <ImageBackground source = {require('../../assets/jojo2.jpg')} //adding images in the background
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}></Text>
          <Text style={styles.subtitle}></Text>
        </View>

        <View style={styles.buttonContainer}>

        <StyledButton
          path="/FCFS"
          type="preemptive"
          content={"FCFS"}


        />
        <StyledButton
          path="/RR"
          type="nonpreemptive"
          content={"RR"}


        />

        </View>

      </View>
    );
}

export default Type;
