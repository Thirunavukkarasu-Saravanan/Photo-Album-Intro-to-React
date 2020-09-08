import React from "react";
import "./img.css";

function BannerImage() {
  return (
    <div>
      <img
        className="banner"
        src={require("../images/banner.jpg")}
        alt="text"
      />
    </div>
  );
}

export default BannerImage;
