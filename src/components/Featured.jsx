import React, { useContext } from 'react'
import Container from './Container'
import SliderImport from "react-slick";
import ban from "../assets/ban.png"
import {Data} from './ApiData'
const Slider = SliderImport.default;

const Featured = () => {
    let {info} = useContext(Data)

    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: i => (
       <div className="custom-dot" />
    )
  }
  return (
    <div className="py-12.5">
        <Container>
            <div className="">
                <h2 className="text-4xl text-center">Featured Products</h2>
            </div>
                <Slider className="  py-10" {...settings}>
                    {info.slice(70,90).map((item) => (
                        <div className="w-1/4 px-3 group">
                        <div className="bg-white border border-[#f1efef] transition-all duration-300 group-hover:scale-[1.02] rounded-2xl">
                            <div className="w-full relative">
                            <img className='bg-[#f6f7fb] group-hover:bg-[#e9e9e9] w-full rounded-t-2xl' src={item.thumbnail} alt={item.id} />
                            <p className='absolute top-0 right-0 flex items-center justify-center rounded-bl-md rounded-tr-2xl h-10 w-15 bg-[#ff0073] text-white text-[12px] font-bold'>{(item.discountPercentage).toFixed(0)}% OFF</p>
                        </div>
                        <div className="bg-white py-5 px-3 group-hover:bg-[#2f1ac4] ease-in-out duration-400 rounded-b-2xl">
                            <div className="flex items-center justify-between ">
                                <h4 className="text-lg font-semibold text-center text-[#ff0073] group-hover:text-white ease-in-out duration-400">{item.title.slice(0, 15)}...</h4>
                            <p className="text-black text-center group-hover:text-white group-hover:font-semibold ease-in-out duration-400 text-lg">${item.discountPercentage? `${(item.price -(item.price * item.discountPercentage) / 100).toFixed(2)}` : ''}</p>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="text-gray-600 group-hover:text-white ease-in-out duration-400">{item.category}</h4>
                                <p className="text-[#a3a0a0] text-center line-through group-hover:text-white ease-in-out duration-400">${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                      </div>
                        </div>
                      ))}
                </Slider>
        </Container>
    </div>
  )
}

export default Featured