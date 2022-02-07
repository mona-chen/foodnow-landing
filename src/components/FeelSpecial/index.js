import Button from "../common/Button";
import "./feelSpecial.css";
import { useState } from 'react';



const FeelSpecial = () => {
  const [url, setUrl] = useState('')
  const foodHandle = e => {
    e.preventDefault()
    window.location.replace(`https://web.foodnow.ng`)
  }

  return (
    
    <div className="feel-special photo-section">
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
              you don't just buy food on FOODNOW, you connect with community of people who are inspired always to share their food with the world, and you just became one of the people showing love to humanity. It's can only be possible with FOODNOW.
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
