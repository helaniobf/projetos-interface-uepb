import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Heading = ({ text }) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Heading;
