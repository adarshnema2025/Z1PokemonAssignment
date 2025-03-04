import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search by name or ID..."
        className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;