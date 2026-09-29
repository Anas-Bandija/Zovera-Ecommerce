import React from "react";
import "./NewArrivals.css";
import Card from "../card/Card.jsx";
import cardImg1 from "../../assets/images/cardImg_1.svg";
import cardImg2 from "../../assets/images/cardImg_2.svg";
import cardImg3 from "../../assets/images/cardImg_3.svg";
import cardImg4 from "../../assets/images/cardImg_4.svg";

export default function NewArrivals() {
  const cards = [
    {
      img: cardImg1,
      heading: "T-SHIRT WITH TAPE DETAILS",
      price: "120",
    },
    {
      img: cardImg2,
      heading: "SKINNY FIT JEANS",
      price: "240",
    },
    {
      img: cardImg3,
      heading: "CHECKERED SHIRT",
      price: "180",
    },
    {
      img: cardImg4,
      heading: "SLEEVE STRIPED T-SHIRT",
      price: "130",
    },
  ];

  return (
    <div className="newArrivalsContainer">
      <div className="parentContainer">
        <h1>NEW ARRIVALS</h1>
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
