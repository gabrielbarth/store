import { api } from '../services/api';
import { formatPrice } from '../common/utils/formatPrice';
import { ProductModel } from '../common/models/product.model';
import { AxiosResponse } from 'axios';

type ProductsResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export async function fetchProducts() {
  try {
    const result: AxiosResponse<ProductsResponse[]> = await api.get('products');
    const fetchedProducts = result.data;

    const formattedProducts = fetchedProducts.map(product => {
      return {
        id: String(product.id),
        image: product.image,
        title: product.title,
        price: formatPrice(product.price),
        quantity: 0,
      } as ProductModel;
    });

    return formattedProducts;
  } catch (error) {
    console.log(error);
  }
}
