import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { useSelector } from 'react-redux';
import { FaCartShopping } from 'react-icons/fa6';

const Navber = () => {
  let Cart = useSelector((state)=> state.cart.cartItem)
  return (
    <div className='py-4 border-b border-[#76767638] sticky top-0 bg-white z-1000'>
      <Container className="flex items-center">
        <div className="w-1/4">
          <Link to="/"><h1 className='text-2xl font-bold italic '>Hecto</h1></Link>
        </div>
        <div className="w-2/4">
        <ul className="flex gap-4 justify-center ">
          <li><Link className="cursor-pointer hover:text-[#fb2e86]" to="/">Home</Link></li>
          <li><Link className="cursor-pointer hover:text-[#fb2e86]" to="/shop">Shop</Link></li>
          <li><Link className="cursor-pointer hover:text-[#fb2e86]" to="#">About</Link></li>
          <li><Link className="cursor-pointer hover:text-[#fb2e86]" to="#">Contact</Link></li>
        </ul>
        </div>
        <div className="w-1/4">
        <div className="flex items-center">
          <input className="bg-white border py-1 border-[#76767638] px-2 focus:outline-none" type="text" placeholder="Search..."/>
          <div className="px-5 py-2 border text-white cursor-pointer bg-[#fb2e86] border-[#76767638] border-l-0">
            <IoIosSearch/>
          </div>
        </div>
        <div className="">
          <FaCartShopping/>
          {Cart.length}
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Navber
