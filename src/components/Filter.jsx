import React, { useContext, useState } from 'react'
import { Data } from './ApiData';

const Filter = () => {
   let {info} = useContext(Data)

   let [perPage, setPerPage] = useState(6)
   let [currentPage, setCurrentPage] = useState(1)
   let everyPage = perPage * currentPage
   let lastPage = everyPage - perPage
   let allPage = info.slice(lastPage, everyPage)

   let pageNumber = []
    for (let i = 1; i <= Math.ceil(info.length/perPage); i++) {
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
        setPerPage(e.target.value)
    }

  return (
    <div>                                                                                           
       
    </div>
  )
}

export default Filter
