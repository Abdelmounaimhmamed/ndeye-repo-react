import React from "react";

function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?food')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Delicious Food Awaits</h1>
        <p className="text-white text-lg md:text-2xl mb-8">Experience the best food from the comfort of your home.</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;