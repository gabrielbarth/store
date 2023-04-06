import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import { ProductModel } from '../../models/product.model';
import { styles } from './styles';

type CartProductProps = {
  product: ProductModel;
  onRemoveProduct: () => void;
};

function CartProduct({ product, onRemoveProduct }: CartProductProps) {
  const title =
    product.title.length < 30
      ? product.title
      : `${product.title.substring(0, 30).trim()}.`;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>R$ {product.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onRemoveProduct}>
        <Icon name="close" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
}

export { CartProduct };
