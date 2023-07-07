import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Avatar = ({ source }) => {
  return <Image source={source} style={styles.avatar} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Avatar;
