import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';


const StyledButton = ({type, content, onPress}) => {


    const backgroundColor = type === 'preemptive' ? '#008080' : '#009999';

     return (

        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress = {()=>onPress()}
            >

                <Text style={styles.text}>{content}</Text>



            </Pressable>


        </View>
    );
}

export default StyledButton;
