import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import { NativeRouter, Route, Link, Routes } from "react-router-native";


const StyledButton = ({type, content, path}) => {


    const backgroundColor = type === 'preemptive' ? '#008080' : '#009999';

     return (

        <View style={styles.container}>
            <Link
            to={path}
            style={[styles.button, {backgroundColor: backgroundColor}]}

            >

                <Text style={styles.text}>{content}</Text>



            </Link>


        </View>
    );
}

export default StyledButton;
