import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCard from "./RestaurantCard";  

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info || {};
  const itemCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards || [];

  const getPrice = (price) => {
    if (price && !isNaN(price)) {
      return (price / 100).toFixed(2); 
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name || "Restaurant Name"}</h1>
        <h3 className="text-lg text-gray-600 mb-1">
          Cuisines: {cuisines ? cuisines.join(", ") : "Various Cuisines"}
        </h3>
        <h3 className="text-lg text-gray-600">{costForTwoMessage || "Cost for two not available"}</h3>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {itemCards.length > 0 ? (
            itemCards.map((item, index) => {
              const price = getPrice(item.card?.info?.price);
              const defaultPrice = getPrice(item.card?.info?.defaultPrice);

              if (price || defaultPrice) {
                return (
                  <RestaurantCard
                    key={index}
                    resName={item.card?.info?.name}
                    cuisines={item.card?.info?.cuisine || []}
                    rating={item.card?.info?.avgRating}
                    deliveryTime={item.card?.info?.deliveryTime}
                    logoUrl={item.card?.info?.cloudinaryImageId} 
                    price={price || defaultPrice}  
                  />
                );
              }
              return null;
            })
          ) : (
            <p className="text-center text-gray-500 col-span-4">No menu items available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
