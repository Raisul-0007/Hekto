import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { useSelector } from 'react-redux';
import { FaCartShopping } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';

const Navber = () => {
  let Cart = useSelector((state)=> state.cart.cartItem)
  let [show, setShow] = useState(false)
  let menuRef = useRef(null)

  useEffect(()=>{
    const handleClick = (e)=>{
      if (menuRef.current && !menuRef.current.contains(e.target)){
        setShow(false)
      }
    }
    document.removeEventListener("mousedown", handleClick)
    return ()=>{
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])
  return (
    <div ref={menuRef} className='py-4 border-b border-[#76767638] sticky top-0 bg-white z-1000'>
      <Container className=" flex items-center">
        <div className="md:w-1/4 w-2/3">
          <Link to="/"><h1 className='text-2xl font-bold italic '>Hecto</h1></Link>
        </div>
        <div className="w-2/4 hidden md:block">
        <ul className="flex gap-4 justify-center ">
          <li><Link className="cursor-pointer hover:text-[#fb2e86]" to="/">Home</Link></li>
          <li><Link className="cursor-pointer hover:text-[#fb2e86]" to="/shop">Shop</Link></li>
          <li><Link className="cursor-pointer hover:text-[#fb2e86]" to="#">About</Link></li>
          <li><Link className="cursor-pointer hover:text-[#fb2e86]" to="#">Contact</Link></li>
        </ul>
        </div>
        <div className="md:hidden w-1/3 flex justify-end transition-all  ease-in-out duration-300">
        {show ? 
        <HiX onClick={() => setShow(false)} />
        : 
        <HiMenu onClick={() => setShow(true)} />}
        </div>
        <div className="hidden md:block w-1/4 ">
        <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input className="bg-white border py-1 border-[#76767638] px-2 focus:outline-none" type="text" placeholder="Search..."/>
          <div className="px-5 py-2 border text-white cursor-pointer bg-[#fb2e86] border-[#76767638] border-l-0">
            <IoIosSearch/>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <div className="text-[#fb2e86] text-lg">
            <FaCartShopping/>
          </div>
          <div className={Cart.length > 0 ? "absolute top-[-20px] right-[-15px] h-5 w-5 flex justify-center items-center text-white text-[12px] bg-[#fb2e86] rounded-full" : "hidden" }>
            {Cart.length}
          </div>
        </Link>
        </div>
        </div>
        {show && (
           <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
      <ul className="flex flex-col p-4 gap-4">
        <li>
          <Link className='block w-full' to="/" onClick={() => setShow(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link className='block w-full' to="/shop" onClick={() => setShow(false)}>
            Shop
          </Link>
        </li>

        <li>
          <Link  className='block w-full' to="#" onClick={() => setShow(false)}>
            About
          </Link>
        </li>

        <li>
          <Link className='block w-full' to="#" onClick={() => setShow(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
        )}
      </Container>
    </div>
  )
}

export default Navber
