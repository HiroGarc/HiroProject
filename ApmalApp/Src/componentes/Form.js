import React, {Component} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  //ScrollView,
  View,
  //Text,
  //StatusBar,
  TextInput,
  //ImageBackground, 
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

//Para navegar use esse Hoock
import {useNavigation} from '@react-navigation/native';

//Têm não pode usar hooks dentro classes extendida de components
//Use a sintaxe export deafult function... transforme tudo em função
export default function Form() {

  //chamando o hook useNavigation
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      {/* <ImageBackground source={require('./assets/fundo1.png')} style={styles.imagen}></ImageBackground> */}

      <TextInput
        style={styles.caixaDeEntradaTexto}
        placeholder=" Digite o seu email!"
        //placeholderTextColor= '#ffffff'
      />

      <TextInput
        style={styles.caixaDeEntradaTexto}
        secureTextEntry={true}
        placeholder=" Digite a sua senha!"

        // placeholderTextColor= '#ffffff'
      />
      {/* <TouchableOpacity style={styles.botao}
       */}
      <Button
        title="go to Home"
        onPress={() => navigation.navigate('Home')} // chama ela como uma função anonima para não executar sempre que carregar a página
        //    {/* onPress={()=>{this.clicou()}} */}
        //    />

        //  {/* <Text style= {styles.textoBotao}>Acessar</Text> */}
        //  {/* </TouchableOpacity>  */}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#36485f',
    flex: 1,
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

  caixaDeEntradaTexto: {
    padding: 8,
    marginTop: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#4CAF50',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //  imagen:{
  //   flex:1,
  //   width:'100%',
  //   height:'100%',

  //   justifyContent: 'center',
  //      alignItems: 'center',
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

//Form

// import React, { Component } from 'react';
// import {
//   //SafeAreaView,
//   StyleSheet,
//   //ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   //ImageBackground,
//   TouchableOpacity,
//   Button,
//   Alert,

// } from 'react-native';

// //Para navegar use esse Hoock
// import {useNavigation} from '@react-navigation/native';

// //Têm não pode usar hooks dentro classes extendida de components
// //Use a sintaxe export deafult function... transforme tudo em função
// export default function Form (){

//   // clicou =()=>{
//     //   Alert.alert("tela login","clicado");
//     // }

//     //chamando o hook useNavigation
//     const navigation = useNavigation();

//       return(
//          <View style={styles.Container}>
//             {/* <ImageBackground source={require('./assets/fundo1.png')} style={styles.imagen}></ImageBackground> */}

//        <TextInput style={styles.caixaDeEntradaTexto}

//       placeholder=" Digite o seu email!"
//                //placeholderTextColor= '#ffffff'

//               />

//            <TextInput style={styles.caixaDeEntradaTexto}
//               secureTextEntry={true}
//              placeholder=" Digite a sua senha!"

//             // placeholderTextColor= '#ffffff'
//              />
//              {/* <TouchableOpacity style={styles.botao}
//              */}
//              <Button
//               title = "go to Home"
//               onPress={() => (navigation.navigate('Home'))} // chama ela como uma função anonima para não executar sempre que carregar a página
//           //    {/* onPress={()=>{this.clicou()}} */}
//           //    />

//           //  {/* <Text style= {styles.textoBotao}>Acessar</Text> */}
//           //  {/* </TouchableOpacity>  */}
//             />

//            </View>

//       );

//   }

//   const styles = StyleSheet.create({

//     Container: {
//     backgroundColor:'#3e3f8f',
//      flex:1,
//       alignItems: 'center',
//       justifyContent: 'center',

//     },

//     // imagen:{
//     //     flex:1,
//     //     width:'100%',
//     //     height:'100%',

//     // },
//     //   //Container: {
// //   //backgroundColor:'#3e3f8f',
// //   flex:1,
// //   alignItems: 'center',
// //   justifyContent: 'center',

// caixaDeEntradaTexto:{
//     padding:8,
//     marginTop:10,
//     width:300,
//     backgroundColor:'#fff',
//     fontSize:16,
//     fontWeight:'bold',
//     borderRadius:3,
// },
//     botao:{
//     width:300,
//     height:42,
//     backgroundColor: '#4CAF50',
//     marginTop:10,
//     borderRadius:4,
//     alignItems:'center',
//     justifyContent:'center'
// },
// //  imagen:{
// //   flex:1,
// //   width:'100%',
// //   height:'100%',

// //   justifyContent: 'center',
// //      alignItems: 'center',
// textoBotao:{
//   fontSize:16,
//   fontWeight:'bold',
//   color:'#fff'
// }

//  });

// import React, { Component } from 'react';
// import {
//   //SafeAreaView,
//   StyleSheet,
//   //ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   //ImageBackground,
//   TouchableOpacity,
//   Button,
//   Alert,

// } from 'react-native';

//   //   function Form(props ) {
//   //  console.log(props);

//   // navigateToScreen=()=>{

//     //     navigation.navigate('Tela');
//     // }
// export default class Form extends Component{

//     // clicou =()=>{
//     //   Alert.alert("tela login","clicado");
//     // }

//     render(){
//       return(
//          <View style={styles.Container}>
//             {/* <ImageBackground source={require('./assets/fundo1.png')} style={styles.imagen}></ImageBackground> */}

//        <TextInput style={styles.caixaDeEntradaTexto}

//       placeholder=" Digite o seu email!"
//                //placeholderTextColor= '#ffffff'

//               />

//            <TextInput style={styles.caixaDeEntradaTexto}
//               secureTextEntry={true}
//              placeholder=" Digite a sua senha!"

//             // placeholderTextColor= '#ffffff'
//              />
//              {/* <TouchableOpacity style={styles.botao}
//              */}
//              <Button
//               title = "go to Home"
//               onPress={()=>props.navigation.navigate('Home')}
//           //    {/* onPress={()=>{this.clicou()}} */}
//           //    />

//           //  {/* <Text style= {styles.textoBotao}>Acessar</Text> */}
//           //  {/* </TouchableOpacity>  */}
//             />

//            </View>

//       );
//     }
//   }

//   const styles = StyleSheet.create({

//     Container: {
//     backgroundColor:'#3e3f8f',
//      flex:1,
//       alignItems: 'center',
//       justifyContent: 'center',

//     },

//     // imagen:{
//     //     flex:1,
//     //     width:'100%',
//     //     height:'100%',

//     // },
//     //   //Container: {
// //   //backgroundColor:'#3e3f8f',
// //   flex:1,
// //   alignItems: 'center',
// //   justifyContent: 'center',

// caixaDeEntradaTexto:{
//     padding:8,
//     marginTop:10,
//     width:300,
//     backgroundColor:'#fff',
//     fontSize:16,
//     fontWeight:'bold',
//     borderRadius:3,
// },
//     botao:{
//     width:300,
//     height:42,
//     backgroundColor: '#4CAF50',
//     marginTop:10,
//     borderRadius:4,
//     alignItems:'center',
//     justifyContent:'center'
// },
// //  imagen:{
// //   flex:1,
// //   width:'100%',
// //   height:'100%',

// //   justifyContent: 'center',
// //      alignItems: 'center',
// textoBotao:{
//   fontSize:16,
//   fontWeight:'bold',
//   color:'#fff'
// }

//  });
