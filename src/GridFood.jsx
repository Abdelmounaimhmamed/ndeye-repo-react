import React from "react";
import FoodCard from "./FoodCard";

function FoodGrid() {
  const foods = [
    {
      image: "https://source.unsplash.com/400x300/?pizza",
      title: "Margherita Pizza",
      category: "Italian",
      rating: 4.5,
      price: 12.99,
    },
    {
      image: "https://source.unsplash.com/400x300/?sushi",
      title: "Sushi Platter",
      category: "Japanese",
      rating: 4.8,
      price: 22.49,
    },
    {
      image: "https://source.unsplash.com/400x300/?burger",
      title: "Cheeseburger",
      category: "American",
      rating: 4.2,
      price: 9.99,
    },
    {
      image: "https://source.unsplash.com/400x300/?pasta",
      title: "Spaghetti Bolognese",
      category: "Italian",
      rating: 4.7,
      price: 14.49,
    },
    {
      image: "https://source.unsplash.com/400x300/?salad",
      title: "Caesar Salad",
      category: "Healthy",
      rating: 4.6,
      price: 8.99,
    },
    {
      image: "https://source.unsplash.com/400x300/?steak",
      title: "Grilled Steak",
      category: "American",
      rating: 4.9,
      price: 24.99,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {foods.map((food, index) => (
          <FoodCard
            key={index}
            image={food.image}
            title={food.title}
            category={food.category}
            rating={food.rating}
            price={food.price}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodGrid;
