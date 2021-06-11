import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({children, type, style}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, type ? styles[`button-${type}`] : {}]}>
      <Text style={[styles.text, type ? styles[`button-${type}`] : {}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
