import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './components/blog'
const App = () => {
  const [blog, setBlog] = useState(null);
  const fetchQuote = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setBlog(res.data);
  }
  useEffect(() => {
    fetchQuote();
  }, [])
  return (
    <div className='grid grid-cols-3  max-w-[1199px] mx-auto gap-y-16 gap-[20px] my-[100px]'>
      {
        blog?.map(single => (
          <Blog key={single.id} single={single} />
        ))
      }
      
    </div>
  )
}

export default App