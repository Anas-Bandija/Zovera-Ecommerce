import React from "react";
import "./Navbar.css";
import { X, Search, ShoppingCart, CircleUserRound } from "lucide-react";

export default function Navbar() {
  return (
    <main className="Navbar">
      <div className="upperSide">
        <div className="emptyContainer"></div>
        <p className="upperSideText">
          Sign up and get 20% off to your first order.{" "}
          <span className="upperSidespan">Sign Up Now</span>
        </p>
        <X className="crossIcon" />
      </div>
      <div className="lowerSide">
        <div className="container">
          <div className="logo">
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
            <h1>SHOP.CO</h1>
          </div>
          <div className="list">
            <span className="li">Shop</span>
            <span className="li">On Sale</span>
            <span className="li">New Arrivals</span>
            <span className="li">Brands</span>
          </div>
        </div>
        <div className="container main">
          <div className="searchBar">
            <Search />
            <input
              type="text"
              className="search"
              placeHolder="Search for products..."
            />
          </div>
          <div className="icons">
          <span className="mediaSearch">
            <Search />
          </span>
            <span>
              <ShoppingCart />
            </span>
            <span>
              <CircleUserRound />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
