import React from 'react';
import { View, Button } from 'react-native';
import { Card } from 'react-native-elements';
import SignupForm from './Form';

const ProductCards = ({ navigation }) => {
  const products = [
    {
      name: 'Product 1',
      image: require('./img/img1.webp'),
      price: '$10',
    },
    {
      name: 'Product 2',
      image: require('./img/img1.webp'),
      price: '$20',
    },
    {
      name: 'Product 3',
      image: require('./img/img1.webp'),
      price: '$30',
    },
    {
      name: 'Product 4',
      image: require('./img/img1.webp'),
      price: '$40',
    },
  ];

  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product, index) => (
          <Card key={index}>
            <Card.Image source={product.image} />
            <Card.Title>{product.name}</Card.Title>
            <Card.Divider />
            <Card.FeaturedSubtitle>{product.price}</Card.FeaturedSubtitle>
          </Card>
        ))}
      </View>
      <Button
        title="Cadastrar produto"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default ProductCards;
