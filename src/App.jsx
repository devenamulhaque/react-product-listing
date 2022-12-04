import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './components/blog'
const App = () => {
  const [blog, setBlog] = useState();
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get('https://api.quotable.io/random');
      setBlog(res.data);
    }
    fetchQuote();
  }, [])
  return (
    <div className='flex justify-center items-center my-[200px]'>

        <Blog blog={blog}/>
    </div>
  )
}

export default App
