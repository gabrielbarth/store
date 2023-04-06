export const formatPrice = (price: number) => {
  return price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
};
