import React from "react";
import "./img.css";

class Album extends React.Component {
  render() {
    const path = this.props.src;
    let photo_name = this.props.name;
    let photo_locaiton = this.props.location;

    return (
      <div className="photo-entry-block">
        <a href={path}>
          <img className="photo-img" src={path} alt={path} />
        </a>
        <h3>{photo_name}</h3>
        <h3>{photo_locaiton}</h3>
      </div>
    );
  }
}

export default Album;
