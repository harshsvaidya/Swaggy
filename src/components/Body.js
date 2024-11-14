import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard'; 
import { CDN_URL } from '../../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredListofRestaurants, setFilteredListofRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for shimmer
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); // Show loading during fetch
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (Array.isArray(restaurants)) {
        setListofRestaurants(restaurants);
        setFilteredListofRestaurants(restaurants);
      } else {
        console.error("No restaurants found in fetched data");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false); // Hide loading after fetch completes
    }
  };

  const handleFilter = () => {
    const filteredRestaurants = listofRestaurants.filter(
      (res) => parseFloat(res.info?.avgRating) > 4.0
    );
    setFilteredListofRestaurants(filteredRestaurants);
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* Search functionality */}
        <div className="search">
          <input
            type="search"
            placeholder="What's on your mind"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);
              if (searchText.trim() === "") {
                setFilteredListofRestaurants(listofRestaurants);
              } else {
                // Otherwise, filter based on the search text
                const filteredRestaurants = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredListofRestaurants(filteredRestaurants);
              }
            }}
          >
            Search
          </button>
        </div>

        {/* Filter Top Rated Restaurants */}
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredListofRestaurants.length > 0 ? (
          filteredListofRestaurants.map((restaurant) => (
            restaurant?.info ? (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                <RestaurantCard
                  resName={restaurant.info.name}
                  cuisines={restaurant.info.cuisines ? restaurant.info.cuisines.join(", ") : "Various"}
                  rating={restaurant.info.avgRating || "N/A"}
                  deliveryTime={restaurant.info.sla?.deliveryTime || "N/A"}
                  logoUrl={`${CDN_URL}${restaurant.info.cloudinaryImageId}`} 
                />
              </Link>
            ) : null 
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
