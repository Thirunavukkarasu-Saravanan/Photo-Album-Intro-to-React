import React from "react";
import logo from "./logo.svg";
import Banner from "./components/Banner";
import Album from "./components/album";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Banner />
          <span className="title">Photo Gallery Using React</span>
          <span className="imgtitle">
            <img src={logo} className="App-logo" alt="logo" />
          </span>
          <Album src="gg.jpeg" name="Golden Gate" location="California" />
        </div>
      </header>
    </div>
  );
}

export default App;
