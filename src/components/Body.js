import React, { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { CDN_URL, RESTAURANT_API } from "../utils/constants";
import { mockRestaurants } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredListofRestaurants, setFilteredListofRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Try multiple API endpoints
      const apiEndpoints = [
        // Using your local proxy server
        "http://localhost:5000/api/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        
        // Direct API call
        RESTAURANT_API,
        
        // CORS anywhere proxy
        "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      ];
      
      let data = null;
      let usedEndpoint = '';
      
      for (const endpoint of apiEndpoints) {
        try {
          console.log(`Trying endpoint: ${endpoint}`);
          
          const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.9',
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
            }
          });
          
          if (response.ok) {
            data = await response.json();
            usedEndpoint = endpoint;
            console.log(`Successfully fetched from: ${endpoint}`);
            break;
          }
        } catch (error) {
          console.log(`Failed to fetch from ${endpoint}:`, error.message);
          continue;
        }
      }
      
      if (!data) {
        throw new Error("All API endpoints failed");
      }
      
      console.log("Full API Response:", data);
      console.log("Used endpoint:", usedEndpoint);
      
      // Try multiple possible paths for restaurant data
      let restaurants = null;
      
      // Search through all cards to find restaurants
      if (data?.data?.cards) {
        console.log("Total cards found:", data.data.cards.length);
        
        for (let i = 0; i < data.data.cards.length; i++) {
          const card = data.data.cards[i];
          const cardType = card?.card?.card?.["@type"];
          const cardId = card?.card?.card?.id;
          
          console.log(`Card ${i}: type=${cardType}, id=${cardId}`);
          
          // Look for restaurant grid
          const restaurantList = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
          if (Array.isArray(restaurantList) && restaurantList.length > 0) {
            restaurants = restaurantList;
            console.log(`✅ Found ${restaurantList.length} restaurants in card ${i}`);
            break;
          }
          
          // Also check for restaurant collection
          const restaurantCollection = card?.card?.card?.restaurants;
          if (Array.isArray(restaurantCollection) && restaurantCollection.length > 0) {
            restaurants = restaurantCollection;
            console.log(`✅ Found ${restaurantCollection.length} restaurants in collection at card ${i}`);
            break;
          }
        }
      }

      if (Array.isArray(restaurants) && restaurants.length > 0) {
        console.log("✅ Setting restaurants:", restaurants.length, "items");
        console.log("First restaurant sample:", restaurants[0]);
        setListofRestaurants(restaurants);
        setFilteredListofRestaurants(restaurants);
      } else {
        console.error("❌ No restaurants found in API response");
        console.log("Available data structure:", Object.keys(data || {}));
        
        // Load mock data for development
        console.log("🔄 Loading mock data for development...");
        setListofRestaurants(mockRestaurants);
        setFilteredListofRestaurants(mockRestaurants);
        console.log("🎭 Mock data loaded successfully");
      }
    } catch (error) {
      console.error("❌ All fetch attempts failed:", error);
      
      // Load mock data as final fallback
      console.log("🎭 Loading mock data as fallback...");
      setListofRestaurants(mockRestaurants);
      setFilteredListofRestaurants(mockRestaurants);
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
        <label>UserName:</label>
        <input className="border border-black p-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredListofRestaurants.length > 0 ? (
          filteredListofRestaurants.map((restaurant) =>
            restaurant?.info ? (
              <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                {restaurant.info.promoted ? (
                  <RestaurantCardPromoted
                    resName={restaurant.info.name}
                    cuisines={
                      restaurant.info.cuisines ? restaurant.info.cuisines.join(", ") : "Various"
                    }
                    rating={restaurant.info.avgRating || "N/A"}
                    deliveryTime={restaurant.info.sla?.deliveryTime || "N/A"}
                    logoUrl={`${CDN_URL}${restaurant.info.cloudinaryImageId}`}
                  />
                ) : (
                  <RestaurantCard
                    resName={restaurant.info.name}
                    cuisines={
                      restaurant.info.cuisines ? restaurant.info.cuisines.join(", ") : "Various"
                    }
                    rating={restaurant.info.avgRating || "N/A"}
                    deliveryTime={restaurant.info.sla?.deliveryTime || "N/A"}
                    logoUrl={`${CDN_URL}${restaurant.info.cloudinaryImageId}`}
                  />
                )}
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
