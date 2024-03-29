import React from 'react';
type Prop = {
  pokedex: { number: string; name: string }[];
};

export function PokemonList({ pokedex }: Prop) {
  const pokemon = pokedex.map((pokemon) => <li>{pokemon.name}</li>);
  console.log(pokemon);
  return <ul>{pokemon}</ul>;
}
