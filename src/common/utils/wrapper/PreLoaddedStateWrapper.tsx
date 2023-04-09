import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from '../../../store/slices/cart';

interface Props {
  children?: ReactNode;
}

export function PreLoadedStateWrapper({ children }: Props) {
  const preloadedState = {
    cart: {
      products: [
        {
          id: '1',
          image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
          price: '90,00',
          title: 'Produto Teste',
        },
      ],
    },
  };

  const storeWithPreloadedState = configureStore({
    reducer: { cart: cartReducer },
    preloadedState,
  });

  return <Provider store={storeWithPreloadedState}>{children}</Provider>;
}
