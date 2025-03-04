// import React from 'react';
// import PokemonTypes from './PokemonTypes';
// import PokemonStats from './PokemonStats';

// const PokemonCard = ({ pokemon }) => {
//   return (
//     <div className="p-6">
//       <div className="flex flex-col items-center mb-6">
//         {/* Pokemon image */}
//         <div className="w-48 h-48 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
//           {pokemon.sprites.other["official-artwork"].front_default ? (
//             <img 
//               src={pokemon.sprites.other["official-artwork"].front_default} 
//               alt={pokemon.name} 
//               className="w-40 h-40 object-contain"
//             />
//           ) : (
//             <img 
//               src={pokemon.sprites.front_default} 
//               alt={pokemon.name} 
//               className="w-32 h-32 object-contain"
//             />
//           )}
//         </div>
        
//         {/* Pokemon name */}
//         <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
        
//         {/* Pokemon types */}
//         <PokemonTypes types={pokemon.types} />
//       </div>
      
//       {/* Pokemon stats */}
//       <PokemonStats stats={pokemon.stats} />
      
//       {/* Additional details */}
//       <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
//         <div>
//           <p><span className="font-semibold">Height:</span> {pokemon.height / 10} m</p>
//           <p><span className="font-semibold">Weight:</span> {pokemon.weight / 10} kg</p>
//         </div>
//         <div>
//           <p>
//             <span className="font-semibold">Abilities:</span>{' '}
//             {pokemon.abilities.map(a => a.ability.name).join(', ')}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PokemonCard;



import React from 'react';
import PokemonTypes from './PokemonTypes';
import PokemonStats from './PokemonStats';

const PokemonCard = ({ pokemon }) => {
  // Function to capitalize the first letter of each word in the name
  const capitalizeName = (name) => {
    return name
      .split('-') // Handle hyphenated names like "pikachu-25"
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  return (
    <div className="p-6">
      <div className="flex flex-col items-center mb-6">
        {/* Pokemon image */}
        <div className="w-48 h-48 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
          {pokemon.sprites.other["official-artwork"].front_default ? (
            <img 
              src={pokemon.sprites.other["official-artwork"].front_default} 
              alt={pokemon.name} 
              className="w-40 h-40 object-contain"
            />
          ) : (
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
              className="w-32 h-32 object-contain"
            />
          )}
        </div>
        
        {/* Pokemon name - Capitalized */}
        <h2 className="text-2xl font-bold">{capitalizeName(pokemon.name)}</h2>
        
        {/* Pokemon types */}
        <PokemonTypes types={pokemon.types} />
      </div>
      
      {/* Pokemon stats */}
      <PokemonStats stats={pokemon.stats} />
      
      {/* Additional details */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p><span className="font-semibold">Height:</span> {pokemon.height / 10} m</p>
          <p><span className="font-semibold">Weight:</span> {pokemon.weight / 10} kg</p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Abilities:</span>{' '}
            {pokemon.abilities.map(a => a.ability.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;