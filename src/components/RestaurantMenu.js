import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data); 
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info || {};
  const itemCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards || [];

  // Safe price handler
  const getPrice = (price) => {
    if (price && !isNaN(price)) {
      return (price / 100).toFixed(2);
    }
    return null; 
  };

  return (
    <div className="menu">
      <h1>{name || "Restaurant Name"}</h1>
      <h3>Cuisines: {cuisines ? cuisines.join(', ') : "Various Cuisines"}</h3>
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
