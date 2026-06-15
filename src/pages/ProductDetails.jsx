import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
    let {id} = useParams()
    let [product, setProduct] = useState([])
    let singleProduct = ()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((response)=>{
            setProduct(response.data)
        })
    }

    
    useEffect(()=>{
        singleProduct()
    },[])
  return (
    <div className='bg-[#eeeffb]'>
      <Container>
        <div className="py-20">
          <h2 className='font-bold text-3xl'>ProductDetails</h2>
        </div>
        <div className="py-20">
          <div className="bg-white flex gap-10 p-20 rounded-2xl">
          <div className="w-1/3">
            <img className='w-full border border-[#f0f0f0]' src={product.thumbnail} alt={product.id}/>
          </div>
          <div className="w-2/3">
            <h3 className='font-semibold text-4xl py-5'>{product.title}</h3>
            <div className=""></div>
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
              <Link className='py-2.5 px-8 bg-[#2f1ac4] text-sm rounded-lg text-white'>Add To Cart</Link>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
