import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductCards from './src/ProductCards';
import SignupForm from './src/Form';

const AppNavigator = createStackNavigator({
  Home: {
    screen: ProductCards,
    navigationOptions: {
      title: 'Produtos',
    },
  },
  Signup: {
    screen: SignupForm,
    navigationOptions: {
      title: 'Cadastro',
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
