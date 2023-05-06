import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are family owned Mediterranean restraunt, focused on traditional
            recipes served with modern twist.
          </p>
          <button onClick={() => navigate("/reserve")} aria-label="On Click">
            Reserve a Table
          </button>
        </div>
        <div className="hero__img">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
