import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const CDN_URL = "https://image.cdn.swiggy.com/"; // Base CDN URL for images

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info || {};
  const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const getPrice = (price) => {
    if (price && !isNaN(price)) {
      return (price / 100).toFixed(2);
    }
    return null;
  };

  const toggleCategory = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      {/* Restaurant Info */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name || "Restaurant Name"}</h1>
        <h3 className="text-lg text-gray-600 mb-1">
          Cuisines: {cuisines ? cuisines.join(", ") : "Various Cuisines"}
        </h3>
        <h3 className="text-lg text-gray-600">{costForTwoMessage || "Cost for two not available"}</h3>
      </div>

      {/* Categories */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Categories</h2>
        {categories.length > 0 ? (
          categories.map((category, index) => {
            const isOpen = openCategoryIndex === index;
            const { title, itemCards } = category.card?.card || {};
            const totalItems = itemCards?.length || 0;

            return (
              <div key={index} className="mb-6 border-b pb-4">
                {/* Category Title */}
                <div
                  className="flex justify-between items-center cursor-pointer bg-gray-100 hover:bg-gray-200 p-4 rounded-md shadow-sm"
                  onClick={() => toggleCategory(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {title || "Category Title"} ({totalItems})
                  </h3>
                  <span
                    className={`transition-transform transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ⬇️
                  </span>
                </div>

                {/* Item List */}
                {isOpen && (
                  <ul className="list-disc pl-5 text-gray-600 mt-4">
                    {itemCards?.map((item, itemIndex) => {
                      const { name, price, defaultPrice } = item.card?.info || {};
                      const formattedPrice = price || defaultPrice
                        ? (price || defaultPrice) / 100
                        : "Price not available";

                      return (
                        <li key={itemIndex} className="mb-6 flex items-center justify-between">
                          {/* Food Item Content */}
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md"></div> {/* Placeholder for image */}
                            <div>
                              <p className="font-medium text-gray-800">{name || "Item Name"}</p>
                              <p className="text-sm text-gray-600">₹{formattedPrice}</p>
                            </div>
                          </div>

                          {/* Add Button */}
                          <button className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none transition duration-200 transform hover:scale-105">
                            Add +
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No categories available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
