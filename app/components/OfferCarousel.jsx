// src/ProductCarousel.js
import React, { useState } from 'react';
//import products from './products';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const OfferCarousel = (collections) => {
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = collections.collections;//.slice(startIndex, startIndex + 3);
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? products.length - (products.length % 3)
        : prevIndex - 3
    );
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="relative">
        <h1 className="text-center">Special Offers</h1>
        <div className="flex flex-wrap">
          {productsToShow.map((product) => (
            <div key={product.id} className="w-full flex-auto sm:w-1/2 md:w-1/3 py-2 px-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={`${product.image.url}`} // Make sure to put your images in the 'public/images/' directory
                  alt={product.name}
                  className="w-full h-auto"
                />
                <div className="coupan_code_wrapper grid grid-rows-1 grid-flow-col gap-4"> 
                  <div className="code"> { product.handle } </div>
                  {/* <div className='cpy_code'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="copy"><path fill="none" d="M0 0h48v48H0z"></path><path d="M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z"></path></svg>
                  </div> */}
                </div>
                {/* Add more product information here */}
              </div>
            </div>
          ))}
        </div>
        {/* <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ml-4 hover:bg-opacity-75"
          onClick={()=>setStartIndex((prevIndex) =>
            prevIndex === 0
              ? products.length - (products.length % 3)
              : prevIndex - 3
          )}
        >
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100'  size={40} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75"
          onClick={()=>setStartIndex((prevIndex) => (prevIndex + 3) % products.length)}
        >
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100'  size={40} />
        </button> */}
      </div>
    </div>
  );
};

export default OfferCarousel;
