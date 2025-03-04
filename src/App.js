// // // App.jsx
// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [pokemonId, setPokemonId] = useState(1);
// //   const [pokemonData, setPokemonData] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   // Fetch Pokémon data when ID changes
// //   useEffect(() => {
// //     fetchPokemon(pokemonId);
// //   }, [pokemonId]);

// //   const fetchPokemon = async (idOrName) => {
// //     try {
// //       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName.toLowerCase()}`);
// //       const data = await response.json();
// //       setPokemonData(data);
// //     } catch (error) {
// //       console.error('Error fetching Pokémon:', error);
// //       setPokemonData(null);
// //     }
// //   };

// //   // Handle search submission
// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     if (searchTerm) {
// //       fetchPokemon(searchTerm);
// //     }
// //   };

// //   // Navigation handlers
// //   const goToPrevious = () => {
// //     if (pokemonId > 1) setPokemonId(pokemonId - 1);
// //   };

// //   const goToNext = () => {
// //     setPokemonId(pokemonId + 1);
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Pokémon Info App</h1>
      
// //       {/* Search Form */}
// //       <form onSubmit={handleSearch}>
// //         <input
// //           type="text"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           placeholder="Enter Pokémon name or ID"
// //         />
// //         <button type="submit">Search</button>
// //       </form>

// //       {/* Pokémon Display */}
// //       {pokemonData ? (
// //         <div className="pokemon-container">
// //           <img
// //             src={pokemonData.sprites.front_default}
// //             alt={pokemonData.name}
// //             className="pokemon-image"
// //           />
// //           <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
          
// //           <div className="types">
// //             <h3>Types:</h3>
// //             {pokemonData.types.map((type) => (
// //               <span key={type.slot} className="type">
// //                 {type.type.name}
// //               </span>
// //             ))}
// //           </div>

// //           <div className="stats">
// //             <h3>Stats:</h3>
// //             {pokemonData.stats.map((stat) => (
// //               <div key={stat.stat.name} className="stat">
// //                 {stat.stat.name}: {stat.base_stat}
// //               </div>
// //             ))}
// //           </div>

// //           {/* Navigation */}
// //           <div className="navigation">
// //             <button onClick={goToPrevious} disabled={pokemonId <= 1}>
// //               Previous
// //             </button>
// //             <span>ID: {pokemonData.id}</span>
// //             <button onClick={goToNext}>Next</button>
// //           </div>
// //         </div>
// //       ) : (
// //         <p>Loading Pokémon data...</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;


// // App.jsx
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [pokemonId, setPokemonId] = useState(1);
//   const [pokemonData, setPokemonData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Fetch Pokémon data when ID changes
//   useEffect(() => {
//     fetchPokemon(pokemonId);
//   }, [pokemonId]);

