import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black h-100 py-3">
        <div className='row'>
        <div className='col-md-3'>

        <a className="navbar-brand ms-1 p-2 bg-gray-500 rounded" href="#">
          <strong>Amana LOGO</strong>
        </a>
        </div>
        </div>
        <div className='col-md-9 d-flex justify-content-center align-items-center text-white'>
            MNU
        </div>
       
        
     
    </nav>
  );
};

export default Navbar;
