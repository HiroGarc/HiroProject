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
  //Button,
  //Alert,

} from 'react-native';
 

import  Form from '../componentes/Form';



    export default class Login extends Component{
   
  // function Login(props) {
    
  
     render(){
      return(
         <View style={styles.Container}>
           <Form/>
           <View style= {styles.signupTextCont}>
                <Text style={styles.SignupText}>Ainda Nao tem uma conta? </Text>
                <Text style={styles.SignupButon}> Registre-se</Text>
             </View>
      </View>
     );
}
 }


const styles = StyleSheet.create({
    Container: {
   backgroundColor:"#3e3f8f",
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

           
           
   
      
    
   

  

    
    

        
    
    
    



   
    
  

 


 