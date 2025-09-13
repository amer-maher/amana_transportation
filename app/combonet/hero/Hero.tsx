import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4 ">Amana Transportation</h1>
            <p className="lead mb-4 ">Amana Transportation Proudly Servicing Malaysian Bus Riders Since 2019!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;