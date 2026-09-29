import React from "react";
import VersageIcon from "../../assets/icons/Versage.svg";
import ZaraIcon from "../../assets/icons/Zara.svg";
import GucciIcon from "../../assets/icons/Gucci.svg";
import PradaIcon from "../../assets/icons/Prada.svg";
import CalvinIcon from "../../assets/icons/Calvin.svg";
import "./Brands.css";

export default function Brands() {
  return (
    <div className="mainContainer">
      <span>
        <img src={VersageIcon} alt="VersageIcon" />
      </span>
      <span>
        <img src={ZaraIcon} alt="ZaraIcon" />
      </span>
      <span>
        <img src={GucciIcon} alt="GucciIcon" />
      </span>
      <span>
        <img src={PradaIcon} alt="PradaIcon" />
      </span>
      <span>
        <img src={CalvinIcon} alt="CalvinIcon" />
      </span>
    </div>
  );
}
