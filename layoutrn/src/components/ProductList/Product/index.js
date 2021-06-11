import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Product = ({product: {image, title, description, price}}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default Product;
