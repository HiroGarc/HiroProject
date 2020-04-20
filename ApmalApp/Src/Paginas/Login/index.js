import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  //ImageBackground,
  TouchableOpacity,
  Button,
  //Alert,

} from 'react-native';
 

import Form from '../../componentes/Form';
//import Registar from '../Registar/index';
import FormRegister from '../../componentes/FormRegister';

import {useNavigation} from '@react-navigation/native';


  
    


  export default function Login () {
   
    const navigation = useNavigation();
    


  // function Login(props) {
    return(
          
        <View style={styles.Container}>
          <Form/>
           {/* <FormRegister/>  */}
          <View style= {styles.signupTextCont}>
              <Text style={styles.SignupText}>Ainda Nao tem uma conta? </Text>
              <Text style={styles.SignupButon} 
                onPress={() => (navigation.navigate('Registar'))}> 
                Registre-se
              </Text>
            </View>
    </View>
    );

 }


const styles = StyleSheet.create({
    Container: {
   backgroundColor:"#36485f",
   flex:1,
   alignItems: 'center',
   justifyContent: 'center',
    },
signupTextCont:{
    flexGrow:1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row',
},
   SignupText:{
    color:'rgba(255,255,255,0.6)',
    fontSize:16,
   },
SignupButon:{
    color:'#ffffff',
    fontSize:16,
    fontWeight: '500',
    

}

});

           
           