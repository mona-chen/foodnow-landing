import Button from "../common/Button";
import "./credExperience.css";
import { useState } from 'react';

const CredExperience = () => {

  const [url, setUrl] = useState('')
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
              Enjoy your meal while it's hot.
            </div>
            <div className="photo-section-subheading">
              your food delivered just in time.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description cred-experience-description">
              you don't need to skip launch, FOODNOW allows you to schedule your order and get it just in time, your groceries also get the same treat, you get real time tracking of your order, no more fear of cancellation, FOODNOW got you covered.
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