//   const fetchPokemon = async (idOrName) => {
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName.toLowerCase()}`);
//       if (!response.ok) throw new Error('Pokémon not found');
//       const data = await response.json();
//       setPokemonData(data);
//       setPokemonId(data.id); // Update the ID when searching by name
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error);
//       setPokemonData(null);
//     }
//   };

//   // Handle search submission
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm) {
//       fetchPokemon(searchTerm);
//     }
//   };

//   // Navigation handlers
//   const goToPrevious = () => {
//     if (pokemonData && pokemonData.id > 1) {
//       setPokemonId(pokemonData.id - 1);
//     }
//   };

//   const goToNext = () => {
//     if (pokemonData) {
//       setPokemonId(pokemonData.id + 1);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Pokémon Info App</h1>
      
//       {/* Search Form */}
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Enter Pokémon name or ID"
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Pokémon Display */}
//       {pokemonData ? (
//         <div className="pokemon-container">
//           <img
//             src={pokemonData.sprites.front_default}
//             alt={pokemonData.name}
//             className="pokemon-image"
//           />
//           <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
          
//           <div className="types">
//             <h3>Types:</h3>
//             {pokemonData.types.map((type) => (
//               <span key={type.slot} className="type">
//                 {type.type.name}
//               </span>
//             ))}
//           </div>

//           <div className="stats">
//             <h3>Stats:</h3>
//             {pokemonData.stats.map((stat) => (
//               <div key={stat.stat.name} className="stat">
//                 {stat.stat.name}: {stat.base_stat}
//               </div>
//             ))}
//           </div>

//           {/* Navigation */}
//           <div className="navigation">
//             <button onClick={goToPrevious} disabled={!pokemonData || pokemonData.id <= 1}>
//               Previous
//             </button>
//             <span>ID: {pokemonData.id}</span>
//             <button onClick={goToNext}>Next</button>
//           </div>
//         </div>
//       ) : (
//         <p>{searchTerm ? 'Pokémon not found' : 'Loading Pokémon data...'}</p>
//       )}
//     </div>
//   );
// }

// export default App;




// // App.jsx
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [pokemonId, setPokemonId] = useState(1);
//   const [pokemonData, setPokemonData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState(null);

//   // Fetch Pokémon data when ID changes
//   useEffect(() => {
//     fetchPokemon(pokemonId);
//   }, [pokemonId]);

//   const fetchPokemon = async (idOrName) => {
//     try {
//       setError(null); // Clear previous errors
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName.toLowerCase()}`);
//       if (!response.ok) {
//         throw new Error('Pokémon not found');
//       }
//       const data = await response.json();
//       setPokemonData(data);
//       setPokemonId(data.id); // Sync the ID with the fetched Pokémon
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error);
//       setPokemonData(null);
//       setError(error.message);
//     }
//   };

//   // Handle search submission
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm) {
//       fetchPokemon(searchTerm);
//     }
//   };

//   // Navigation handlers
//   const goToPrevious = () => {
//     if (pokemonData && pokemonData.id > 1) {
//       setPokemonId(pokemonData.id - 1);
//     }
//   };

//   const goToNext = () => {
//     if (pokemonData) {
//       setPokemonId(pokemonData.id + 1);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Pokémon Info App</h1>
      
//       {/* Search Form */}
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Enter Pokémon name or ID"
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Pokémon Display */}
//       {error ? (
//         <p>{error}</p>
//       ) : pokemonData ? (
//         <div className="pokemon-container">
//           <img
//             src={pokemonData.sprites.front_default}
//             alt={pokemonData.name}
//             className="pokemon-image"
//           />
//           <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
          
//           <div className="types">
//             <h3>Types:</h3>
//             {pokemonData.types.map((type) => (
//               <span key={type.slot} className="type">
//                 {type.type.name}
//               </span>
//             ))}
//           </div>

//           <div className="stats">
//             <h3>Stats:</h3>
//             {pokemonData.stats.map((stat) => (
//               <div key={stat.stat.name} className="stat">
//                 {stat.stat.name}: {stat.base_stat}
//               </div>
//             ))}
//           </div>

//           {/* Navigation */}
//           <div className="navigation">
//             <button onClick={goToPrevious} disabled={!pokemonData || pokemonData.id <= 1}>
//               Previous
//             </button>
//             <span>ID: {pokemonData.id}</span>
//             <button onClick={goToNext}>Next</button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading Pokémon data...</p>
//       )}
//     </div>
//   );
// }

// export default App;



// App.jsx
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [pokemonId, setPokemonId] = useState(1);
//   const [pokemonData, setPokemonData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch Pokémon data when ID changes
//   useEffect(() => {
//     fetchPokemon(pokemonId);
//   }, [pokemonId]);

//   const fetchPokemon = async (idOrName) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName.toLowerCase()}`);
//       if (!response.ok) {
//         throw new Error('Pokémon not found');
//       }
//       const data = await response.json();
//       setPokemonData(data);
//       // Only update pokemonId if searching by name, not for navigation
//       if (isNaN(idOrName)) {
//         setPokemonId(data.id);
//       }
//     } catch (error) {
//       console.error('Error fetching Pokémon:', error);
//       setPokemonData(null);
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle search submission
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm) {
//       fetchPokemon(searchTerm);
//     }
//   };

//   // Navigation handlers
//   const goToPrevious = () => {
//     if (pokemonId > 1) {
//       setPokemonId(prevId => prevId - 1);
//     }
//   };

//   const goToNext = () => {
//     setPokemonId(prevId => prevId + 1);
//   };

//   return (
//     <div className="App">
//       <h1>Pokémon Info App</h1>
      
//       {/* Search Form */}
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Enter Pokémon name or ID"
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Pokémon Display */}
//       {isLoading ? (
//         <p>Loading Pokémon data...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : pokemonData ? (
//         <div className="pokemon-container">
//           <img
//             src={pokemonData.sprites.front_default}
//             alt={pokemonData.name}
//             className="pokemon-image"
//           />
//           <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
          
