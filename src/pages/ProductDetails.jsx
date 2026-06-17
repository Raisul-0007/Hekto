import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'
import Best from "../components/Best.jsx"
import SliderImport from "react-slick";
import {Data} from "../components/ApiData.jsx"
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cart/cartSlice';


const Slider = SliderImport.default;
const ProductDetails = () => {
  let dispatch = useDispatch()
  let handleCart = (item)=>{
    dispatch(addToCart({...item, qun:1}))
  }

  let {info} = useContext(Data)
    let {id} = useParams()
    let [product, setProduct] = useState([])
    let singleProduct = ()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((response)=>{
            setProduct(response.data)
        })
    }

    
    useEffect(()=>{
        singleProduct()
    },[id])

    let clientRating = Array.from({length: 5}, (_ , i)=>{
      if(product.rating >= i + 1){
        return <IoIosStar/>
      }else if(product.rating >= i + 0.5){
        return <IoIosStarHalf/>
      }else{
        return <IoIosStarOutline/>
      }
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      }
      
  return (
    <div className='bg-[#eeeffb]'>
      <Container>
        <div className="py-20">
          <h2 className='font-bold text-3xl'>ProductDetails</h2>
        </div>
        <div className="py-20">
          <div className="bg-white flex gap-10 p-20 rounded-2xl shadow-2xl">
          <div className="w-1/3">
            <img className='w-full rounded-2xl border border-[#f0f0f0]' src={product.thumbnail} alt={product.id}/>
          </div>
          <div className="w-2/3">
            <h3 className='font-semibold text-4xl py-5'>{product.title}</h3>
            <div className="text-yellow-400 flex gap-0.5 py-2 text-lg">
              {clientRating}            </div>
            <div className="flex gap-3 items-center">
              <h4 className='text-[#2f1ac4] text-xl'>${product.discountPercentage
                  ? `${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}`
                  : ""}</h4>
              <p className='line-through text-[#fb2e86]'>${product.price}</p>
            </div>
            <p className='py-5 text-sm'>{product.description}</p>
            <div className="flex gap-2 items-center">
              <h5 className=' font-semibold text-[16px]'>Category:</h5>
              <p className='text-[#2f1ac4] uppercase text-sm'>{product.category}</p>
            </div>
            <div className="flex gap-2 items-center">
              <h5 className=' font-semibold text-lg'>Brand:</h5>
              <p className='text-[#2f1ac4] uppercasetext-sm'>{product.brand}</p>
            </div>
            <div className="py-5">
              <div onClick={()=> handleCart(product)} className='py-2.5 px-8 bg-[#2f1ac4] text-sm rounded-lg text-white cursor-pointer'>Add To Cart</div>
            </div>
          </div>
        </div>
        </div>
        <div className="">
          <div className="">
                      <h2 className="text-4xl text-center">Best Selling Products</h2>
                  </div>
                  <div className="">
                      <Slider className="py-15" {...settings}>
                      {info.slice(121, 141 ).map((item)=>(
                          <Link to={`/shop/${item.id}`} className="w-1/4 px-4 py-5 transition-all duration-300 hover:scale-[1.1]" key={item.id}>
                              <div className="">
                                  <img className=" object-cover rounded-full shadow-xl bg-[#f6f7fb] p-5" src={item.thumbnail} alt={item.id} />
                              </div>
                              <div className="">
                                  <h4 className="text-xl font-bold text-[#151875] text-center">{item.title.slice(0, 13)}</h4>
                                  <div className="flex items-center gap-2 justify-center">
                                      <p className='text-[#ff0073]'>${(item.price - (item.price * (item.discountPercentage / 100))).toFixed(0)}</p>
                                      <p className='text-gray-500 line-through'>${item.price}</p>
                                  </div>
                              </div>
                          </Link>
                      ))}
                      </Slider>
                  </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
