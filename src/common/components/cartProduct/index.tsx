import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import { ProductModel } from '../../models/product.model';
import { styles } from './styles';

type CartProductProps = {
  product: ProductModel;
  onRemoveProduct: () => void;
  onAddProduct: () => void;
};

function CartProduct({
  product,
  onRemoveProduct,
  onAddProduct,
}: CartProductProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContent}>
          <Text
            style={styles.title}
            numberOfLines={1}
            ellipsizeMode="tail"
            testID="Product_Title">
            {product.title}
          </Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={onRemoveProduct}>
          <Icon name="minus-a" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.amount}>
          <Text style={styles.amountText}>{product.quantity}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={onAddProduct}>
          <Icon name="plus-a" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { CartProduct };
