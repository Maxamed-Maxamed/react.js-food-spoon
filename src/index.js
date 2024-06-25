// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecipesProvider } from './context/RecipesContext';

ReactDOM.render(
    <RecipesProvider>
        <App />
    </RecipesProvider>,
    document.getElementById('root')
);