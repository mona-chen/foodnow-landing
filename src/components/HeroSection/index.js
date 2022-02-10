import React from 'react';
import Button from '../common/Button/index';
import "./heroSection.css";
import ButtonO from '../common/ButtonO/index';

const HeroSection = () => {

    const appHandle = e => {
      e.preventDefault()
      window.location.replace(`https://play.google.com/store/apps/details?id=ng.foodnow`)
    }

    const foodWeb = e => {
        e.preventDefault()
        window.location.replace(`https://web.foodnow.ng`)
      }
  

  return <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
            <div className="hero-text">#valentine discount - get N500 OFF your first order. </div>
            <div
            onClick={foodWeb}  
            className="claim-anchor"> start ordering<img 
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            alt="Claim"
            className="claim-arrow">
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
