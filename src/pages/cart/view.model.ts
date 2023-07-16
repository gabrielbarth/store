import { ProductsViewModel } from './model';

import {
  useReduxDispatch,
  useReduxSelector,
  useAppNavigator,
} from '../../common/hooks';
import { addProduct, removeProduct } from '../../store/slices/cart';
import { ProductModel } from '../../common/models/product.model';

export const useProductsViewModel = (): ProductsViewModel => {
  const navigation = useAppNavigator();
  const dispatch = useReduxDispatch();
  const cartProducts = useReduxSelector(state => state.cart.products);

  function onRemoveProduct(productId: string): void {
    dispatch(removeProduct(productId));

    if (cartProducts.length === 1) {
      const isLastProduct = cartProducts.some(
        product => product.quantity === 1,
      );
      isLastProduct && onGoBack();
    }
  }
  function onAddProduct(product: ProductModel): void {
    dispatch(addProduct(product));
  }

  function onGoBack() {
    navigation.goBack();
  }

  return {
    onRemoveProduct,
    cartProducts,
    onGoBack,
    onAddProduct,
  };
};
