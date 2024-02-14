import React from 'react';
import BulbasaurGif from '../assets/bulbasaur.gif'; // Import the image

interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

const PokemonGrid: React.FC = () => {
  const pokemons: Pokemon[] = [
    { id: 1, name: 'Bulbasaur', types: ['Grass', 'Poison'] },
    // ... more pokemon
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={BulbasaurGif} alt={pokemon.name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{pokemon.name}</h2>
            <div className="card-actions">
              {pokemon.types.map((type, index) => (
                <div key={index} className={`badge badge-${type.toLowerCase()} capitalize`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonGrid;
