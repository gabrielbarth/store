import { cartReducer, addProduct, removeProduct, CartState } from '.';

describe('Cart reducer', () => {
  const state: CartState = {
    products: [],
  };

  it('handle initial state', () => {
    const initialState: CartState = state;
    const action = { type: 'unknown' };

    const expectedState = initialState;

    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  it('handle addProduct', () => {
    const initialState: CartState = state;
    const action = addProduct({
      id: '1',
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
      price: '90,00',
      title: 'Produto Teste',
    });

    const expectedState: CartState = {
      ...state,
      products: [
        {
          id: '1',
          image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
          price: '90,00',
          title: 'Produto Teste',
        },
      ],
    };

    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  it('handle removeProduct', () => {
    const initialState: CartState = {
      ...state,
      products: [
        {
          id: '1',
          image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
          price: '90,00',
          title: 'Produto Teste',
        },
      ],
    };
    const action = removeProduct('1');

    const expectedState = state;

    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});
