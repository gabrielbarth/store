import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../../common/models/product.model';

export type CartState = {
  products: ProductModel[];
};

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: '@cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductModel>) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const updatedCartProducts = state.products.filter(
        item => item.id !== action.payload,
      );
      state.products = updatedCartProducts;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
