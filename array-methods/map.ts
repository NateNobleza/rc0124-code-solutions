const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const sale = prices.map((price) => ({
  price,
  salePrice: price / 2,
}));
console.log('sale prices');
console.log(sale);

const arrPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log('array of prices');
console.log(arrPrices);
