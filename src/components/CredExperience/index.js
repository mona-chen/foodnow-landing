import Button from "../common/Button";
import "./credExperience.css";
import React from 'react';

const CredExperience = () => {
  const foodHandle = e => {
    e.preventDefault()
    window.location.replace(`https://web.foodnow.ng`)
  }

  return (
    <div className="cred-experience photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading cred-experience-heading">
              enjoy your meal while it's hot.
            </div>
            <div className="photo-section-subheading">
              your food delivered just in time.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description cred-experience-description">
            You don't have to skip lunch, FoodNow allows you schedule meals and groceries and get it delivered just in time. You also get real time tracking of your orders, with little to no fear of cancellation. FoodNow got you covered 
            </div>
            <div className="photo-section-button">
              <Button 
              onClick={foodHandle}
              buttonText="Experience the upgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredExperience;
