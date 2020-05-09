/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  //ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,

} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Input } from 'react-native-elements';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  Feather    from 'react-native-vector-icons/Feather';

export default class App extends Component{
  render(){

   return (
    
      
      <View style ={styles.principal}>
      
       
      <View style={styles.Continer}>

        <FontAwesome
          name ="user"
          size={20}
          />

      <TextInput
       placeholder='digite um nome!'
       style = {styles.testInput}
        
       />
       <Feather
           name= "check-circle"
           color = "green"
           size= {20}
           />
        
        
        </View>
       
        
      
     <View style ={styles.divisao}>
          <Feather
           name= "lock"
           color = "#05375a"
           size= {20}
           />
      
      <TextInput
      placeholder='digite a sua palavra passe!'
       style = {styles.testInput}
     
       />
       <Feather
           name= "eye-off"
           color = "gray"
           size= {20}
           />

        
        </View>
        </View>
   )
  }
}
        
        
           
          
          
      //     <Input
      //   placeholder='digite um nome!'
      //   leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      //     />
   
      //   <Icon
      //    name='user'
      //   size={24}
      //   color='black'
      //   />
      //   <Input
      //   placeholder='digite uma senha!'
      //   leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      //     />
   
      //   <Icon
      //    name='lock'
      //   size={24}
      //   color='black'
      // />
      //  */}

     

  

   const  styles= StyleSheet.create({
         Continer:{
},
       testInput:{
         flex:1,
         paddingLeft:10,
         color:"#05375a",
        
       },
       pricipal:{
      }

     })


 






  

  

