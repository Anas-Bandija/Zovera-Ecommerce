import React from "react";
import StarIcon from "../../assets/icons/starIcon.svg";
import StarIconHaff from "../../assets/icons/starIconHaff.svg";
import './Card.css'

export default function Card({ cardImg, heading, price }) {
  const starArray = [1, 2, 3, 4];
  return (
    <div className="card">
      <img src={cardImg} alt="cardImg1" />
      <div className="cardText">
        <h3>{heading}</h3>
        <div className="starContainer">
          {starArray.map(() => (
            <img src={StarIcon} alt="star" />
          ))}
          <img src={StarIconHaff} alt="StarIconHaff" />
          <p>4.5/5</p>
        </div>
        <h2>${price}</h2>
      </div>
    </div>
  );
}
