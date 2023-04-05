import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { Product } from '../../common/components/product';
import { useProductsViewModel } from './view.model';

export function Products() {
  const { products, cartProducts, onSelectProduct } = useProductsViewModel();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product
            product={item}
            onSelectProduct={() => onSelectProduct(item)}
            productSelected={cartProducts.some(
              product => product.id === item.id,
            )}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});