import { useEffect, useState } from 'react';
import { ProductModel } from '../../common/models/product.model';
import { ProductsViewModel } from './model';

export const useProductsViewModel = (): ProductsViewModel => {
  const [cartProducts, setCartProducts] = useState<ProductModel[]>(
    [] as ProductModel[],
  );
  const fakeProducts: ProductsViewModel['products'] = [
    {
      id: 1,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 3,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
  ];

  function addProduct(product: ProductModel) {
    setCartProducts(prev => [...prev, product]);
  }

  function removeProduct(productId: number) {
    const updatedCardProducts = cartProducts.filter(
      product => product.id !== productId,
    );

    setCartProducts(updatedCardProducts);
  }

  function onSelectProduct(product: ProductModel) {
    const productExistsOnCart = cartProducts.some(
      productCart => productCart.id === product.id,
    );

    if (productExistsOnCart) {
      removeProduct(product.id);
      return;
    }

    addProduct(product);
  }

  useEffect(() => {
    console.log('PRODUTOS DO CARRINHO =', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return {
    onSelectProduct,
    products: fakeProducts,
    cartProducts,
  };
};
