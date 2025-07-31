import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../utils/cartSlice";

const ItemList = ({ items, onRemoveItem }) => {
  const dispatch = useDispatch();

  if (!items || items.length === 0) {
    return <p className="text-gray-500">No items in the cart.</p>;
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveItem(id);
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const { id, name, price, imageUrl, quantity } = item || {};

        return (
          <div key={id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-20 h-20">
                  <img
                    src={imageUrl || "/kitten-404.jpg"}
                    alt={name || "Item"}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = "/kitten-404.jpg";
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-800 text-lg">{name || "Unknown Item"}</h3>
                  <p className="text-gray-600">₹{price || 0} each</p>
                  <p className="text-sm text-green-600 font-semibold">
                    Total: ₹{((price || 0) * (quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(id, quantity - 1)}
                    className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition duration-200 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold">{quantity || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(id, quantity + 1)}
                    className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition duration-200 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                
                {/* Remove Button */}
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none transition duration-200"
                  onClick={() => onRemoveItem(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
