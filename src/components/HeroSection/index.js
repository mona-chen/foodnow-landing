import React, { useState } from 'react';
import Button from '../common/Button/index';
import "./heroSection.css";

const HeroSection = () => {
    const [url, setUrl] = useState('')
    const changeHandle = e => {
      setUrl(e.target.value)
    }
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
            <div className="hero-text">get 5% discount today. use coupon code "5%OFF". </div>
            <div
            onClick={foodWeb}  
            className="claim-anchor"> claim now <img 
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
        <Button
         onClick={appHandle}
         buttonText="Install FoodNow" />
        
       </div>
       </div>
};
 
export default HeroSection;
