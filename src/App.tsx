import React from 'react';
import { Products } from './pages/products/view';
import { SafeAreaView, StatusBar } from 'react-native';

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#2e2e2e" />
      <Products />
    </SafeAreaView>
  );
}
