import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar } from 'react-native';

// import { Producrts } from './pages/products/view';

import { store } from './store';
import { Cart } from './pages/cart/view';

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#2e2e2e" />
      <Provider store={store}>
        <Cart />
      </Provider>
    </SafeAreaView>
  );
}
