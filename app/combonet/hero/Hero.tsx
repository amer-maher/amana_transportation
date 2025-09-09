import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container text-black">
        <div className="row justify-content-center text-center">
          <h1 className="display-4 fw-bold mb-4">Amana Transportation</h1>
          <p className="lead mb-4">Amana Transportation Proudly Servicing Malaysian Bus Riders Since 2019!</p>
       
        </div>
      </div>
    </section>
  );
};

export default Hero;
