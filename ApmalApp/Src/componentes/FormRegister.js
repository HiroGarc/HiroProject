import React, { Component } from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  //ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  //ImageBackground,
  TouchableOpacity,
  Button,
  Alert,

} from 'react-native';




export default function FormRegister () {
    
    
    
    
    
                  return(
                <View style = { styles.Container}>
      
                    <Text style={styles.header}> Registo</Text>
   
	              <TextInput style={styles.caixaDeEntradaTexto} placeholder="digite seu nome"
	              underlineColorAndroid={'transaparent'}/>
	
            	  <TextInput 
                style={styles.caixaDeEntradaTexto} placeholder="digite seu email"
	              underlineColorAndroid={'transaparent'}/>
	
                <TextInput 
                style={styles.caixaDeEntradaTexto} placeholder="digite seu cidade"
	              underlineColorAndroid={'transaparent'}/>
                <TouchableOpacity style={styles.button}>
	              <Text style={styles.botaoteste}> Sign up </Text>
                 </TouchableOpacity>
           
           </View>
            );
        
    }

const styles = StyleSheet.create({
	Container:{
    flex:1,
  backgroundColor:"#36485f",
  alignSelf:'stretch',
  //backgroundColor:"#3e3f8f",
  //flex:1,
  alignItems: 'center',
  justifyContent: 'center',

  //backgroundColor:"#3e3f8f",
},

  header:{
	fontSize:24,
	color:'#fff',
	paddingBottom:10,
	marginBottom:40,
	borderBottomColor:'#199189',
	borderBottomWidth:1,
   },

	caixaEntradasTexto:{
    
    padding:8,
    marginTop:10,
    width:300,
    backgroundColor:'#fff',
    fontSize:30,
    fontWeight:'bold',
    borderRadius:3,
    // alignSelf:'stretch',
	  // height:40,
	  // marginBottom:30,
	  // color:'#fff',
	  //  borderBottomColor:'#f8f8f8',
	  // borderBottomWidth:1,

},

    
	button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop:30,
    
    },
        botaotexto:{
           color:'#fff',
           fontWeight:'bold',
           }


});


