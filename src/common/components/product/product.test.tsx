import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Product, ProductProps } from '.';

describe('<Post />', () => {
  const props: ProductProps = {
    product: { id: '1', image: 'naad', price: '123', title: 'r213' },
    onSelectProduct: jest.fn(),
    productSelected: false,
  };

  const container = 'Product_Container';
  const image = 'Product_Image';
  const title = 'Product_Title';
  const price = 'Product_Price';
  const pressable = 'Product_Pressable';
  const pressable_label = 'Product_Pressable_Label';

  it(`renders component #${container}`, async () => {
    const { findByTestId } = render(<Product {...props} />);

    const test = await findByTestId(container);
    expect(test).toBeTruthy();
  });

  it(`renders component #${image}`, async () => {
    const { findByTestId } = render(<Product {...props} />);

    const test = await findByTestId(image);
    expect(test).toBeTruthy();
  });

  it(`renders component #${title}`, async () => {
    const { findByTestId } = render(<Product {...props} />);

    const test = await findByTestId(title);
    expect(test).toBeTruthy();
  });

  it(`renders component #${title} with large text`, async () => {
    const { findByTestId } = render(
      <Product
        {...props}
        product={{
          ...props.product,
          title: 'This product has a large title with more than 30 characters',
        }}
      />,
    );

    const test = await findByTestId(title);
    expect(test).toBeTruthy();
  });

  it(`renders component #${price}`, async () => {
    const { findByTestId } = render(<Product {...props} />);

    const test = await findByTestId(price);
    expect(test).toBeTruthy();
  });

  it(`renders component #${pressable_label} with label 'Adicionar'`, async () => {
    const { findByTestId } = render(<Product {...props} />);

    const test = await findByTestId(pressable_label);

    expect(test.children[0]).toEqual('Adicionar');
  });

  it(`renders component #${pressable_label} with label 'Remover'`, async () => {
    const { findByTestId } = render(<Product {...props} productSelected />);

    const test = await findByTestId(pressable_label);

    expect(test.children[0]).toEqual('Remover');
  });

  it(`presses component #${pressable}`, async () => {
    const { findByTestId } = render(<Product {...props} />);

    const test = await findByTestId(pressable);

    fireEvent(test, 'press');
    expect(props.onSelectProduct).toBeCalledTimes(1);
  });
});
