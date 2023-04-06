import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { Header } from '../../common/components/header';
import { CartProduct } from '../../common/components/cartProduct';
import { useProductsViewModel } from './view.model';

export function Cart() {
  const { cartProducts, onRemoveProduct, onGoBack } = useProductsViewModel();

  return (
    <View style={styles.container}>
      <Header onSelectCart={() => {}} onSelectGoBack={onGoBack} />
      <FlatList
        data={cartProducts}
        showsVerticalScrollIndicator={false}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <CartProduct
            product={item}
            onRemoveProduct={() => onRemoveProduct(item.id)}
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
