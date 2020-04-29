import React, { Component } from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  //ScrollView,
  View,
  Text,
  StatusBar,
  //TextInput,
  //ImageBackground,
  //TouchableOpacity,
  //Button,
  //Alert,

} from 'react-native';



   export default function  Configuracao () {
    
    
    return (
      <View style={styles.container}>
   
        <Text style={styles.text}> Bem Vem vindo a o menu lavandaria </Text>
   
      </View>
    );

   }
  const  styles = StyleSheet.create({
    MainContainer:{
    },
    container: {
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });