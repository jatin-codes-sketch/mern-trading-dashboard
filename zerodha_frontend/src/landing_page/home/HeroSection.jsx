import React from 'react'
import "./style/style.css"
const HeroSection = () => {
  return (
    <section className="hero-section container text-center my-5">
      <img
        src="/media/homeHero.png"
        alt="Zerodha Hero"
        className="img-fluid mb-4"
        style={{width:"80%"}}
      />

      <h1 className="mt-5 mb-4">Invest in everything</h1>

      <p className="text-muted fs-5 mb-5">
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>

      <button className="btn btn-primary btn-lg mt-3 px-5 py-2">
        Sign up now
      </button>
    </section>
  );
};

export default HeroSection;
