import React ,  { useEffect, useState  } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { IoIosWoman, IoIosDocument, IoMdTime} from  "react-icons/io";

const singleBlog = () => {

    const { id } = useParams();
    const [singleBlogs, setSingleBlog] = useState(null);
    const fetchSingleProducts = async () => {
        const res = await axios.get(`https://admin.electronthemes.com/api/blogs/${id}`);
        setSingleBlog(res.data);
    }
    useEffect(() => {
        fetchSingleProducts();
        
    }, [])
  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
          <a href="#" className="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">{singleBlogs?.data?.title}</a>
            
          <a href="#">
              <img className="w-full my-4" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500" alt="Sunset in the mountains" />
          </a> 
          <p className="text-gray-700 text-base leading-8 max-w-2xl mx-auto">
            {singleBlogs?.data?.excerpt}
          </p>
          <div className="py-5 text-sm font-regular text-gray-900 flex items-center justify-center">
            <span className="mr-3 flex flex-row items-center">
              <IoMdTime />
              <span className="ml-1">6 mins ago</span>
            </span>
            <a href="#" className="flex flex-row items-center hover:text-indigo-600  mr-3">
                <IoIosWoman />
                <span className="ml-1">AliSher Azimi</span>
            </a>
            <a href="#" className="flex flex-row items-center hover:text-indigo-600">
              <IoIosDocument />
              <span className="ml-1">activewear</span>
            </a>
          </div>
          <hr />
          
        </div>
        <div className='prose mx-auto' dangerouslySetInnerHTML={{__html: singleBlogs?.data?.body}}></div>
      </div>
    </div>
  )
}

export default singleBlog
