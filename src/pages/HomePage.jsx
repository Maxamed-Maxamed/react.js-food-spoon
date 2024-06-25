// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/spoonacular';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState(); // Default search query

    useEffect(() => {
        const getRecipes = async () => {
            const data = await fetchRecipes(query);
            setRecipes(data.results);
        };
        getRecipes();
    }, [query]);

    return (
        <div className="home-page">
            <h1>Food Recipes</h1>
            <SearchBar setQuery={setQuery} />
            <div className="recipes-list">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;