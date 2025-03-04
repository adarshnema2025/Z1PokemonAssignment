// import React from 'react';
// import { getStatColor } from '../utils/helpers';

// const PokemonStats = ({ stats }) => {
//   return (
//     <div className="mt-6">
//       <h3 className="text-xl font-semibold mb-3">Base Stats</h3>
//       <div className="space-y-3">
//         {stats.map(stat => (
//           <div key={stat.stat.name} className="grid grid-cols-8 gap-2 items-center">
//             <div className="col-span-2 text-sm font-medium capitalize">
//               {stat.stat.name.replace('-', ' ')}
//             </div>
//             <div className="col-span-1 text-right font-mono">{stat.base_stat}</div>
//             <div className="col-span-5 h-4 bg-gray-200 rounded-full overflow-hidden">
//               <div 
//                 className={`h-full ${getStatColor(stat.base_stat)}`} 
//                 style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PokemonStats;


import React from 'react';
import { getStatColor } from '../utils/helpers';

const PokemonStats = ({ stats }) => {
  // Function to capitalize the first letter of the stat name
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div style={{ marginTop: '24px' }}>
      <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>Base Stats</h3>
      <div style={{ marginBottom: '12px' }}>
        {stats.map(stat => (
          <div 
            key={stat.stat.name} 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '3fr 5fr', 
              gap: '8px', 
              alignItems: 'center', 
              marginBottom: '12px' 
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: '500' }}>
              {capitalizeFirstLetter(stat.stat.name.replace('-', ' '))}-{stat.base_stat}
            </div>
            <div style={{ height: '16px', backgroundColor: '#e0e0e0', borderRadius: '9999px', overflow: 'hidden' }}>
              <div 
                style={{ 
                  height: '100%', 
                  backgroundColor: getStatColor(stat.base_stat).replace('bg-', '#'), // Convert class to color
                  width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` 
                }} 
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;