import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header'
import Footer from './components/footer'
import Product from './components/Product'
const App = () => {

  //Product api call here
  const [products, setProducts] = useState(null);
  const [visible, setVisible] =useState(6);

  const showMore = () => {
    setVisible(visible + 3);
    console.log(products.length)
    console.log(visible + 3)
  }

  const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  const proLenght = products?.length
  
  const slice = products?.slice(0, visible)
  return (
    <>
      <Header />
      <div className='text-center'>
        <div className='grid grid-cols-3  max-w-[1199px] mx-auto gap-y-16 gap-[20px] my-[100px]'>
          {
            slice?.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>
        {proLenght >= visible  ? (
            <button 
            className=' text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-[100px]'
            onClick={showMore}
          >
              load more
          </button>
          ) : (
            <p className='mb-[100px] text-center'>no more post</p>
          )
        }
      </div>
      <Footer />
    </>
  )
}

export default App