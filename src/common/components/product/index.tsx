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
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
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
