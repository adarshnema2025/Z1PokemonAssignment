import React from 'react';
import { getStatColor } from '../utils/helpers';

const PokemonStats = ({ stats }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Base Stats</h3>
      <div className="space-y-3">
        {stats.map(stat => (
          <div key={stat.stat.name} className="grid grid-cols-8 gap-2 items-center">
            <div className="col-span-2 text-sm font-medium capitalize">
              {stat.stat.name.replace('-', ' ')}
            </div>
            <div className="col-span-1 text-right font-mono">{stat.base_stat}</div>
            <div className="col-span-5 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getStatColor(stat.base_stat)}`} 
                style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;