import { useState } from "react";
//import FoodFireLogo from "../../Images/Food Fire Logo.png";
import { Link } from "react-router-dom";

//SPA- Single page Application
//here we will use client side routing 


const Title = () => (
    <a href="/">
      <img className="logo" src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/tz3u8sc0vyqzofdktkl0" alt="Food Fire Logo" />
    </a>
  );
  
  // Header component for header section: Logo, Nav Items
  const Header = () => {
    //using usestate for user logged in or loged out
    const [isLoggedin,setIsLoggedin] = useState(true);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
              <li className="button-Home "> <Link to ="/"> Home </Link> </li>
              <li className="button-about "> <Link to ="/about"> About </Link> </li>
              <li className="button-Contact"> <Link to ="/contact"> Contact </Link> </li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;