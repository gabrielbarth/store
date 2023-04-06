import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../../common/models/product.model';

export const cartSlice = createSlice({
  name: '@cart',
  initialState: {
    products: [] as ProductModel[],
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
