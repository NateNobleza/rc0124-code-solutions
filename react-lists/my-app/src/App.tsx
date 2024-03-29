import { PokemonList } from './PokemonList';
import './App.css';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

export function App() {
  return (
    <>
      <h1>Pokemon List</h1>
      <PokemonList pokedex={pokedex} />
    </>
  );
}