//           <div className="types">
//             <h3>Types:</h3>
//             {pokemonData.types.map((type) => (
//               <span key={type.slot} className="type">
//                 {type.type.name}
//               </span>
//             ))}
//           </div>

//           <div className="stats">
//             <h3>Stats:</h3>
//             {pokemonData.stats.map((stat) => (
//               <div key={stat.stat.name} className="stat">
//                 {stat.stat.name}: {stat.base_stat}
//               </div>
//             ))}
//           </div>

//           {/* Navigation */}
//           <div className="navigation">
//             <button onClick={goToPrevious} disabled={pokemonId <= 1}>
//               Previous
//             </button>
//             <span>ID: {pokemonId}</span>
//             <button onClick={goToNext}>Next</button>
//           </div>
//         </div>
//       ) : (
//         <p>No Pokémon data available</p>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import SearchForm from './components/SearchForm';
// import PokemonCard from './components/PokemonCard';
// import Navigation from './components/Navigation';
// import { fetchPokemon } from './services/pokemonService';

// function App() {
//   const [pokemon, setPokemon] = useState(null);
//   const [pokemonId, setPokemonId] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadPokemon = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchPokemon(pokemonId);
//         setPokemon(data);
//         setPokemonId(data.id);
//       } catch (err) {
//         setError('Pokémon not found. Please try another name or ID.');
//         console.error('Error loading Pokémon:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadPokemon();
//   }, [pokemonId]);

//   const handleSearch = async (query) => {
//     if (!query.trim()) return;
    
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await fetchPokemon(query);
//       setPokemon(data);
//       setPokemonId(data.id);
//     } catch (err) {
//       setError('Pokémon not found. Please try another name or ID.');
//       console.error('Error searching Pokémon:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const navigatePokemon = (direction) => {
//     const newId = direction === 'next' ? pokemonId + 1 : Math.max(1, pokemonId - 1);
//     setPokemonId(newId);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">Pokémon Info App</h1>
      
//       <SearchForm onSearch={handleSearch} />
      
//       {loading ? (
//         <div className="text-center py-10">Loading...</div>
//       ) : error ? (
//         <div className="text-center text-red-500 py-10">{error}</div>
//       ) : pokemon && (
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <Navigation 
//             pokemonId={pokemonId} 
//             onNavigate={navigatePokemon} 
//           />
          
//           <PokemonCard pokemon={pokemon} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import PokemonCard from './components/PokemonCard';
import Navigation from './components/Navigation';
import { fetchPokemon } from './services/pokemonService';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonId, setPokemonId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPokemon(pokemonId);
        setPokemon(data);
        setPokemonId(data.id);
      } catch (err) {
        setError('Pokémon not found. Please try another name or ID.');
        console.error('Error loading Pokémon:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [pokemonId]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPokemon(query);
      setPokemon(data);
      setPokemonId(data.id);
    } catch (err) {
      setError('Pokémon not found. Please try another name or ID.');
      console.error('Error searching Pokémon:', err);
    } finally {
      setLoading(false);
    }
  };

  const navigatePokemon = (direction) => {
    const newId = direction === 'next' ? pokemonId + 1 : Math.max(1, pokemonId - 1);
    setPokemonId(newId);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Pokémon Info App</h1>
      
      <div className="search-wrapper">
        <SearchForm onSearch={handleSearch} />
      </div>
      
      <div className="content-wrapper">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : pokemon && (
          <div className="pokemon-card-wrapper">
            <Navigation 
              pokemonId={pokemonId} 
              onNavigate={navigatePokemon} 
            />
            <PokemonCard pokemon={pokemon} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;