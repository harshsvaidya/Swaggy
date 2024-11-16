import React from "react";

const RestaurantCard = ({ resName, cuisines, rating, deliveryTime, logoUrl, price }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 m-4 w-64">
    {logoUrl && (
      <img
        className="w-full h-40 object-cover rounded-md"
        src={logoUrl}
        alt="Restaurant Logo"
      />
    )}
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800 truncate">{resName || "Restaurant Name"}</h3>
      <p className="text-sm text-gray-600 truncate">
        {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines || "Cuisine Types"}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-yellow-600 font-medium">{rating ? `${rating} ⭐` : "4.4 ⭐"}</span>
        <span className="text-sm text-gray-500">{deliveryTime ? `${deliveryTime} min` : "38 min"}</span>
      </div>

      {/* Display Cost for Each Food Item */}
      {price && (
        <div className="mt-2">
          <p className="text-sm text-gray-800 font-semibold">Price: ₹{price}</p>
        </div>
      )}
    </div>
  </div>
);

export default RestaurantCard;
