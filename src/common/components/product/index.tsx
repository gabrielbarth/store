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
  return (
    <View style={styles.container} testID="Product_Container">
      <Image
        testID="Product_Image"
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text
        style={styles.title}
        numberOfLines={1}
        ellipsizeMode="tail"
        testID="Product_Title">
        {product.title}
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
