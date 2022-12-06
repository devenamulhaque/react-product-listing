import { BsStarFill , BsStarHalf , BsStar} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Product = ({product}) => {
    //rating star function 
    const reatingStar = Array.from({length: 5 }, (elem , index) => {
        let number = index + 0.5;
        return <div key={index}>
            {
                product.rating.rate >= index + 1 ? (
                    <BsStarFill className="text-[16px] text-yellow-400" /> 
                ): product.rating.rate >= number ? (
                    <BsStarHalf className="text-[16px] text-yellow-400" />
                ) : (
                    <BsStar className="text-[16px] text-yellow-400" />
                )
            }
        </div>
    })
    return (
      <div>
          <div className="w-full h-full max-w-sm bg-white rounded-lg shadow-md flex flex-col justify-between">
              <div>
                  <NavLink to={`/SingleProduct/${product.id}`}>
                      <img className="p-8 rounded-t-lg h-[300px] w-full object-cover" src={product.image} alt="product image" />
                  </NavLink>
                  <div className="px-5">
                      <NavLink to={`/SingleProduct/${product.id}`} className="text-[16px] text-gray-800 font-semibold mb-1 block">{product.category}</NavLink>
                      <NavLink to={`/SingleProduct/${product.id}`}>
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-1">{product.title}</h5>
                      </NavLink>
                  </div>
                  <div className="flex items-center my-4 px-5">
                    <div className="flex items-center gap-1">
                        {reatingStar}
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
    )
  }
  
  export default Product  