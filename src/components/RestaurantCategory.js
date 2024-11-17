import React, { useState } from "react";

const RestaurantCategory = ({ category }) => {
  if (!category) {
    return null; 
  }

  const { title, itemCards } = category.card?.card || {};
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer p-3 bg-gray-100 hover:bg-gray-200 transition-all"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          {title || "Category Title"}
        </h2>
        <span
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      {isOpen && (
        <ul className="list-disc pl-5 text-gray-600 bg-white p-3">
          {itemCards?.map((item, index) => {
            const { name, price, defaultPrice } = item.card?.info || {};
            const formattedPrice = price || defaultPrice
              ? (price || defaultPrice) / 100
              : "Price not available";

            return (
              <li key={index} className="mb-2">
                {name || "Item Name"} - Rs. {formattedPrice}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
