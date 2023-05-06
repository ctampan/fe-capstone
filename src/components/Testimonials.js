import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      name: "J. Rowling",
      text: "The restaurant exceeded my expectations! The food was delicious and authentic, with a great variety of flavors and dishes. The service was also fantastic. Highly recommend!",
      rating: 4,
      photo: `https://randomuser.me/api/portraits/${
        Math.random() > 0.5 ? "men" : "women"
      }/${Math.floor(Math.random() * 50 + 1)}.jpg`,
    },
    {
      name: "S. King",
      text: "I visited the restaurant with a group of friends and we were blown away by the quality of the food. It's definitely a restaurant we will return to!",
      rating: 5,
      photo: `https://randomuser.me/api/portraits/${
        Math.random() > 0.5 ? "men" : "women"
      }/${Math.floor(Math.random() * 50 + 1)}.jpg`,
    },
    {
      name: "E. Klark",
      text: "The restaurant is a gem! From the moment we stepped in, we were greeted with warmth and hospitality. I would recommend this restaurant to anyone looking for an authentic Mediterranean dining experience",
      rating: 5,
      photo: `https://randomuser.me/api/portraits/${
        Math.random() > 0.5 ? "men" : "women"
      }/${Math.floor(Math.random() * 50 + 1)}.jpg`,
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
