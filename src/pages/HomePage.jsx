// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/spoonacular';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('pasta'); // Default search query
    const [offset, setOffset] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRecipes = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchRecipes(query, offset);
                setRecipes(data.results);
                setTotalResults(data.totalResults);
            } catch (err) {
                setError('Failed to fetch recipes');
            }
            setLoading(false);
        };
        getRecipes();
    }, [query, offset]);

    return (
        <div className="home-page">
            <h1>Food Recipes</h1>
            <SearchBar setQuery={setQuery} />
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div className="recipes-list">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
            <Pagination totalResults={totalResults} setOffset={setOffset} />
        </div>
    );
};

export default HomePage;