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
      const existingProduct = state.products.find(
        product => product.id === action.payload.id,
      );

      if (existingProduct?.id) {
        state.products = state.products.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });

        return;
      }
      action.payload.quantity = 1;
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const existingProduct = state.products.find(
        product => product.id === action.payload,
      );

      if (existingProduct && existingProduct?.quantity > 1) {
        state.products = state.products.map(product => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
        return;
      }

      const updatedCartProducts = state.products.filter(
        item => item.id !== action.payload,
      );
      state.products = updatedCartProducts;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
