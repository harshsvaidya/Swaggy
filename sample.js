import React from "react";
import ReactDOM from "react-dom/client";

// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logowik.com/content/uploads/images/free-food-delivery6258.logowik.com.webp"
          alt="logo"
        />
        <h3>Quikr</h3>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// RestaurantCard component
const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={props.logoUrl} alt="res-logo" />
      <h3>{props.resName || "Restaurant Name"}</h3>
      <h4>{props.cuisines ? props.cuisines.join(", ") : "Cuisine Types"}</h4>
      <h4>{props.rating || "4.4"} stars</h4>
      <h4>{props.deliveryTime || "38"} minutes</h4>
    </div>
  );
};

// Body component
const Body = () => {
  const resObj = [
    // Example data of restaurants with a unique '_id' for each restaurant
    {
      _id: "1",
      info: {
        name: "Restaurant A",
        cuisines: ["Italian", "Chinese"],
        avgRating: 4.5,
        costForTwo: 500,
        sla: { deliveryTime: 30 },
        cloudinaryImageId: "imageid123"
      }
    },
    {
      _id: "2",
      info: {
        name: "Restaurant B",
        cuisines: ["Indian", "Mexican"],
        avgRating: 4.2,
        costForTwo: 400,
        sla: { deliveryTime: 40 },
        cloudinaryImageId: "imageid456"
      }
    },
    // Add more restaurant objects as needed...
  ];

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id} // Using unique _id here
            resName={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            rating={restaurant.info.avgRating}
            costForTwo={restaurant.info.costForTwo}
            deliveryTime={restaurant.info.sla.deliveryTime}
            logoUrl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main App Layout component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Render the app to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
