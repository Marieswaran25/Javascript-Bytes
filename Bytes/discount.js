const getDiscountedPrice = (price, discount) => {
  let newprise;
  return (newprise = price - (price * discount) / 100);
};

const originalPrice = 4990; // Use the same original price
const discount = 30;

console.log(getDiscountedPrice(4990, 30));
console.log((originalPrice * discount) / 100);
