import React from 'react'

const Pagination = ({pageNumber,paginate,next,prev,currentPage,allPage}) => {
  return (
    <div className='py-5 '>
       <nav aria-label="Page navigation example" >
        <ul className='flex justify-center'>
            <li className='border text-white h-8 px-5 rounded-l-xl flex text-sm my-auto bg-[#fb2e86] border-[#fb2e86] cursor-pointer' onClick={prev}>
                <button>Prev</button>
            </li>
            {pageNumber.map((item, i)=>(
                <li  onClick={()=>paginate(i)}>
                    <button className={`${currentPage == i + 1 ? "border text-white h-8 w-8 bg-[#fb2e86] border-[#fb2e86] cursor-pointer" : "cursor-pointer hover:bg-[#fb2e86] hover:text-white border h-8 w-8 text-[#fb2e86] border-[#fb2e86]"}`}>{item}</button>
                </li>
            ))}
            <li className='border text-white h-8 px-5 rounded-r-xl flex text-sm my-auto bg-[#fb2e86] border-[#fb2e86] cursor-pointer' onClick={next}>
                <button>Next</button>
            </li>
        </ul>
       </nav>
    </div>
  )
}

export default Pagination
