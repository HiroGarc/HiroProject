import React, {Component} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  //ScrollView,
  View,
  //Text,
  //StatusBar,
  TextInput,
  ImageBackground, 
} from 'react-native';



export default function BackgroundScreen () {

    return (
         <View style={styles.Container}>
           
           <ImageBackground source={require('../assets/tela login_imagem 1.jpg')} style={styles.imagen}>
               
               
               
               
            </ImageBackground> 



          
           </View>
    );
}

const styles = StyleSheet.create({
    Container: {
      //backgroundColor: '#dda0dd',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    imagen:{
        flex:1,
        width:'100%',
        height:'100%',
  
     }
    });
