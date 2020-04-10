/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import 'react-native-gesture-handler';


import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  //ImageBackground,
} from 'react-native';
// import Login from './Src/Paginas/Login';


 
  // import * as React from 'react';
  // import { View, Text,StyleSheet } from 'react-native';
  // import { NavigationContainer } from '@react-navigation/native';
  // import { createStackNavigator } from '@react-navigation/stack';
  
  
  
  //import index from './Src/Paginas/index';
  import Login from './Src/Paginas/Login';
  // import Form from './Src/componentes/Form';
  // import Home from './Src/Paginas/Home';
  
  
  
  // const Stack = createStackNavigator();
  
  // function App() {
    export default class App extends Component{
        
          
  
          render (){
            return(


        <View style={styles.Container}>
            
             <Login/>
         
          
            {/* <NavigationContainer>
            <Stack.Navigator>
            
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            
            </Stack.Navigator>
            </NavigationContainer> */}
            </View>
      );
      
          }  
      }
      
    const styles = StyleSheet.create({
      Container: {
        backgroundColor:'#3e3f8f',
         flex:1,
          alignItems: 'center',
          justifyContent: 'center',
    
      }
  
    });
  
    


  





















































// render(){
//         return(
//            <View style={styles.Container}>
            
//              <Login/>
//            {/* <ImageBackground source={require('./Src/assets/fundo1.png')} style={styles.imagen}></ImageBackground>  */}

              


//            </View>




//         );
      
      
//       }
  
// }

//     const styles = StyleSheet.create({
//     Container: {
//     backgroundColor:'#3e3f8f',
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
 
//   // imagen:{
//   //   flex:1,
    
//   //   width:'100%',
//   //   height:'100%',
      
      
//   // }

// });








