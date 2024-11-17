import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
    fetchData();
    }, [resId]); 

    const fetchData = async () => {
    try {
    const response = await fetch(`${MENU_API}${resId}`);
    const json = await response.json();
    setResInfo(json.data);
    } catch (error) {
    console.error("Error fetching restaurant menu:", error);
    }
};

return resInfo;
};

export default useRestaurantMenu;
