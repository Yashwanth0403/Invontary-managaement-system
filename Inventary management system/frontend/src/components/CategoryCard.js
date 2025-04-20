import React from 'react';

const CategoryCard = ({ category, onDelete }) => {
    const handleDelete = () => {
        onDelete(category.id); // Call the onDelete function passed from parent component
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Category: {category.name}</h2>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2">
                Delete
            </button>
        </div>
    );
};

export default CategoryCard;
