// Header.js
import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    console.log("Header rendered")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
                <h3>Quikr</h3>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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
