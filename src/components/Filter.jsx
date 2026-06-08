import React, { useContext, useState, useEffect } from 'react'
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { Data } from './ApiData';
import { GoPlus } from "react-icons/go";

const Filter = () => {
    let {info} = useContext(Data)
    let [cate, cateShow] = useState(false)
    let [brandShow, brandSetShow] = useState(false)

    let [category, setCategory] = useState([])
    useEffect(() => {
        setCategory([...new Set(info.map((item)=> item.category))])
    }, [info])
    let [brand, setBrand] = useState([])
  return (
    <div>                                                                                           
        <div className="">
            <div onClick={()=>cateShow(!cate)} className="flex cursor-pointer justify-between items-center py-5 border-b border-[#76767638]">
                <h3 className="text-xl font-bold">Shop By Category</h3>
                    {cate ? <FaSortUp /> : <FaSortDown />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${cate ? "opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="">
            {category.map((item)=>(
            <li className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]" key={item}>
                <p className="text-[17px] capitalize">{item}</p>
                <GoPlus/>
            </li>
            ))}
            </ul>
            </div>
        </div>
        <div className="">
            <div className="flex cursor-pointer justify-between items-center py-5 border-b border-[#76767638]">
                <h3 className="text-xl font-bold">Shop By Brand</h3>
                    {cate ? <FaSortUp /> : <FaSortDown />}
            </div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Filter
