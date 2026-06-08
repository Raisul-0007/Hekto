import react,{useContext} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Data} from "./ApiData"
import Container from './Container'
import SliderImport from "react-slick";

const Slider = SliderImport.default;
const Best = () => {
    let {info} = useContext(Data)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
      }
      
  return (
    <div className="py-20">
      <Container>
        <div className="">
            <h2 className="text-4xl text-center">Best Selling Products</h2>
        </div>
        <div className="">
            <Slider className="py-15" {...settings}>
            {info.slice(121, 141 ).map((item)=>(
                <div className="w-1/4 px-4" key={item.id}>
                    <div className="">
                        <img className=" object-cover rounded-full shadow-xl bg-[#f6f7fb] p-5" src={item.thumbnail} alt={item.id} />
                    </div>
                    <div className="">
                        <h4 className="text-xl font-bold text-[#151875] text-center">{item.title.slice(0, 13)}</h4>
                        <div className="flex items-center gap-2 justify-center">
                            <p className='text-[#ff0073]'>{(item.price - (item.price * (item.discountPercentage / 100))).toFixed(0)}</p>
                            <p className='text-gray-500 line-through'>${item.price}</p>
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

export default Best
