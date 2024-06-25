// src/components/SearchBar.jsx

import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
    const [input, setInput] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(input);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for recipes..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;