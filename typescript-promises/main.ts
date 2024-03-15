import { takeAChance } from './take-a-chance.js';
const promise = takeAChance('Nate');
promise
  .then((result) => {
    console.log('Success! You won:', result);
  })
  .catch((error) => {
    console.error('Oops! Something went wrong:', error.message);
  });
