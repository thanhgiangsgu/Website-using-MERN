import React, { useEffect } from 'react'
import HotProduct from './HotProduct';
import Slideshow from './Slideshow'
import Discount from './Discount';
import Services from './Services';
import Instagram from './Instagram';


const HomePage = () => {
  const slides = [
    { url: "http://localhost:3000/img/slideshow/img1.jpg", title: "beach" },
    { url: "http://localhost:3000/img/slideshow/img2.jpg", title: "boat" },
    { url: "http://localhost:3000/img/slideshow/img3.jpg", title: "forest" },
    { url: "http://localhost:3000/img/slideshow/img4.jpg", title: "city" },
    { url: "http://localhost:3000/img/slideshow/img5.jpg", title: "italy" },
  ];
  const containerStyles = {               
    width: "100%",
    margin: "0 auto",
  };


  return (
    <div>
      <div style={containerStyles}>
        <Slideshow slides={slides} />
        <HotProduct />
        <Discount />
        <Services />
        <Instagram />
      </div>
    </div>
  );
}

export default HomePage
