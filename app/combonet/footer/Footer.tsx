import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Amana Transportation</h5>
            <p className="mb-0">Your reliable bus transportation service</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">&copy; 2024 Amana Transportation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
