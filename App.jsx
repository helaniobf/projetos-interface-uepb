import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import InputWithLabel from './InputWithLabel.jsx';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [petBirthday, setPetBirthday] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [favoriteToy, setFavoriteToy] = useState('');

  return (
    <ScrollView>
      <InputWithLabel
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <InputWithLabel
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputWithLabel
        label="Pet Name"
        placeholder="Enter your pet's name"
        value={petName}
        onChangeText={setPetName}
      />
      <InputWithLabel
        label="Pet Birthday"
        placeholder="Enter your pet's birthday"
        value={petBirthday}
        onChangeText={setPetBirthday}
      />
      <InputWithLabel
        label="Pet Breed"
        placeholder="Enter your pet's breed"
        value={petBreed}
        onChangeText={setPetBreed}
      />
      <InputWithLabel
        label="Favorite Toy"
        placeholder="Enter your pet's favorite toy"
        value={favoriteToy}
        onChangeText={setFavoriteToy}
      />
    </ScrollView>
  );
};

export default App;
