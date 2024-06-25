// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/spoonacular';
import RecipeCard from '../components/RecipeCard';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            const data = await fetchRecipes('pasta');
            setRecipes(data.results);
        };
        getRecipes();
    }, []);

    return (
        <div className="home-page">
            <h1>Food Recipes</h1>
            <div className="recipes-list">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;