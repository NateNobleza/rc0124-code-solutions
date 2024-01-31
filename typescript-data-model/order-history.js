'use strict';
const orderHistory = [
  {
    orderPlaced: 'Aug 4,2020',
    item: 'Javascript for impatient Programmers',
    delivered: 'Aug 8,2020',
    orderCode: 1,
    price: 34.0,
    subtotal: 34.0,
  },
  {
    orderPlaced: 'Jul 19,2020',
    item: 'The Timeless Way of Building',
    delivered: 'Jul 20, 2020',
    orderCode: 2,
    price: 44.53,
    subtotal: 44.53,
  },
  {
    orderPlaced: 'Jul 4,2020',
    item: 'Gamecube controller adapter',
    delivered: 'Jul 7, 2020',
    orderCode: 3,
    price: 17.22,
    subtotal: 17.22,
  },
  {
    orderPlaced: 'Jul 3,2020',
    item: ['Gamecube controller', 'The art of Sql'],
    delivered: 'July 2, 2020',
    orderCode: 4,
    price: [94.95, 33.99],
    subtotal: 138.93,
    shipTo: 'JS MASHER',
  },
];
console.log('this is my order history', orderHistory);
console.log(orderHistory[3].price[1]);
console.log(orderHistory[3].item[0]);
console.log(orderHistory[3].shipTo);
