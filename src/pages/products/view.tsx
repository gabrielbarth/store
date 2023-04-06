import React from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import { Product } from '../../common/components/product';
import { useProductsViewModel } from './view.model';
import { Header } from '../../common/components/header';

export function Products() {
  const { products, cartProducts, onSelectProduct, isLoading, onSelectCart } =
    useProductsViewModel();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header onSelectCart={onSelectCart} />
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
    justifyContent: 'center',
  },
});
