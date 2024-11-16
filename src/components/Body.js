import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { CDN_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredListofRestaurants, setFilteredListofRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); 
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
      setLoading(false); 
    }
  };

  const handleFilter = () => {
    const filteredRestaurants = listofRestaurants.filter(
      (res) => parseFloat(res.info?.avgRating) > 4.5
    );
    setFilteredListofRestaurants(filteredRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1 className="text-center text-xl text-red-500">Looks like you are offline! Please check your internet</h1>;
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              if (searchText.trim() === "") {
                setFilteredListofRestaurants(listofRestaurants);
              } else {
                const filteredRestaurants = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredListofRestaurants(filteredRestaurants);
              }
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>

        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredListofRestaurants.length > 0 ? (
          filteredListofRestaurants.map((restaurant) =>
            restaurant?.info ? (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                <RestaurantCard
                  resName={restaurant.info.name}
                  cuisines={
                    restaurant.info.cuisines ? restaurant.info.cuisines.join(", ") : "Various"
                  }
                  rating={restaurant.info.avgRating || "N/A"}
                  deliveryTime={restaurant.info.sla?.deliveryTime || "N/A"}
                  logoUrl={`${CDN_URL}${restaurant.info.cloudinaryImageId}`}
                />
              </Link>
            ) : null
          )
        ) : (
          <p className="col-span-full text-center text-gray-500">No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
