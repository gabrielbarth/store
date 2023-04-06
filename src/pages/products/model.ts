import { ProductModel } from '../../common/models/product.model';

export interface ProductsViewModel {
  products: ProductModel[];
  onSelectProduct: (product: ProductModel) => void;
  cartProducts: ProductModel[];
  isLoading: boolean;
}
