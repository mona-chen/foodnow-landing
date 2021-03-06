import React from 'react';
import Button from '../common/Button/index';
import "./heroSection.css";
import ButtonO from '../common/ButtonO/index';
import arrow from '../../images/arrow.png';
import imageRight from '../../images/image-right.png';

const HeroSection = () => {

    const appHandle = e => {
      e.preventDefault()
      window.location.replace(`https://urlgeni.us/foodnow`)
    }

    const foodWeb = e => {
        e.preventDefault()
        window.location.replace(`https://web.foodnow.ng`)
      }
  

  return <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
            <div className="hero-text">🎉﻿Reffer and Earn! </div>
            <div
            onClick={foodWeb}  
            className="claim-anchor">{""} get started
            <img 
            src={arrow}
            alt="Claim"
            className="claim-arrow">
            </img>
            </div>
      </div>
      <div className="side-images">
      <div className="image-container-desktop">
        <img 
            src={imageRight}
            alt="Food Image"
            className="right-image">
        </img>
      </div>
      <div className="image-container-mobile">
        <img 
            src={imageRight}
            alt="Food Image"
            className="left-image">
        </img>
      </div>
      </div>
       <div className="flex absolute-center flex-col hero-section max-width">
        <div className="hero-heading">
            get your favorite meal in a click.
        </div>
        <div className="hero-subheading">
            join 3m+ people enjoying quality meals with fast delivery
        </div>
        <div className="hero-button flex">
          <div className="button-head">
        <Button 
         onClick={appHandle}
         buttonText="Download" />
        </div>
        <div className="button-head">
        <ButtonO
         onClick={foodWeb}
         buttonOText="Order Now" />
         </div>
         </div>
       </div>
       
       </div>
};
 
export default HeroSection;
