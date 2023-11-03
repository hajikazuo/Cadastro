import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductCards from './ProductCards';
import SignupForm from './Form';

const AppNavigator = createStackNavigator({
  Home: {
    screen: ProductCards,
    navigationOptions: {
      title: 'Products',
    },
  },
  Signup: {
    screen: SignupForm,
    navigationOptions: {
      title: 'Cadastro',
    },
  },
});

export default createAppContainer(AppNavigator);
