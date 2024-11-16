// Header.js
import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus"; 

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const onlineStatus = useOnlineStatus();

    // Let me show you few concepts about useEffect hooks.
    // here there are three cases in useEffect.
    // 1. If no dependency array is provided that means that useEffect is called on every render.
    // 2. If an empty dependency array is provided that means that useEffect is called only once.
    // 3. If a dependency array is provided function like isLogin that means that useEffect is called whenever function is updated.

    // Few things about useState. 

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
                <h3>Quikr</h3>
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "✅":"🔴"}
                    </li>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                    <Link>Cart</Link>
                    </li>                    
                    <button 
                        className="login" 
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Logout" : "Login"}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
