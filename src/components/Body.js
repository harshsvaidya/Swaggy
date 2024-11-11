import React, { useState, useEffect } from 'react';
import RestaurantCard from './ResturantCard'; 
import { CDN_URL } from '../../utils/constants';
import Shimmer from './Shimmer';

const Body = () => {
  const [listofResturants, setListofResturants] = useState([]);
  const [filteredListofResturants, setFilteredListofResturants] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true at the beginning of data fetching
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants && Array.isArray(restaurants)) {
        setListofResturants(restaurants);
        setFilteredListofResturants(restaurants);
      } else {
        console.error("No restaurants found in fetched data");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false); // Set loading to false once data fetching is complete
    }
  };

  const handleFilter = () => {
    const filteredRestaurants = listofResturants.filter(
      (res) => parseFloat(res.info?.avgRating) > 4.0
    );
    setFilteredListofResturants(filteredRestaurants);
  };

  if (loading) {
    // Display the Shimmer component while loading is true
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListofResturants.length > 0 ? (
          filteredListofResturants.map((restaurant) => (
            restaurant.info && (
              <RestaurantCard
                key={restaurant.info.id} 
                resName={restaurant.info.name}
                cuisines={restaurant.info.cuisines ? restaurant.info.cuisines.join(", ") : "Various"}
                rating={restaurant.info.avgRating || "N/A"}
                deliveryTime={restaurant.info.sla?.deliveryTime || "N/A"}
                logoUrl={`${CDN_URL}${restaurant.info.cloudinaryImageId}`} 
              />
            )
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
