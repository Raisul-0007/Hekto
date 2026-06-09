import React, { useContext, useState, useEffect } from 'react'
import Container from './../components/Container';
import Filter from '../components/Filter';
import Products from './../components/Products';
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { Data } from '../components/ApiData';
import { GoPlus } from "react-icons/go";
import Filter from './../components/Filter';

const Shop = () => {
   let {info} = useContext(Data)
      let [cate, cateShow] = useState(false)
      let [brandShow, brandSetShow] = useState(false)
      let [priceShow, priceSetShow] = useState(false)
      let [filterCategory, setFilterCategory] = useState([])
  
      let [category, setCategory] = useState([])
      useEffect(() => {
          setCategory([...new Set(info.map((item)=> item.category))])
      }, [info])
  
      let [brand, setBrand] = useState([])
      useEffect(()=>{
          setBrand([...new Set(info.map((item)=> item.brand))])
      })
  
      let [price, setPrice] = useState([])
      useEffect(()=>{
          setPrice([...new Set(info.map((item)=>item.price))])
      })
      
      let [show, setLow] = useState([])
      let [high, setHigh] = useState([])
      let handlePrice = ()=>{
          setLow(value.low)
          setHigh(value.high)
          let priceFilter = info.filter((item)=> item.price > value.low && value.high > item.price)
          setFilterCategory(priceFilter)
      }
  
      let handleAll = ()=>{
          setFilterCategory("")
      }
  return (
    <div>
      <Container>
        <h2 className="text-4xl font-bold py-10">Shop</h2>
        <div className="flex gap-10">
          <div className="w-1/4">
             <div className="">
            <div onClick={()=>cateShow(!cate)} className="flex cursor-pointer justify-between items-center py-5 border-b border-[#76767638]">
                <h3 className="text-xl font-bold">Shop By Category</h3>
                    {cate ? <FaSortUp /> : <FaSortDown />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${cate ? "opacity-100" : "max-h-0 opacity-0"}`}>
                <ul >
                <li onClick={handleAll}className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]"className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]">
                    <p className="text-[17px] capitalize">All</p>
                </li>
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
            <div onClick={()=>brandSetShow(!brandShow)} className="flex cursor-pointer justify-between items-center py-5 border-b border-[#76767638]">
                <h3 className="text-xl font-bold">Shop By Brand</h3>
                    {brandShow ? <FaSortUp /> : <FaSortDown />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${brandShow ? "opacity-100 transition-all duration-500 ease-in-out" : "max-h-0 opacity-0 "}`}>
                <ul>
                    <li onClick={handleAll}className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]"className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]">
                    <p className="text-[17px] capitalize">All</p>
                </li>
                    {brand.map((item)=>(
                        <li className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]" key={item}>
                            <p className="text-[17px] capitalize">{item}</p>
                            <GoPlus/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="">
            <div onClick={()=>priceSetShow(!priceShow)} className="flex cursor-pointer justify-between items-center py-5 border-b border-[#76767638]">
                <h3 className="text-xl font-bold">Shop By Price</h3>
                    {priceShow ? <FaSortUp /> : <FaSortDown />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${priceShow ? "opacity-100 transition-all duration-500 ease-in-out" : "max-h-0 opacity-0 "}`}>
                        <ul>
                            <li onClick={handleAll}className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]"className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]">
                    <p className="text-[17px] capitalize">All</p>
                </li>
                            <li onClick={()=> handlePrice({low: 0, high: 20})} className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]" >
                            <p className="text-[17px] capitalize">$0-$20</p>
                            <GoPlus/>
                        </li>
                        <li onClick={()=> handlePrice({low: 21, high: 50})} className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]" >
                            <p className="text-[17px] capitalize">$21-$50</p>
                            <GoPlus/>
                        </li>
                        <li onClick={()=> handlePrice({low: 51, high: 100})} className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]" >
                            <p className="text-[17px] capitalize">$50-$100</p>
                            <GoPlus/>
                        </li>
                        <li onClick={()=> handlePrice({low: 101, high: 500})} className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]" >
                            <p className="text-[17px] capitalize">$101-$500</p>
                            <GoPlus/>
                        </li>
                        <li onClick={()=> handlePrice({low: 501, high: 1000})} className="flex justify-between cursor-pointer items-center border-b py-2 border-[#76767638]" >
                            <p className="text-[17px] capitalize">$501-$1000</p>
                            <GoPlus/>
                        </li>
                        </ul>
            </div>
        </div>
          </div>
          <div className="w-3/4">
            <Filter filterCategory={filterCategory}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop
