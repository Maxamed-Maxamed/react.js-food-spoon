// src/components/Pagination.jsx

import React from 'react';

const Pagination = ({ totalResults, setOffset }) => {
    const totalPages = Math.ceil(totalResults / 10);
    const handlePageChange = (page) => {
        setOffset((page - 1) * 10);
    };

    return (
        <div className="pagination">
            {[...Array(totalPages).keys()].map(page => (
                <button key={page} onClick={() => handlePageChange(page + 1)}>
                    {page + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;