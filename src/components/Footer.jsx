import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className="bg-[#eeeffb] py-5">
      <Container>
        <div className="flex justify-between">
            <div className="">
                <img src={logo} alt="logo" />
            </div>
            <div className="">
                <input className="pl-5 pr-10 py-2 rounded-l-xl bg-white text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eeeffb]" type="text" placeholder="Enter your email" />
                <button className="bg-[#ff0073] py-2 px-3 rounded-r-xl text-white">Sign up</button>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
