import { ProductModel } from '../../common/models/product.model';

export interface ProductsViewModel {
  cartProducts: ProductModel[];
  onRemoveProduct: (productId: string) => void;
  onAddProduct: (product: ProductModel) => void;
  onGoBack: () => void;
}
