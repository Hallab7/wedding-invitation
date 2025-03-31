import React, { useState } from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';
import Couple from './components/Couple';
import Venue from './components/Venue';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Landmark from './components/Landmark';

function App() {
  const weddingDate = new Date('2025-05-31T00:00:00'); // Update your wedding date here

  return (
    <div className="App">
      <header className="header">
        <h2>Join Us in Witnesssing Our<br />Aqeedu Nikkah </h2>
        <h2>Naheemah <br className='break' />
          <span className='love'
            role="img" 
            aria-label="love" 
            style={{
              fontSize: '2rem', 
              animation: 'blink 2s infinite'
            }}
          >💜</span> <br/>

         
        Abdulateef</h2>
        
      </header>

      <CountdownTimer />
      {/* <Couple /> */}
      <Venue  />
      <DressCode />
      <Gallery targetDate={weddingDate} />
      <Landmark />
      <RSVP />

      <footer>
        <p>We can't wait to celebrate with you!
          <span role="img" aria-label="celebration" style={{ fontSize: '1rem'}}>🎉</span>
          
        </p>
      </footer>
    </div>
  );
}

export default App;