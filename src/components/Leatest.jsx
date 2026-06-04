import React, { useContext, useRef} from 'react'
import Container from './Container'
import { Data } from './ApiData'
import SliderImport from "react-slick";


const Slider = SliderImport.default;
const Leatest = () => {
    let {info} = useContext(Data)

    const sliderRef = useRef(null)

    const handleWheel = (e)=>{
      e.preventDefault()

      if(e.deltaY > 0){
        sliderRef.current.slickNext()
      }else{
        sliderRef.current.slickPrev()
      }
    }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesPerRow: 3,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  }
    return (
    <div className="12.5">
      <Container>
        <div className="">
            <h2 className="text-4xl text-center">Leatest Products</h2>
        </div>
        <div onWheel={handleWheel} className="">
             <Slider ref={sliderRef} className="py-10" {...settings}>
                    {info.slice(91, 121).map((item) => (
                        <div className="w-1/3 px-3 py-5 group">
                        <div className="transition-all duration-300 group-hover:scale-[1.02]">
                            <div className="w-full relative">
                            <img className='bg-[#f6f7fb] group-hover:bg-[#e9e9e9] ease-in-out duration-400 w-full h-80 rounded-t-2xl' src={item.thumbnail} alt={item.id} />
                            <p className='absolute top-0 right-0 flex items-center justify-center rounded-bl-md rounded-tr-2xl h-10 w-15 bg-[#151875] text-white text-[12px] font-bold'>{(item.discountPercentage).toFixed(0)}% OFF</p>
                           </div>
                        <div className="bg-white py-5 px-3 ease-in-out duration-400 rounded-b-2xl">
                            <div className="flex items-center justify-between ">
                                <h4 className="text-lg font-semibold text-center text-[#151875]">{item.title.slice(0, 15)}...</h4>
                              <div className="flex items-center gap-2">
                                <p className="text-[#151875] text-center text-[16px] font-semibold ">${item.discountPercentage? `${(item.price -(item.price * item.discountPercentage) / 100).toFixed(2)}` : ''}</p>
                                <p className="text-[#ff0073] text-sm text-center line-through ">${item.price.toFixed(0)}</p>
                              </div>
                            </div>
                        </div>
                      </div>
                        </div>
                      ))}
                </Slider>
        </div>
      </Container>
    </div>
  )
}
export default Leatest