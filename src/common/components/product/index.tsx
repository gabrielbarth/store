import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ProductModel } from '../../models/product.model';
import { styles } from './styles';

export type ProductProps = {
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
    <View style={styles.container} testID="Product_Container">
      <Image
        testID="Product_Image"
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title} testID="Product_Title">
        {title}
      </Text>
      <Text style={styles.price} testID="Product_Price">
        {product.price}
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onSelectProduct}
        testID="Product_Pressable">
        <Text style={styles.buttonText} testID="Product_Pressable_Label">
          {productSelected ? 'Remover' : 'Adicionar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export { Product };
