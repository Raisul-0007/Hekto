import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-[#5f3ed8] py-2 flex justify-between items-center text-white">
        <div className=" flex justify-between items-center gap-5 text-sm">
        <div className="flex items-center gap-2">
          <CiMail />
          <p>raisulislamriat007@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <FiPhoneCall />
          <p>+8801516508715</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex gap-2 items-center">
          <FaRegUserCircle />
          <p>Login</p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <BsCart2 />
          <div className="">
            Cart
          </div>
        </div>
      </div>
      </div>
  )
}

export default Header