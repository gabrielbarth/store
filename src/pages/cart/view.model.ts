import { ProductsViewModel } from './model';

import { useReduxDispatch, useReduxSelector } from '../../common/hooks';
import { removeProduct } from '../../store/slices/cart';

export const useProductsViewModel = (): ProductsViewModel => {
  const dispatch = useReduxDispatch();
  const cartProducts = useReduxSelector(state => state.cart.products);

  function onRemoveProduct(productId: number) {
    dispatch(removeProduct(productId));
  }

  return {
    onRemoveProduct,
    cartProducts,
  };
};
