import React, { useState, useEffect, useRef } from'react';
import ImageTrack from './image-track/imageTrack';
import Navbar from './navbar/navbar';
import './App.css';

function App() {
  return (
    <main>
      <div className="home-page">
        <Navbar />
        <ImageTrack />
      </div>
    </main>
  );
}

export default App;
