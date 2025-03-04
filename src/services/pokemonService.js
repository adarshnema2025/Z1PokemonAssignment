const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemon = async (identifier) => {
  // Convert input to lowercase for API compatibility if it's a string
  const query = typeof identifier === 'string' ? identifier.toLowerCase() : identifier;
  
  const response = await fetch(`${API_BASE_URL}/pokemon/${query}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon: ${response.status}`);
  }
  
  return response.json();
};

// Additional service functions can be added here as the app grows
// For example, fetchPokemonSpecies, fetchEvolutionChain, etc.