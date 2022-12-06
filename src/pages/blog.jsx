import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../components/blogCard';
const Blog = () => {
    const [blogs, setblogs] = useState();
    const [visible, setVisible] =useState(6);

    const showMore = () => {
        setVisible(visible + 3);
        // console.log(products.length)
        // console.log(visible + 3)
    }
    const fetchBlog = async () => {
        const res = await axios.get('https://admin.electronthemes.com/api/blogs');
        setblogs(res.data);
        console.log(res)
    }
    useEffect(() => {
        fetchBlog();
    }, [])
    const blogData = blogs?.data
    const blogLenght = blogData?.length

    const slice = blogData?.slice(0, visible)
  return (
    <div className="max-w-[1199px] mx-auto my-[100px]">
        <div className='grid grid-cols-3 gap-8'>
            {slice?.map ( blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
        {/* //load more options */}
        {blogLenght >= visible  ? (
            <div className='flex justify-center w-ful'>
                <button 
                className=' text-white bg-slate-800 hover:bg-slate-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-[50px]'
                onClick={showMore}
                >
                    load more
                </button>
            </div>
            ) : ""
        }
    </div>
  )
}

export default Blog
