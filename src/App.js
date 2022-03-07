import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from './components/navbar';
import { Outlet } from 'react-router';

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
    if (bg) {
      document.body.style.backgroundImage = `url('${bg.url}')`;
    }
  }, [bg])

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App;


