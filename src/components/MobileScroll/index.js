import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "show love. recieve love.",
    description:
      "FoodNow allows you gift food and groceries to your friends and family in a lovely manner, it doesn’t stop there, you can now extend your kindness to hundreds of NGOs around you. . . Stay in Love",
    mobile_img:
      "https://foodnow.ng/wp-content/uploads/2022/02/Right-Side8.png",
  },
  {
    heading: "earn passively when you invite others.",
    description:
      "when you invite friends to FoodNow you get N500 deposited to your FoodCash wallet. It doesn't stop there; you continue earning 1% commission on every order referred friends' place. doesn't that sound yummy?",
    mobile_img:
      "https://foodnow.ng/wp-content/uploads/2022/02/invite.png",
  },
  {
    heading: "seamless payment options.",
    description:
      "do you want to redeem a FoodNow voucher or pay with your card, make bank transfer, USSD or rather pay-on-delivery? FoodNow offer's seamless options to pay for your favorite food.",
    mobile_img:
      "https://foodnow.ng/wp-content/uploads/2022/02/payment-option.png",
  },
  {
    heading: "we are much better.",
    description:
      "switch to FoodNow and get absorbed in a whole new experience, because FoodNow is not just about food, it’s about friendship, love and community.",
    mobile_img:
      "https://foodnow.ng/wp-content/uploads/2022/02/we-are-better.png",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
