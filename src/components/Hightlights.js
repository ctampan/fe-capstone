import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card";
import greekSalad from "../assets/greeksalad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";

const Hightlights = () => {
  const navigate = useNavigate();

  const dishList = [
    {
      name: "Greek Salad",
      price: "$ 12.99",
      description:
        "Greek salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, and olive oil.",
      imgUrl: greekSalad,
    },
    {
      name: "Bruschetta",
      price: "$ 5.99",
      description:
        "Bruschetta is an antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. ",
      imgUrl: bruchetta,
    },
    {
      name: "Lemon tart",
      price: "$ 5.00",
      description:
        "A lemon tart is a dessert dish, a variety of tart. It has a pastry shell with a lemon flavored filling.",
      imgUrl: lemonDessert,
    },
  ];

  return (
    <section className="hightlights">
      <div className="hightlight__container">
        <div className="hightlights_text">
          <h2>This week special!</h2>
          <button onClick={() => navigate("/menu")} aria-label="On Click">
            Online Menu
          </button>
        </div>
        <div className="hightlights_cards">
          {dishList.map((dish) => (
            <Card key={dish.name} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hightlights;
