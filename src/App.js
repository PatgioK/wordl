import './App.css';
import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

function App() {
  const [bg, setBg] = useState(null);

  async function fetchPhoto() {
    const dat = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await dat.json();
    setBg(data); 
  }

  useEffect(() => {
    fetchPhoto()
  }, [])
  
  useEffect(() => {
    if(bg){
      document.body.style.backgroundImage = `url('${bg.url}')`;
    }
  }, [bg])

  return null;
}

export default App;


