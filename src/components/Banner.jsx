import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ban from "../assets/ban.png"

import SliderImport from "react-slick";

const Slider = SliderImport.default;
const Banner = () => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  
  return (
    <div>
        <div className="slider-container">
      <Slider {...settings}>
        {console.log(Slider)}
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
    </div>
  )
}

export default Banner