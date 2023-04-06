import { ProductsViewModel } from './model';

import {
  useReduxDispatch,
  useReduxSelector,
  useAppNavigator,
} from '../../common/hooks';
import { removeProduct } from '../../store/slices/cart';

export const useProductsViewModel = (): ProductsViewModel => {
  const navigation = useAppNavigator();
  const dispatch = useReduxDispatch();
  const cartProducts = useReduxSelector(state => state.cart.products);

  function onRemoveProduct(productId: number) {
    dispatch(removeProduct(productId));
  }

  function onGoBack() {
    navigation.goBack();
  }

  return {
    onRemoveProduct,
    cartProducts,
    onGoBack,
  };
};
