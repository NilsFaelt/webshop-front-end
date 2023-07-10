export const getCartFromLocalStorage = () => {
  const value = localStorage.getItem("myCart");
  if (value) {
    const parsedValue = JSON.parse(value);
    return parsedValue;
  }
  return [];
};
