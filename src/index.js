// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecipesProvider } from './context/RecipesContext';
import { FavoritesProvider } from './context/FavoritesContext';

ReactDOM.render(
    <FavoritesProvider>
        <RecipesProvider>
            <App />
        </RecipesProvider>
    </FavoritesProvider>,
    document.getElementById('root')
);