import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = ({filterCategory, active, allPage}) => {

  useEffect(()=>{})
  return (
    <div>
      {allPage.length > 0 ? (
        <div className="">
          {active === "" ? (
            <div className="flex flex-wrap justify-between">
              {allPage.map((item)=>(
                <div key={item.id} className="w-1/3 p-5">
                  <Link to="">
                    <div className="group">
                        <div className=" bg-white border border-[#f1efef] transition-all duration-300 group-hover:scale-[1.02] rounded-2xl">
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
                  </Link>
                </div>
              ))}
            </div>
          ):(
            <div className="">
              {allPage.map((item)=>(
                <div key={item.id} className="">
                  <Link to="">
                    <div className=" group">
                        <div className="flex justify-between gap-3 bg-white border border-[#f1efef] transition-all duration-300 group-hover:scale-[1.02] rounded-2xl">
                            <div className="w-1/4 relative">
                            <img className='bg-[#f6f7fb] group-hover:bg-[#e9e9e9] w-full rounded-t-2xl' src={item.thumbnail} alt={item.id} />
                            <p className='absolute top-0 right-0 flex items-center justify-center rounded-bl-md rounded-tr-2xl h-10 w-15 bg-[#ff0073] text-white text-[12px] font-bold'>{(item.discountPercentage).toFixed(0)}% OFF</p>
                        </div>
                        <div className="w-2/4">
                          <h3 className='text-3xl'>{item.title}</h3>
                          <p className='py-3'>{item.category}</p>
                        </div>
                        <div className="w-1/4">
                          <h4 className='text-2xl text-center'>{item.price}</h4>
                        </div>
                      </div>
                        </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ):(
        <div className="">No products</div>
      )}
    </div>
  )
}

export default Products
