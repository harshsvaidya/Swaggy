import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

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
    <div className="menu">
      <h1>{name || "Restaurant Name"}</h1>
      <h3>Cuisines: {cuisines ? cuisines.join(", ") : "Various Cuisines"}</h3>
      <h3>{costForTwoMessage || "Cost for two not available"}</h3>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item, index) => {
            const price = getPrice(item.card?.info?.price);
            const defaultPrice = getPrice(item.card?.info?.defaultPrice);

            if (price || defaultPrice) {
              return (
                <li key={index}>
                  {item.card?.info?.name} - Rs. {price || "Not available"}
                  {defaultPrice && ` (Default Price: Rs. ${defaultPrice})`}
                </li>
              );
            }
            return null;
          })
        ) : (
          <li>No menu items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
