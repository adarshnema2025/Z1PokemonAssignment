// Format Pokémon ID with leading zeros (e.g., #001)
export const formatPokemonId = (id) => {
    return `#${id.toString().padStart(3, '0')}`;
  };
  
  // Get appropriate background color class for Pokémon type
  export const getTypeColor = (type) => {
    const typeColors = {
      normal: 'bg-gray-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-blue-200',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-700',
      flying: 'bg-indigo-300',
      psychic: 'bg-pink-500',
      bug: 'bg-green-400',
      rock: 'bg-yellow-600',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-700',
      dark: 'bg-gray-700',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-300'
    };
    
    return typeColors[type] || 'bg-gray-400';
  };
  
  // Get stat bar color based on stat value
  export const getStatColor = (statValue) => {
    if (statValue < 50) return 'bg-red-500';
    if (statValue < 80) return 'bg-yellow-500';
    if (statValue < 100) return 'bg-green-500';
    return 'bg-blue-500';
  };