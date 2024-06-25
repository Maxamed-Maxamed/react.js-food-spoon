// src/hooks/useFetchRecipes.js

import { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/spoonacular';

const useFetchRecipes = (query) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            const data = await fetchRecipes(query);
            setRecipes(data.results);
        };
        getRecipes();
    }, [query]);

    return recipes;
};

export default useFetchRecipes;