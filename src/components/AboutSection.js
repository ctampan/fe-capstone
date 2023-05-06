import React from 'react';
import imageOne from '../assets/about1.jpg'
import imageTwo from '../assets/about2.jpg'

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__container__text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a vibrant and cozy restaurant located in the heart
            of Chicago. Our mission is to provide our customers with fresh and
            delicious food made from the highest quality ingredients. From our
            signature lemon chicken to our famous hummus, our food is made from
            scratch daily with love and care. Come visit us and taste the
            difference at Little Lemon!
          </p>
        </div>
        <div className="about__container__img">
          <img src={imageOne} className='front_image' alt='chefs'/>
          <img src={imageTwo} className='back_image'alt='chefs'/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
