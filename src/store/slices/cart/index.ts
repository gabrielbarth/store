import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../../common/models/product.model';

export const cartSlice = createSlice({
  name: '@cart',
  initialState: {
    products: [
      {
        id: 1,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
      },
      {
        id: 2,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
      },
    ] as ProductModel[],
  },
  reducers: {
    addProduct: (state, action: PayloadAction<ProductModel>) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const updatedCartProducts = state.products.filter(
        item => item.id !== action.payload,
      );
      state.products = updatedCartProducts;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
