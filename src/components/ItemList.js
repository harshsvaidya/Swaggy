import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const ItemList = ({ items, onRemoveItem }) => {
  if (!items || items.length === 0) {
    return <p className="text-gray-500">No items in the cart.</p>;
  }

  return (
    <ul className="list-disc pl-5 text-gray-600 mt-4">
      {items.map((item) => {
        const { id, name, price, imageUrl, quantity } = item || {};

        return (
          <li key={id} className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-16 h-16">
                <img
                  src={imageUrl || "/fallback-image.jpg"}
                  alt={name || "Item"}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{name || "Unknown Item"}</p>
                <p className="text-sm text-gray-600">₹{price || 0}</p>
                {quantity && (
                  <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                )}
              </div>
            </div>
            <button
              className="py-2 px-4 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none transition duration-200 transform hover:scale-105"
              onClick={() => onRemoveItem(id)}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
