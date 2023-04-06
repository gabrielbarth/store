import { ProductModel } from '../../common/models/product.model';

export interface ProductsViewModel {
  cartProducts: ProductModel[];
  onRemoveProduct: (productId: number) => void;
}
