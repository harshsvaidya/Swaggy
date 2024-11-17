import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
    const onlineStatus = useOnlineStatus();
    const location = useLocation();

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

    return (
        <div className={`flex items-center justify-between m-2 mb-2 px-4 py-2 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-orange-100 text-gray-800'}`}>
            <div className="flex items-center">
                <img className="w-16 h-16 object-contain" src={LOGO_URL} alt="logo" />
                <h3 className="text-lg font-bold ml-2">
                    <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/">Quickr</Link>
                </h3>
            </div>

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

            <div className="hidden lg:flex items-center space-x-6">
                <ul className="flex items-center space-x-4">
                    <li className="flex items-center">
                        <span className="font-semibold">Online Status:</span>
                        <span className="ml-1">{onlineStatus ? "✅" : "🔴"}</span>
                    </li>
                    <li>
                        <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/cart">Cart</Link>
                    </li>
                </ul>

                <button
                    className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 ${isDarkMode ? 'bg-blue-700' : 'bg-blue-500'}`}
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Logout" : "Login"}
                </button>

                <button
                    onClick={toggleDarkMode}
                    className={`ml-4 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-yellow-500' : 'bg-gray-500'}`}
                >
                    {isDarkMode ? "🌙" : "🌞"} 
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className={`lg:hidden absolute top-0 left-0 right-0 ${isDarkMode ? 'bg-gray-900' : 'bg-orange-100'} p-4 shadow-lg space-y-4`}>
                    <ul className="space-y-4 text-center">
                        <li>
                            <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/grocery">Grocery</Link>
                        </li>
                        <li>
                            <Link className={`hover:text-blue-600 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} to="/cart">Cart</Link>
                        </li>
                    </ul>
                    <button
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Logout" : "Login"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
