import React from "react";
import Album from "./album";
import "./img.css";
import calfrnia from "../images/gg.jpeg";
import hawai from "../images/haw.jpeg";
import nyc from "../images/nyc.jpeg";
import grandcanyon from "../images/gc.jpg";

class static_data_for_album extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <Album src={calfrnia} name="Golden Gate" location="California" />
        <Album src={hawai} name="Ember Island" location="Hawaii" />
        <Album src={nyc} name="Cheers" location="New York City" />
        <Album src={grandcanyon} name="Grand Canyon" location="Arizona" />
      </div>
    );
  }
}

export default static_data_for_album;
