import React from "react";
import logo from "./logo.svg";
import Banner from "./components/Banner";
import Album from "./components/album";
import "./App.css";
import calfrnia from "./images/gg.jpeg";
import My_Data from "./components/static_data_for_album";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Banner />
          <h2>Photo Gallery Using React</h2>
          <span className="imgtitle">
            <img src={logo} className="App-logo" alt="logo" />
          </span>

          <My_Data />
        </div>
      </header>
    </div>
  );
}

export default App;
