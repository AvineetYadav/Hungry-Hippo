import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.webp";
import { useSelector } from "react-redux";
import { SearchIcon, OfferIcon, SignIn } from "../utils/svg";
import OnlineStatusIndicator from "./OnlineStatus";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="px-4 md:px-10 lg:px-20 shadow-md">
      <ul className="flex items-center justify-between">
        <Link to="/">
          <img className="w-20 md:w-24 lg:w-18" src={LOGO} alt="Logo" />
        </Link>
        <div className="flex items-center space-x-6 md:space-x-10">
          <Link
            className="flex items-center font-semibold hover:text-red-500"
            to="/search"
          >
            <SearchIcon className="w-6 h-6 md:w-8 md:h-8" />
            <span className="hidden md:inline">Search</span>
          </Link>
          <Link
            className="flex items-center font-semibold hover:text-red-500"
            to="/offer"
          >
            <OfferIcon className="w-6 h-6 md:w-8 md:h-8" />
            <span className="hidden md:inline">Offers</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center font-semibold hover:text-red-500"
          >
            <SignIn className="w-6 h-6 md:w-8 md:h-8" />
            <span className="hidden md:inline">
              <span className="flex ">
                <span className="mr-2">Sign</span>In
              </span>
            </span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center font-semibold hover:text-red-500"
          >
            <span className="md:inline mr-5">
              <span className="flex ">
                <span className="mr-2">Cart</span>({cartItems.length})
              </span>
            </span>
          </Link>
        </div>
        <OnlineStatusIndicator />
      </ul>
    </nav>
  );
};

export default Header;
