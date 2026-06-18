import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeCart } from '../components/cart/cartSlice'
import Container from '../components/Container'
import { RxCross2 } from 'react-icons/rx'
import { FiMinus } from 'react-icons/fi'
import { FiPlus } from "react-icons/fi";


const Cart = () => {
  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])

   let dispatch = useDispatch()
   let cartData = useSelector((state)=> state.cart.cartItem)

   let handleRemove = (item)=>{
    dispatch(removeCart(item))
   }
   let handleIncreament = (item)=>{
    dispatch(increment(item))
   }
   let handleDecrement = (item)=>{
    dispatch(decrement(item))
   }
  return (
    <div>
      <Container>
        <div className="py-20">
          <h2 className='text-4xl font-bold'>Cart</h2>
        </div>
        {cartData.length > 0 ?(
          <div className="">
            <div className="bg-[#fb2e86] flex">
              <div className="w-1/4 border-2 border-r-0 border-[#5f3ed8] py-3 text-center text-white">
                <h2>Product</h2>
              </div>
              <div className="w-1/4  border-2 border-r-0 border-[#5f3ed8] py-3 text-center text-white">
                <h3>Price</h3>
              </div>
              <div className="w-1/4 border-2 border-r-0 border-[#5f3ed8] py-3 text-center text-white">
                <h3>Quantity</h3>
              </div>
              <div className="w-1/4 border-2 border-[#5f3ed8] py-3 text-center text-white">
                <h3>Total</h3>
              </div>
            </div>
            {cartData.map((item)=>(
            <div className="flex ">
              <div className="w-1/4 border border-r-0 border-[#5f3ed8] py-3 text-center flex items-center gap-3">
              <div onClick={()=>handleRemove(item)}className=" h-4 w-4 text-sm flex items-center justify-center cursor-pointer border">
                  <RxCross2 />
                    </div>
              <h3 className='font-bold text-xl'>{item.title.slice(0, 25)}</h3>
              </div>
              <div className="w-1/4 border border-r-0 border-[#5f3ed8] py-3 text-center ">${item.discountPercentage ? (item.price -(item.price * item.discountPercentage) / 100).toFixed(2) : ''}</div>
              <div className="w-1/4 border border-r-0 border-[#5f3ed8] py-3 text-center  flex items-center justify-center gap-2">
                <button onClick={()=> handleDecrement(item)} className="border h-5 w-5 text-sm flex justify-center items-center"><FiMinus /></button>
                <div className="">{item.qun}</div>
                <button onClick={()=> handleIncreament(item)} className="border h-5 w-5 text-sm flex justify-center items-center"><FiPlus/></button>
              </div>
              <div className="w-1/4 border border-[#5f3ed8] py-3 text-center ">${item.discountPercentage ? ((item.price -(item.price * item.discountPercentage) / 100) * item.qun).toFixed(2) : ''} </div>
            </div>
            ))}
          </div>
        ):(
          <div className="py-30 ">
            <h4 className='text-center text-3xl '>No Product</h4>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Cart
