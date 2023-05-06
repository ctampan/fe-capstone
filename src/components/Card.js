import React from "react";
import fastDelivery from "../assets/fastdelivery.png";

const Card = (props) => {
  const { name, price, description, imgUrl } = props;

  return (
    <div className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="card__text">
        <div className="card__text__heading">
          <h3>{name}</h3>
          <span>{price}</span>
        </div>
        <div className="card__text__description">
          <p>{description}</p>
        </div>
        <div className="card__text__footer">
          <span>Order for delivery</span>
          <img src={fastDelivery} alt="delivery_icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
