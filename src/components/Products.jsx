import React, { useEffect, useState } from 'react'

const Products = ({filterCategory, active, allPage}) => {
  let [allFilter, setAllFilter] = useState([])
  
  useEffect(()=>{})
  return (
    <div>
      {filterCategory.map((item)=>{
        <div className="">
          {item.category}
        </div>
      })}
    </div>
  )
}

export default Products
