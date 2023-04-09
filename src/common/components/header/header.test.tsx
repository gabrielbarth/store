import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Wrapper, PreLoadedStateWrapper } from '../../utils/wrapper';
import { Header, HeaderProps } from '.';

describe('<Header />', () => {
  const props: HeaderProps = {
    onSelectCart: jest.fn(),
    onSelectGoBack: jest.fn(),
  };

  const container = 'Header_Container';
  const pressable_go_back = 'Header_Pressable_On_Select_GoBack';
  const pressable_go_cart = 'Header_Pressable_On_Select_Cart';
  const cart_amount_content = 'Header_Amount_Cart_Content';

  it(`renders component #${container}`, async () => {
    const { findByTestId } = render(<Header {...props} />, {
      wrapper: Wrapper,
    });

    const test = await findByTestId(container);
    expect(test).toBeTruthy();
  });

  it(`renders component #${pressable_go_back}`, async () => {
    const { findByTestId } = render(<Header {...props} />, {
      wrapper: Wrapper,
    });

    const test = await findByTestId(pressable_go_back);
    expect(test).toBeTruthy();
  });

  it(`presses component #${pressable_go_back}`, async () => {
    const { findByTestId } = render(<Header {...props} />, {
      wrapper: Wrapper,
    });

    const test = await findByTestId(pressable_go_back);

    fireEvent(test, 'press');
    expect(props.onSelectGoBack).toBeCalledTimes(1);
  });

  it(`renders component #${pressable_go_cart}`, async () => {
    const { findByTestId } = render(<Header {...props} />, {
      wrapper: Wrapper,
    });

    const test = await findByTestId(container);
    expect(test).toBeTruthy();
  });

  it(`presses component #${pressable_go_cart}`, async () => {
    const { findByTestId } = render(<Header {...props} />, {
      wrapper: Wrapper,
    });

    const test = await findByTestId(pressable_go_cart);

    fireEvent(test, 'press');
    expect(props.onSelectGoBack).toBeCalledTimes(1);
  });

  it(`renders component without #${pressable_go_back}`, () => {
    const { queryByTestId } = render(<Header onSelectCart={jest.fn()} />, {
      wrapper: Wrapper,
    });

    const test = queryByTestId(pressable_go_back);
    expect(test).toBeFalsy();
  });

  it(`renders component #${cart_amount_content}`, async () => {
    const { findByTestId } = render(<Header {...props} />, {
      wrapper: PreLoadedStateWrapper,
    });

    const test = await findByTestId(cart_amount_content);
    expect(test).toBeTruthy();
  });

  it(`renders component without #${cart_amount_content}`, () => {
    const { queryByTestId } = render(<Header {...props} />, {
      wrapper: Wrapper,
    });

    const test = queryByTestId(cart_amount_content);
    expect(test).toBeFalsy();
  });
});
