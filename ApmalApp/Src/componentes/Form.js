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
   
  //   function Form(props ) {
  //  console.log(props); 
  
  // navigateToScreen=()=>{
 
    //     navigation.navigate('Tela');
    // }
export default class Form extends Component{
    
    // clicou =()=>{
    //   Alert.alert("tela login","clicado");
    // }

    render(){
      return(
         <View style={styles.Container}>
            {/* <ImageBackground source={require('./assets/fundo1.png')} style={styles.imagen}></ImageBackground> */}
           
        
       <TextInput style={styles.caixaDeEntradaTexto}
           
           
              
      placeholder=" Digite o seu email!"
               //placeholderTextColor= '#ffffff' 
             
              /> 

           <TextInput style={styles.caixaDeEntradaTexto}
              secureTextEntry={true}
             placeholder=" Digite a sua senha!"

            // placeholderTextColor= '#ffffff' 
             />
             {/* <TouchableOpacity style={styles.botao}
             */}
             <Button 
              title = "go to Home"
              onPress={()=>props.navigation.navigate('Home')}
          //    {/* onPress={()=>{this.clicou()}} */}
          //    />   
               
          //  {/* <Text style= {styles.textoBotao}>Acessar</Text> */}
          //  {/* </TouchableOpacity>  */}
            />
          
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


    },
    

        
    
    
    // imagen:{
    //     flex:1,
    //     width:'100%',
    //     height:'100%',
        

    // },
    //   //Container: {
//   //backgroundColor:'#3e3f8f',
//   flex:1,
//   alignItems: 'center',
//   justifyContent: 'center',


caixaDeEntradaTexto:{
    padding:8,
    marginTop:10,
    width:300,
    backgroundColor:'#fff',
    fontSize:16,
    fontWeight:'bold',
    borderRadius:3,
},
    botao:{
    width:300,
    height:42,
    backgroundColor: '#4CAF50',
    marginTop:10,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center'
},
//  imagen:{
//   flex:1,
//   width:'100%',
//   height:'100%',
    
  
//   justifyContent: 'center',
//      alignItems: 'center',
textoBotao:{
  fontSize:16,
  fontWeight:'bold',
  color:'#fff'
}
 
 });


 