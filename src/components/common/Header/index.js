import React, { useState } from 'react';
import './header.css';

const loginHandle = e => {
    e.preventDefault()
    window.location.replace(`https://foodnow.com.ng/auth/login`)
  }

  const registerHandle = e => {
    e.preventDefault()
    window.location.replace(`https://foodnow.com.ng/auth/register`)
  }

const Header = () => {
    const [showMobMenu, setShowMobMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobMenu(!showMobMenu);
    }; 
    

  return <div className="mobile-menu-wrapper">
      <div className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar">
            <div 
            onClick={loginHandle}
            className="mobile-nav-item"> login </div>
            <div
            onClick={registerHandle}
            className="mobile-nav-item"> register </div>
        </div>
      </div>
      <div className="flex max-width header">
          <img 
          src="./images/logo-white.png"
          alt=""
          className="header-logo"
          />
          
          <div className="only-mobile mobile-menu-button-wrapper">
          <button 
          class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
          }` }
          type="button" 
          
          onClick={toggleMobileMenu}
          > 
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>

          </div>
          <div className="non-mobile flex">
              <div 
              onClick={loginHandle}
              className="header-nav-item"> login </div>
              <div 
              onClick={registerHandle}
              className="header-nav-item"> register </div>
          </div>
      </div>
  </div>;
};

export default Header;
