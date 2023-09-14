
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" onClick={handleMenuToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand"  style={{ color: 'red' }}>Michaels Mode</a>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-danger" style={{ color: 'red' }}>PS4</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-danger" style={{ color: 'red' }}>PS5</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-danger" style={{ color: 'red' }}>Xbox Series</button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 mb-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger my-1 my-sm-0 mt-2 " type="submit">Search</button>
          </form>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;