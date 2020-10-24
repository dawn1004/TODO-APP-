import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navbar(props){


    return(
        <ThemeProvider>
            <Header
            placement="left"
            centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 16 } }}
            rightComponent={{ icon: 'add', color: 'white', size: 25, onPress: ()=>{} }}
            />
        </ThemeProvider>
    )
}
