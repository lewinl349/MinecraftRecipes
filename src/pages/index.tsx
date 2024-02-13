import Head from 'next/head';
import PokemonGrid from '../components/PokemonGrid';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Pokemon Selector</title>
      </Head>
      
      <div className="container mx-auto py-10">
        {/* Search Bar */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search your Pokemon"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        
        {/* Pokemon Grid */}
        <PokemonGrid />
      </div>
    </div>
  );
};

export default Home;
