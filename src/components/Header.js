import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex items-center justify-between bg-gray-100 shadow-md px-4 py-2">
            {/* Logo Section */}
            <div className="flex items-center">
                <img className="w-16 h-16 object-contain" src={LOGO_URL} alt="logo" />
                <h3 className="text-lg font-bold text-gray-800 ml-2">Quikr</h3>
            </div>
            
            {/* Navigation Section */}
            <div className="flex items-center space-x-6">
                <ul className="flex items-center space-x-4 text-gray-700">
                    <li className="flex items-center">
                        <span className="font-semibold">Online Status:</span>
                        <span className="ml-1">{onlineStatus ? "✅" : "🔴"}</span>
                    </li>
                    <li>
                        <Link className="hover:text-blue-600" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-600" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-600" to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-600" to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-600" to="/cart">Cart</Link>
                    </li>
                </ul>
                
                {/* Login/Logout Button */}
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Header;