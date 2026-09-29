import React from "react";
import "./TopSelling.css";
import Card from "../card/Card.jsx";
import cardImg5 from "../../assets/images/cardImg_5.svg";
import cardImg6 from "../../assets/images/cardImg_6.svg";
import cardImg7 from "../../assets/images/cardImg_7.svg";
import cardImg8 from "../../assets/images/cardImg_8.svg";

export default function TopSelling() {
  const cards = [
    {
      img: cardImg5,
      heading: "VERTICAL STRIPED SHIRT",
      price: "212",
    },
    {
      img: cardImg6,
      heading: "COURAGE GRAPHIC T-SHIRT",
      price: "145",
    },
    {
      img: cardImg7,
      heading: "LOOSE FIT BERMUDA SHORTS",
      price: "80",
    },
    {
      img: cardImg8,
      heading: "FADED SKINNY JEANS",
      price: "210",
    },
  ];

  return (
    <div className="TopSellingContainer">
      <div className="parentContainer">
        <h1>top selling</h1>
      </div>
      <div className="cardContainer">
        {cards.map(({ img, heading, price }) => (
          <Card cardImg={img} heading={heading} price={price} />
        ))}
      </div>
      <div className="parentContainer">
        <button className="btnLight">View All</button>
      </div>
    </div>
  );
}
