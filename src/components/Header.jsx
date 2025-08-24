import amazonLogo from "../assets/ui/header-logo.png";
import searchIcon from "../assets/icons/searchIcon.png";
import cartIcon from "../assets/icons/shopping-cart.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useAmazon } from "../store/globalStateHooks";
import { auth } from "../baas/firebase";
const Header = () => {
  const { user, getProductsNumber } = useAmazon();
  console.log(user?.email, getProductsNumber());
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <NavLink to="/">
        <img src={amazonLogo} alt="Amazon logo" className="header-logo" />
      </NavLink>
      {/* search and search icon */}
      <div className="header-search">
        <input
          type="search"
          name="search"
          id="search"
          className="header-searchInput"
        />
        <img
          src={searchIcon}
          alt="magnifying glass icon"
          className="header-searchIcon"
        />
      </div>
      <div className="header-nav">
        {/* login */}
        <div className="header-option">
          <span className="header-optionLineOne">
            Hello, {user ? user?.email : "Guest"}
          </span>
          <NavLink
            to={!user && "/login"}
            className={({ isActive }) => isActive && "hhh"}
          >
            <span className="header-optionLineTwo" onClick={handleSignOut}>
              {user ? "Sign Out" : "Sign in"}
            </span>
          </NavLink>
        </div>
        {/* orders page */}
        <NavLink to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">Orders</span>
          </div>
        </NavLink>
        {/* navbar text */}
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        {/* checkout page */}
        <div className="header-optionBasket">
          <NavLink to="checkout">
            <img src={cartIcon} alt="shopping-cart icon" />
          </NavLink>
          <span className="header-optionLineTwo header-basketCount">
            {getProductsNumber()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
