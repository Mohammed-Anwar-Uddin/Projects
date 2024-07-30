import React from 'react'

function Pagination({blogs,currentPage,pageSize,onPageChange}) {
    const totalPages = Math.ceil(blogs.length / pageSize)
    // console.log(totalPages);
    const renderPagination = () =>{
        return Array.from({length:totalPages},(_,i) =>i+1).map((pageNumber)=>{
            return(
            <li className={pageNumber ===currentPage ?'activepagination':''} key={pageNumber}>
                <a href="#" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
            )
        })
    }
    console.log(currentPage>=totalPages);
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={()=> onPageChange(currentPage-1)} disabled={currentPage ===1}>Previous</button>
        </li>
        <div className='flex gap-1'>{renderPagination()}</div>
        <li >
            <button onClick={()=> onPageChange(currentPage+1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </li>
    </ul>
  )
}

export default Pagination