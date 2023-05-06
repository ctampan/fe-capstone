import React from "react";
import Hero from "../components/Hero";
import Hightlights from "../components/Hightlights";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <main className="homepage__container">
      <Hero />
      <Hightlights />
      <Testimonials />
      <AboutSection />
    </main>
  );
};

export default Home;
