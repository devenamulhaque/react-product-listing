import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
const home = () => {
  //Product api call here
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

//  show product call here
  const [visible, setVisible] = useState(6);
  const showMore = () => {
    setVisible(visible + 3);
    // console.log(products.length)
    // console.log(visible + 3)
  };
  //load more button condition var
  const proLenght = products?.products?.length;

// product show function call here
  const [selectedCategory, setSelectedCategory] = useState();

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return products?.products;
    }
    return products?.products?.filter(
      (item) => item.category === selectedCategory
    );
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [
    selectedCategory,
    products?.products,
  ]);
  const slice = filteredList?.slice(0, visible);

//   select category function
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <div>
      <div className="text-center max-w-[1199px] mx-auto my-[100px]">
        <div className="flex items-center gap-4 justify-center py-8">
          <div>Filter by Category:</div>
          <div>
            <select onChange={handleCategoryChange} className="border">
              <option value="">All</option>
              {products?.products?.map((element, index) => (
                <option key={index} value={element?.category}>
                  {element?.category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-y-16 gap-[20px]">
          {slice?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
          {/* {
            slice?.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
            }  */}
        </div>
        {proLenght >= visible ? (
          <button
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-[50px] mb-[100px]"
            onClick={showMore}
          >
            load more
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default home;
