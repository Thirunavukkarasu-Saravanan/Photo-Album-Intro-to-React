import React from "react";
import "./img.css";
import banner from "../images/banner.jpg";

function BannerImage() {
  return (
    <div>
      <img className="banner" src={banner} alt="text" />
    </div>
  );
}

export default BannerImage;
