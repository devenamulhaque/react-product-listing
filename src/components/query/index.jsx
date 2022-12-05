import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../header'
import Footer from '../footer'
import { BsStarFill , BsStarHalf , BsStar} from "react-icons/bs";
import { NavLink } from "react-router-dom";
const query = () => {
    
//Product api call here
const [products, setProducts] = useState(null);
const [visible, setVisible] =useState(6);
const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
}
useEffect(() => {
    fetchProducts();
}, [])

const showMore = () => {
    setVisible(visible + 3);
    // console.log(products.length)
    // console.log(visible + 3)
}

const proLenght = products?.length

const slice = products?.slice(0, visible)


  return (
    <div>
        <Header />

        <div className='text-center'>
            <div className='grid grid-cols-3  max-w-[1199px] mx-auto gap-y-16 gap-[20px] my-[100px]'>
                {
                slice?.map(product => (
                    <div key={product.id}>
                        <div className="w-full h-full max-w-sm bg-white rounded-lg shadow-md flex flex-col justify-between">
                            <div>
                                <NavLink to="/live">
                                    <img className="p-8 rounded-t-lg h-[300px] w-full object-cover" src={product.image} alt="product image" />
                                </NavLink>
                                <div className="px-5">
                                    <a href="#" className="text-[16px] text-gray-800 font-semibold mb-1 block">{product.category}</a>
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-1">{product.title}</h5>
                                    </a>
                                </div>
                                <div className="flex items-center my-4 px-5">
                                    <div className="flex items-center gap-1">
                                       rating
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating.rate}</span>
                                </div>
                                
                            </div>
                            <div className="px-5 pb-5">
                                <p className="line-clamp-2 mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
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
                ) : ""
            }
        </div>

        <Footer />
    </div>
  )
}

export default query
