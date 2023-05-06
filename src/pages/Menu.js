import React from "react";
import menu from "../assets/restaurant-menu.avif";

const Menu = () => {
  return (
    <section className="menu">
      <h2 className="menu__heading">OUR MENU</h2>
      <div className="menu__container">
        <img src={menu} alt="menu" />
      </div>
    </section>
  );
};

export default Menu;
