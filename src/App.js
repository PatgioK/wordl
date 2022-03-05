import './App.css';
import Wordl from './components/wordl.js';
import Home from "./components/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

function App() {
  const [bg, setBg] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const dat = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      const data = await dat.json();
      setBg(data);
    }
  }, [])

  console.log(apiKey)
  // console.log(bg)
  if (!bg) return <div />;

  return (
    // <div className="App">
    //   <Home />
    // </div>
    <div className="nasa-photo">
      <img
        src={bg.url}
        alt={bg.title}
        className="photo"
      />
    </div>
  );
}

export default App;


