import React from 'react';
import Button from "../common/Button";
import "./feelSpecial.css";



const FeelSpecial = () => {
  const foodHandle = e => {
    e.preventDefault()
    window.location.replace(`https://web.foodnow.ng`)
  }

  return (
    
    <div className="uber-meets photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
            uber meets tinder.
            </div>
            <div className="photo-section-subheading">
              but this time love is food
            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
            you don't just buy food on FoodNow you connect with a community of lovers and philanthropists who express their love via gifting food. Because in FoodNow, Love is Food.
            </div>
            <div className="photo-section-button">
              <Button 
              onClick={foodHandle}
              buttonText="Explore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
