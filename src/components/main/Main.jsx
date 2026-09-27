import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="parentCon">
      <div className="textSection">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="btn">Shop Now</button>
        <div className="categoriesSection">
          <div className="categories">
            <span className="categoriHeading">
              200+
              <span>International Brands</span>
            </span>
          </div>
          <div className="categories">
            <span className="categoriHeading">
              2,000+
              <span>High-Quality Products</span>
            </span>
          </div>
          <div className="categories">
            <span className="categoriHeading">
              30,000+
              <span>Happy Customers</span>
            </span>
          </div>
        </div>
      </div>
      <div className="imageSection"></div>
    </div>
  );
}
