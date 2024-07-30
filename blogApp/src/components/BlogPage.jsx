import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'
import Category from './Category'
import SideBar from './SideBar'

function BlogPage() {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12
    const [selectedCategory,setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)
    const fetchBlog = async ()=>{
        let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
        if(selectedCategory){
            url += `&category=${selectedCategory}`
        }
        const response = await fetch(url)
        const data = await response.json()
        setBlogs(data)

    }

    useEffect(()=>{
        fetchBlog()
        
    },[currentPage, pageSize, selectedCategory])

    // page changing function
    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const handleCategoryChange = (category) =>{
        setSelectedCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)
    }

  return (
    <div>
        {/* category section */}
        <div><Category onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} /></div>

        {/* blogCards section */}
        <div className='flex flex-col lg:flex-row lg:w-full gap-12 '>
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
        <div>
            <SideBar />
        </div>
        
        </div>

        {/* pagination section */}
        <div><Pagination blogs={blogs} currentPage={currentPage}  pageSize={pageSize} onPageChange={handlePageChange}/></div>
    </div>
  )
}

export default BlogPage