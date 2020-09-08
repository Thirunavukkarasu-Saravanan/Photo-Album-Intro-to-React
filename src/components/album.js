import React from "react";
import "./img.css";

class Album extends React.Component {
  render() {
    const path = "{require(" + ".." + "/images/" + this.props.src + ")}";

    return (
      <div className="photo-entry-block">
        <a href={path}>
          <img className="photo-img" src={path} alt={path} />
        </a>

        <h3>this.props.name</h3>
        <h4>this.props.location</h4>
      </div>
    );
  }
}

export default Album;
