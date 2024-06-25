// src/components/RecipeCard.jsx

import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isFavorite = favorites.some(fav => fav.id === recipe.id);

    const handleFavorite = () => {
        if (isFavorite) {
            removeFavorite(recipe.id);
        } else {
            addFavorite(recipe);
        }
    };

    return (
        <div className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
            </Link>
            <button onClick={handleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default RecipeCard;