'use strict';
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('Error', error);
  }
}
async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
fetchPokemon();
