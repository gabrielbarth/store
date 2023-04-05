import { useEffect, useState } from 'react';
import { ProductModel } from '../../common/models/product.model';
import { ProductsViewModel } from './model';
import { api } from '../../services/api';

export const useProductsViewModel = (): ProductsViewModel => {
  const [products, setProducts] = useState<ProductModel[]>(
    [] as ProductModel[],
  );
  const [cartProducts, setCartProducts] = useState<ProductModel[]>(
    [] as ProductModel[],
  );

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

  async function fetchProducts() {
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
  }

  useEffect(() => {
    fetchProducts();
  }, [cartProducts]);

  useEffect(() => {
    console.log('PRODUTOS DO CARRINHO =', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return {
    onSelectProduct,
    products,
    cartProducts,
  };
};
