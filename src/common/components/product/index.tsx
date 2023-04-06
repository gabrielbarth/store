import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ProductModel } from '../../models/product.model';
import { styles } from './styles';

type ProductProps = {
  product: ProductModel;
  onSelectProduct: () => void;
  productSelected: boolean;
};

function Product({ product, onSelectProduct, productSelected }: ProductProps) {
  const title =
    product.title.length < 30
      ? product.title
      : `${product.title.substring(0, 30).trim()}.`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onSelectProduct}>
        <Text style={styles.buttonText}>
          {productSelected ? 'Remover' : 'Adicionar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export { Product };
