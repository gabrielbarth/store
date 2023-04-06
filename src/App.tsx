import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar } from 'react-native';

import { Routes } from './routes';
import { store } from './store';

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#2e2e2e" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaView>
  );
}
