import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';

import { useReduxSelector } from '../../hooks';
import { styles } from './styles';

export type HeaderProps = {
  onSelectCart: () => void;
  onSelectGoBack?: () => void;
};

function Header({ onSelectCart, onSelectGoBack = undefined }: HeaderProps) {
  const productsAmount = useReduxSelector(state => state.cart.products.length);
  const justifyContent = onSelectGoBack ? 'space-between' : 'flex-end';

  return (
    <View
      testID="Header_Container"
      style={[styles.container, { justifyContent }]}>
      {onSelectGoBack && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onSelectGoBack}
          testID="Header_Pressable_On_Select_GoBack">
          <Icon name="arrow-left" size={20} color="#f1f1f1" />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSelectCart}
        testID="Header_Pressable_On_Select_Cart">
        <Icon name="shopping-cart" size={40} color="#f1f1f1" />
        {productsAmount > 0 && (
          <View
            style={styles.amountContainer}
            testID="Header_Amount_Cart_Content">
            <Text style={styles.amount}>{productsAmount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

export { Header };
