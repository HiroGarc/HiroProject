import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from '../Paginas/Home';
import Login from '../Paginas/Login';
import Registar from '../Paginas/Login';
/*
  Para organizar é só ir na pasta páginas e criar uma pasta com o nome 'Registar'
  ou qualquerum e dentro cria um index.js para colocar é só indicar o nome da pasta
  que o primeiro arquivo a ser carregado é o index, nesse idex pode escrever o código
  para o teu componente, lembrando que têm de usar a sintaxe mas recente
  pode dar uma olhada como organizei o os arquivos em especial a página login
  e o componente Form.
*/
//pode importar nesse arquivo todas as páginas que vai usar.

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Registar" component={Registar} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}