import React from 'react';
import { getTypeColor } from '../utils/helpers';

const PokemonTypes = ({ types }) => {
  return (
    <div className="flex gap-2 mt-2">
      {types.map(({ type }) => (
        <span 
          key={type.name} 
          className={`${getTypeColor(type.name)} text-white px-3 py-1 rounded-full capitalize text-sm`}
        >
          {type.name}
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;