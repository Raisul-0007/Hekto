import React, { useContext, useEffect, useState } from 'react'
import { Data } from './ApiData';
import Products from './Products';
import { FaListUl } from 'react-icons/fa';
import { FaTableCellsLarge } from 'react-icons/fa6';
import Pagination from './Pagination';

const Filter = ({filterCategory}) => {

    console.log(filterCategory);
    
   let [perPage, setPerPage] = useState(9)
   let [currentPage, setCurrentPage] = useState(1)
   let everyPage = perPage * currentPage
   let lastPage = everyPage - perPage
   let allPage = filterCategory.slice(lastPage, everyPage)

   let pageNumber = []
    for (let i = 1; i <= Math.ceil(filterCategory.length/perPage); i++) {
        pageNumber.push(i)
    }
    let prev = ()=>{
        if(currentPage > 1 ){
            setCurrentPage((index)=> index - 1)
        }
    }
    let paginate = (index)=>{
        setCurrentPage(index + 1)
    }
    let next = ()=>{
        if(currentPage < pageNumber.length){
            setCurrentPage((index)=> index + 1)
        }
    }
    let handlePageNumber = (e)=>{
        setPerPage(Number(e.target.value))
        setCurrentPage(1)
    }

    let [active, setActive] = useState("")
    let handleActive = ()=>{
        setActive("active")
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [filterCategory])
  return (
    <div>                                                                                           
       <div className="flex justify-between">
        <div  className="flex gap-2">
        <div onClick={()=>setActive("")} className={`${active === "" ? "border border-[#fb2e86] p-1 text-white bg-[#fb2e86] ease-in-out transition-all duration-300 rounded-md" : "p-1 border border-[#fb2e86] text-[#fb2e86] hover:text-white hover:border-[#fb2e86] hover:bg-[#fb2e86] ease-in-out transition-all duration-300 rounded-md"}`}>
            <FaTableCellsLarge/>
        </div>
        <div onClick={handleActive} className={`${active === "active" ? "border border-[#fb2e86] p-1 text-white bg-[#fb2e86] ease-in-out transition-all duration-300 rounded-md" : "p-1 border border-[#fb2e86] text-[#fb2e86] hover:text-white hover:border-[#fb2e86] hover:bg-[#fb2e86] ease-in-out transition-all duration-300 rounded-md"}`}>
            <FaListUl/>
        </div>
       </div>
       <div className="flex gap-5">
        <h4>Short by:</h4>
        <select onChange={handlePageNumber} className='cursor-pointer border border-[#fb2e86] text-[#fb2e86] pl-4'>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
        </select>
       </div>
       </div>
       <div className="">
        <Products filterCategory={filterCategory}  active={active} allPage={allPage} />
       </div>
       <div className="">
        <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage} filterCategory={filterCategory} allPage={allPage}/>
       </div>
    </div>
  )
}

export default Filter
