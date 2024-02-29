import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import BulbasaurGif from '../assets/bulbasaur.gif';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

const PokemonGrid: React.FC = () => {
  const pokemons: Pokemon[] = [
    { id: 1, name: 'Bulbasaur', types: ['Grass', 'Poison']},
    // ... more pokemon
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            {/* Use the Image component for optimized image rendering */}
            <Image src={BulbasaurGif} alt={pokemon.name} width={150} height={150} className="rounded-xl" />
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
