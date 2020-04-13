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

//Para navegar use esse Hoock
//import {useNavigation} from '@react-navigation/native';
  

//Têm não pode usar hooks dentro classes extendida de components 
//Use a sintaxe export deafult function... transforme tudo em função
export default function FormRegister (){
  
  // clicou =()=>{
    //   Alert.alert("tela login","clicado");
    // }
    
    //chamando o hook useNavigation
    //const navigation = useNavigation();
    

      return(
        <View style = { styles.FormRegister}>
      
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
	FormRegister:{
	alignSelf:'stretch',
},

  header:{
	fontSize:24,
	color:'#fff',
	paddingBottom:10,
	marginBottom:40,
	borderBottomColor:'#199187',
	borderBottomWidth:1,
   },

	caixaEntradasTexto:{
	alignSelf:'stretch',
	height:40,
	marginBottom:30,
	color:'#fff',
	borderBottomColor:'#f8f8f8',
	borderBottomWidth:1,

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


