// src/pages/RecipeDetailsPage.jsx

import React, { useState, useEffect } from 'react';
import { fetchRecipeDetails } from '../api/spoonacular';
import { useParams } from 'react-router-dom';

const RecipeDetailsPage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const getRecipeDetails = async () => {
            const data = await fetchRecipeDetails(id);
            setRecipe(data);
        };
        getRecipeDetails();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="recipe-details">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.instructions}</p>
            <ul>
                {recipe.extendedIngredients.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeDetailsPage;