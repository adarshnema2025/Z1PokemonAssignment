// import React from 'react';
// import { formatPokemonId } from '../utils/helpers';

// const Navigation = ({ pokemonId, onNavigate }) => {
//   return (
//     <div className="flex justify-between bg-gray-200 p-2">
//       <button 
//         onClick={() => onNavigate('prev')} 
//         disabled={pokemonId <= 1}
//         className="px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
//       >
//         ← Previous
//       </button>
//       <span className="font-mono text-lg font-semibold">{formatPokemonId(pokemonId)}</span>
//       <button 
//         onClick={() => onNavigate('next')} 
//         className="px-4 py-1 bg-blue-500 text-white rounded"
//       >
//         Next →
//       </button>
//     </div>
//   );
// };

// export default Navigation;


import React from 'react';
import { formatPokemonId } from '../utils/helpers';

const Navigation = ({ pokemonId, onNavigate }) => {
  return (
    <div className="navigation">
      <button 
        onClick={() => onNavigate('prev')} 
        disabled={pokemonId <= 1}
      >
        ← Previous
      </button>
      <span>{formatPokemonId(pokemonId)}</span>
      <button 
        onClick={() => onNavigate('next')}
      >
        Next →
      </button>
    </div>
  );
};

export default Navigation;