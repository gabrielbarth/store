import React from 'react';
import { Products } from './pages/products/view';
import { SafeAreaView } from 'react-native';

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Products />
    </SafeAreaView>
  );
}
