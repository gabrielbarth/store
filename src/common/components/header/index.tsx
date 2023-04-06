import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type HeaderProps = {
  onSelectCart: () => void;
  productsAmount: string;
};

function Header({ onSelectCart, productsAmount }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onSelectCart}>
        <Icon name="shopping-cart" size={40} color="#f1f1f1" />
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{productsAmount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export { Header };
