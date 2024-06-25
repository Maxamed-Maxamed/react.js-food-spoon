// src/api/spoonacular.js
const BASE_URL = "https://api.spoonacular.com";
const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export const fetchRecipes = async (query) => {
    const response = await fetch(`${BASE_URL}/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
};


export const fetchRecipeDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
};