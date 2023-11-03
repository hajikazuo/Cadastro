import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSignup = () => {
    console.log('Name:', name);
    console.log('Price:', price);
    console.log('Image:', image);
  };

  return (
    <View>
      <Input
        placeholder="Nome do produto"
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
      />
      <Input
        placeholder="Imagem URL"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
    </View>
  );
};

export default SignupForm;
