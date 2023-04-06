import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Cart } from '../pages/cart/view';
import { Products } from '../pages/products/view';

type AppRoutes = {
  cart: undefined;
  products: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="products"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="products" component={Products} />
        <Screen name="cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
}
