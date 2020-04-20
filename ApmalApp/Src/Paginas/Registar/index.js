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
  Picker,

} from 'react-native';

//Para navegar use esse Hoock
//import {useNavigation} from '@react-navigation/native';
  

//Têm não pode usar hooks dentro classes extendida de components 
//Use a sintaxe export deafult function... transforme tudo em função
export default function FormRegister (){
  
  
  const [selectedValue, setSelectedValue] = useState("cidade");
  
  
  // clicou =()=>{
    //   Alert.alert("tela login","clicado");
    // }
    
    //chamando o hook useNavigation
    //const navigation = useNavigation();
    

      return(
        <View style = { styles.container}>
          <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(cidade)}
        >   
      <Picker.Item label="escolha a cidade" value="" />
        {/* <Picker.Item label="JavaScript" value="js" /> */}
      <Text style={styles.header}> Cadastro</Text>
   
          <TextInput style={styles.caixaDeEntradaTexto} 
          placeholder="digite seu nome"
	        underlineColorAndroid={'transaparent'}/>
	
	<TextInput 
           style={styles.caixaDeEntradaTexto} 
            placeholder="digite seu email"
	          underlineColorAndroid={'transaparent'}/>
	
           <TextInput 
           style={styles.caixaDeEntradaTexto} 
           placeholder="digite sua cidade"
	          underlineColorAndroid={'transaparent'}/>
             <TouchableOpacity style={styles.button}>
	         <Text style={styles.botaoteste}> Sign up </Text>
           </TouchableOpacity>
          
      </Picker>
           </View>
            );
        }
    

const styles = StyleSheet.create({
	container:{
    flex:1,
    backgroundColor:"#36485f",
    alignSelf:'stretch',
    //backgroundColor:"#3e3f8f",
    //flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  
    //alignSelf:'stretch',
},

  header:{
	fontSize:30,
	color:'#fff',
	paddingBottom:10,
	marginBottom:40,
	borderBottomColor:'#199187',
	borderBottomWidth:1,
   },

	caixaEntradasTexto:{
	alignSelf:'stretch',
	height:60,
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


