interface Item {
  total: number;
  price: number;
}

export const calculateTotalPrice = (items: Item[]): number => {
  if (items) {
    const multipliedPrices = items.reduce((total, item) => {
      return total + item.price * item.total;
    }, 0);

    return multipliedPrices;
  } else return 0;
};
