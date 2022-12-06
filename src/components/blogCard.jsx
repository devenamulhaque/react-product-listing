import React from 'react'
import { NavLink } from 'react-router-dom'
const blogCard = ({blog}) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg  h-full">
        <NavLink to={`/singleblog/${blog.slug}`} className='h-[250px] w-full block '>
            <img className="rounded-t-lg h-full w-full object-cover" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </NavLink>
        <div className="p-5 cont-height flex flex-col justify-between">
            <div>
                <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 line-clamp-2">{blog.title}</h5>
                </a>
                <p className="font-normal text-gray-700 mb-3 line-clamp-3">{blog.excerpt}</p>
            </div>
            <div>
                <NavLink to={`/singleblog/${blog.id}`} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default blogCard
