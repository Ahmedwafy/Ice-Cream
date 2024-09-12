import React from 'react';
import "../Clients/Clients.css"

const ExampleCarouselImage = ({ text }) => (
  <div style={{height:'400px', backgroundColor: 'lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h2 className='text'>{text}</h2>
  </div>
);

export default ExampleCarouselImage;
