import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputWithLabel = ({ label, placeholder, value, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputWithLabel;
