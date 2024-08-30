import React from "react";

function FoodCard({ image, title, category, rating, price }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{category}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-lg font-semibold">${price}</span>
        </div>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full hover:bg-green-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
