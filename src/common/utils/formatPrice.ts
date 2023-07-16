export const formatPrice = (price: number) => {
  return price.toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
};
