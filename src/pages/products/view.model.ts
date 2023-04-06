import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { ProductModel } from '../../common/models/product.model';
import { ProductsViewModel } from './model';

import {
  useReduxDispatch,
  useReduxSelector,
  useAppNavigator,
} from '../../common/hooks';
import { addProduct, removeProduct } from '../../store/slices/cart';
import { api } from '../../services/api';

export const useProductsViewModel = (): ProductsViewModel => {
  const navigation = useAppNavigator();
  const dispatch = useReduxDispatch();
  const cartProducts = useReduxSelector(state => state.cart.products);

  const [products, setProducts] = useState<ProductModel[]>(
    [] as ProductModel[],
  );

  const [isLoading, setIsLoading] = useState(true);

  function addToCart(product: ProductModel) {
    dispatch(addProduct(product));
  }

  function removeFromCart(productId: number) {
    dispatch(removeProduct(productId));
  }

  function onSelectProduct(product: ProductModel) {
    const productExistsOnCart = cartProducts.some(
      productCart => productCart.id === product.id,
    );

    if (productExistsOnCart) {
      removeFromCart(product.id);
      return;
    }

    addToCart(product);
  }

  function onSelectCart() {
    if (cartProducts.length === 0) {
      Alert.alert('Você precisa adicionar produtos ao carrinho antes.');
      return;
    }
    navigation.navigate('cart');
  }

  async function fetchProducts() {
    try {
      const result = await api.get('products');

      const fetchedProducts = result.data;

      const formattedProducts = fetchedProducts.map((product: any) => {
        return {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
        } as ProductModel;
      });

      setProducts(formattedProducts);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Um erro imprevisto ocorreu. Por favor, reinicie o aplicativo.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (__DEV__) {
      console.log('PRODUTOS DO CARRINHO =', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  return {
    onSelectProduct,
    products,
    cartProducts,
    isLoading,
    onSelectCart,
  };
};
