import React from 'react';

const RestaurantCard = ({ resName, cuisines, rating, deliveryTime, logoUrl }) => (
  <div className="res-card" style={{ backgroundColor: "#f0f0f0", padding: "15px", margin: "10px", borderRadius: "10px" }}>
    <img className="res-logo" src={logoUrl} alt="Restaurant Logo" style={{ width: "100%", borderRadius: "10px" }} />
    <h3>{resName || "Restaurant Name"}</h3>
    <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines || "Cuisine Types"}</h4>
    <h4>{rating ? `${rating} stars` : "4.4 stars"}</h4>
    <h4>{deliveryTime ? `${deliveryTime} minutes` : "38 minutes"}</h4>
  </div>
);

export default RestaurantCard;
