import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './components/Product'
const App = () => {
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <div className='grid grid-cols-3  max-w-[1199px] mx-auto gap-y-16 gap-[20px] my-[100px]'>
      {
        products?.map(product => (
          <Product key={product.id} product={product} />
        ))
      }
      
    </div>
  )
}

export default App