import React from "react";
import "./buttonO.css";
const ButtonO = ({ buttonOText, onClick, prefix, customClass }) => {
  return (
    <div
      className={`buttonO-wrapper flex absolute-center ${customClass}`}
      onClick={onClick}
    >
      {prefix}
      {buttonOText}
    </div>
  );
};

export default ButtonO;
