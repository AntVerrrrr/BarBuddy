import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import LoginModal from '../Login/LoginModal';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a>BAR-BUDDY</a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" onClick={scrollToTop}>
                Home
              </a>
            </li>
            <li>
              <button className="nav-link" onClick={() => navigate('/spirits')}>
                Spirits
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => navigate('/cocktails')}>
                Cocktail Recipes
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => navigate('/bars')}>
                Bars
              </button>
            </li>
            <li>
              <a className="getstarted scrollto" style={{ textDecoration: 'none' }} onClick={() => setShowLogin(true)}>
                Login
              </a>
            </li>
          </ul>
          {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
