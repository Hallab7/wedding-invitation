import React from 'react';
import Countdown from 'react-countdown';

const Gallery = ({ targetDate }) => {
  const images = [
    'https://source.unsplash.com/300x200/?wedding,couple',
    'https://source.unsplash.com/300x200/?wedding,ring',
    'https://source.unsplash.com/300x200/?wedding,flowers',
    'https://source.unsplash.com/300x200/?wedding,venue',
  ];

  return (
    
    <>
    {false && (
    <section className="gallery">
      <h3>Gallery</h3>
      <div className="gallery-images">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index}`} />
        ))}
      </div>
    </section> 
      )} : {
        <section className="gallery">
        <h1>Watch out for our wedding Gallery</h1>
        <h2><Countdown date={targetDate} /></h2>
        </section>}
      </>
  );

};

export default Gallery;