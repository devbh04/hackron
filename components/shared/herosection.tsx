"use client";

import { useState } from "react";
import { Chart } from "./linechart";

const HeroSection = () => {
  const [customPrice, setCustomPrice] = useState("");
  const [displayPrice, setDisplayPrice] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setDisplayPrice(customPrice);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-10">
      <div className="grid grid-cols-3 gap-8">
        {/* First Grid: Label as Past Price */}
        <div className="col-span-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Past Price</p>
          <p className="text-2xl font-bold text-black text-center">₹120</p>
        </div>

        {/* Second Grid: Suggested Price */}
        <div className="col-span-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Suggested Price</p>
          <p className="text-2xl font-bold text-black text-center">₹140</p>
        </div>

        {/* Third Grid: Customizable Price Change Option */}
        <div className="col-span-1 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-xl text-gray-700 text-center">Your Price</p>
          {displayPrice && <p className="text-2xl font-bold text-black text-center">₹{displayPrice}</p>}
          <input
            type="number"
            className="w-full p-3 mt-4 border-2 border-gray-400 rounded text-black focus:outline-none focus:border-green-500"
            placeholder="Enter your price"
            value={customPrice}
            onChange={(e) => setCustomPrice(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      {/* Long Horizontal Grid: Product Description */}
      <div className="col-span-3 mt-10 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
        <p className="text-xl text-gray-700 text-center">Product Description</p>
        <p className="text-2xl text-black text-center">High-quality refined sugar suitable for all your cooking needs.</p>
      </div>

      {/* Chart Section */}
      <div className="col-span-3 mt-10 p-6 border-2 border-gray-400 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
        <p className="text-xl text-gray-700 text-center mb-4">Price Trend</p>
        <div className="w-full  h-max"> {/* Reduced height for the chart */}
          <Chart /> {/* Chart component without dummy data */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;