import React from "react";
import yellowStar from "../assets/staryellow.svg";
import whiteStar from "../assets/starwhite.svg";

const Testimonial = (props) => {
  const { name, text, rating, photo } = props;

  let starRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) starRating.push(yellowStar);
    else starRating.push(whiteStar);
  }

  return (
    <div className="testimonial">
      <div className="testimonial__rating">
        {starRating.map((star, index) => (
          <img key={index} src={star} alt="" />
        ))}
      </div>
      <div className="testimonial__text">{text}</div>
      <hr />
      <div className="testimonial__user">
        <img src={photo} alt="avatar" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Testimonial;
