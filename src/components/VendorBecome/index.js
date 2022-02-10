import Button from "../common/Button";
import React from 'react';
import "./vendorBecome.css";

const VendorBecome = () => {

  const submitHandle = e => {
    e.preventDefault()
    window.location.replace(`https://foodnow.ng/become-a-vendor`)
  }

  return (
    <div className="cred-security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
             start selling on foodnow.
            </div>
            <div className="photo-section-subheading">
              reach potential customers quickly and easily
            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
              if you own a restaurant or grocery store, FOODNOW is the right marketplace for you to explode your sales with little to no stress, we provide for you a unique store, a POS system on demand, and a smart dashboard & app to manage all your sales and orders..
            </div>
                     
       
            <div className="photo-section-button">
              <Button onClick={submitHandle}
              buttonText="Become a vendor" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorBecome;
