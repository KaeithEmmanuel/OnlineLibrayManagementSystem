import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Home.css';

function Home() {
   // Pass an empty dependency array to run this effect only once after the initial render

  return (
    <div>
      <div className='hero'>
        <div className="hero-content">
          <h1 className='hero-text'>Book Shop</h1>
          <p className='hero-description'>Welcome to our book shop. We have a wide selection of books for you to choose from. </p>
        </div>
        <div className='hero-image'></div>
      </div>
    </div>
  );
}

export default Home;
