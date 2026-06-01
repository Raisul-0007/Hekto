import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ban from "../assets/ban.png"

import SliderImport from "react-slick";
import Container from './Container';

const Slider = SliderImport.default;
const Banner = () => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  
  return (
    <div>
      <Container>
        <div className="slider-container">
      <Slider {...settings}>
      <div className="">
        <img className='w-full' src={ban} alt="Banner" />
      </div>
      <div className="">
        <img className='w-full' src={ban} alt="Banner" />
      </div>
      <div className="">
        <img className='w-full' src={ban} alt="Banner" />
      </div>
      <div className="">
        <img className='w-full' src={ban} alt="Banner" />
      </div>
      </Slider>
      </div>
      </Container>
    </div>
  )
}

export default Banner