import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext"; // Corrected import path
import { useSelector } from "react-redux"; // Corrected import

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
    const onlineStatus = useOnlineStatus();
    const location = useLocation();
    const { loggedInUser, logoutUser } = useContext(UserContext); // Assuming 'logoutUser' exists
    const cartItems = useSelector((store) => store.cart.items); // Get cart items from Redux store
    console.log(cartItems);

    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode");
        if (savedTheme === "true") {
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("darkMode", !isDarkMode);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const NavigationLink = ({ to, children }) => (
        <li>
            <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to={to}>
                {children}
            </Link>
        </li>
    );

    return (
        <div className={`flex items-center justify-between m-2 mb-2 px-4 py-2 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-orange-100 text-gray-800'}`}>
            <div className="flex items-center">
                <img className="w-16 h-16 object-contain" src={LOGO_URL} alt="logo" />
                <h3 className="text-lg font-bold ml-2">
                    <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/">Quickr</Link>
                </h3>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`focus:outline-none ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
                <ul className="flex items-center space-x-4">
                    <li className="flex items-center">
                        <span className="font-semibold">Online Status:</span>
                        <span className="ml-1">{onlineStatus ? "✅" : "🔴"}</span>
                    </li>
                    <NavigationLink to="/">Home</NavigationLink>
                    <NavigationLink to="/about">About</NavigationLink>
                    <NavigationLink to="/contact">Contact Us</NavigationLink>
                    <NavigationLink to="/grocery">Grocery</NavigationLink>
                    <NavigationLink to="/cart">
                        <span className="font-bold text-xl">Cart - ({cartItems.length} items)</span>
                    </NavigationLink>
                    <li>
                        {loggedInUser ? (
                            <span className="font-semibold">{loggedInUser.name}</span> // Display the logged-in user's name
                        ) : (
                            <span className="font-semibold">Harsh</span>
                        )}
                    </li>
                </ul>

                <button
                    className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 ${isDarkMode ? 'bg-blue-700' : 'bg-blue-500'}`}
                    onClick={() => {
                        if (loggedInUser) {
                            logoutUser(); // Call logoutUser to log out the user
                        } else {
                            // You can add login logic here if needed
                        }
                    }}
                >
                    {loggedInUser ? "Login" : "Logout"}
                </button>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className={`ml-4 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-yellow-500' : 'bg-gray-500'}`}
                >
                    {isDarkMode ? "🌙" : "🌞"}
                </button>
            </div>

            {isMenuOpen && (
                <div className={`lg:hidden absolute top-0 left-0 right-0 ${isDarkMode ? 'bg-gray-900' : 'bg-orange-100'} p-4 shadow-lg space-y-4`}>
                    <ul className="space-y-4 text-center">
                        <NavigationLink to="/">Home</NavigationLink>
                        <NavigationLink to="/about">About</NavigationLink>
                        <NavigationLink to="/contact">Contact Us</NavigationLink>
                        <NavigationLink to="/grocery">Grocery</NavigationLink>
                        <NavigationLink to="/cart">Cart</NavigationLink>
                    </ul>
                    <button
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                        onClick={() => {
                            if (loggedInUser) {
                                logoutUser(); // Log out in the mobile menu as well
                            } else {
                                // Handle login in mobile view if necessary
                            }
                        }}
                    >
                        {loggedInUser ? "Login" : "Logout"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
