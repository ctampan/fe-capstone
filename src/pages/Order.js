import React from "react";
import greekSalad from "../assets/greeksalad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";

const Order = () => {
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
      imgUrl: bruschetta,
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
    <section className="order">
      <h2 className="order__heading">ORDER</h2>
      <div className="order__container">
        {dishList.map((el, idx) => (
          <div key={idx} className="order__row">
            <div className="order__img">
              <img src={el.imgUrl} alt="dish" />
            </div>
            <div className="order__name">{el.name}</div>
            <div className="order__price">{el.price}</div>
          </div>
        ))}
        <div className="order__total">TOTAL: $ 23.98</div>
        <button aria-label="On Click">Order</button>
      </div>
    </section>
  );
};

export default Order;
