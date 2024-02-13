import React from 'react';

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="card shadow-lg compact side bg-base-100">
          <div className="flex-row items-center space-x-4 card-body">
            <div>
              <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                  {/* Pokemon Image */}
                </div>
              </div>
            </div>
            <div>
              <h2 className="card-title">{pokemon.name}</h2>
              <p className="text-base-content text-opacity-40">{pokemon.types.join(' · ')}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonGrid;
