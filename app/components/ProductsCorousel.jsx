// src/ProductCarousel.js
import React, {useState} from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {useMediaQuery} from 'react-responsive';
//import products from './products';

const ProductsCorousel = ({products}) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129"
  let productsToShow = [];
  const [startIndex, setStartIndex] = useState(0);
  //const [endIndex, setEndIndex]  = useState();

  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const endIndex = isLargeScreen ? 4 : 2;
 
  if (products != null || products != undefined) {
    productsToShow = products.edges.slice(startIndex, startIndex + endIndex);
    //console.log(productsToShow);
  }

  const goToProduct=(url_path)=>{
    window.location.href = url_path
  }
  //  const isMobile = useMediaQuery({ maxWidth: 640 });
  //  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  // products.slice(startIndex, startIndex + 3);

  //const nextProducts = () => {
  //  setStartIndex((prevIndex) => (prevIndex + 2) % products.length);
  //};

  //const prevProducts = () => {
  // setStartIndex((prevIndex) =>
  //  prevIndex === 0
  //   ? products.length - (products.length % 2)
  //   : prevIndex - 2
  //);
  //};

  return (
    <div className="w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6 py-6">
      <div className="relative">
        <div className="flex mobile-productView">
          {productsToShow.map((product) => (
            <div key={product.node.id}
              className="cursor w-full sm:w-1/3 md:w-1/3 lg:px-4 sm:px-1 md:px-3"
            >
              <div className="bg-white rounded-lg shadow-lg p-2 shadow-md">
                <div className='cursor' onClick={()=> goToProduct(`/products/${product.node.handle}`)}>
                  <img
                    src={`${ product.node.images.edges.length > 0 ? product.node.images.edges[0].node.url : noImg }`} // Make sure to put your images in the 'public/images/' directory
                    alt={product.node.title}
                    className="w-full h-auto"
                  />
                  <h2 className="text-lg font-semibold mt-2 text-center">
                    {product.node.title}
                  </h2>
                  <div className="h-12">
                    <h1 className="text-center font-bold h-full w-full m-auto">
                      ₹255
                    </h1>
                  </div>
                </div>
                {/* Add more product information here */}
                <div className="px-1 py-1 flex justify-between items-center  sm:flex-row flex-row">
                  <div className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 33"
                      xmlSpace="preserve"
                      width="2.8em"
                      height="2.8em"
                    >
                      <path
                        d="M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z"
                        fill="rgb(255, 255, 255)"
                        stroke="rgb(0, 0, 0)"
                      ></path>
                      <path
                        d="M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z"
                        fill="none"
                        stroke="rgb(0, 0, 0)"
                      ></path>
                    </svg>
                  </div>
                  <button className="w-full h-11 bg-black hover:bg-blue-700 text-white text-[13px] sm:text-[18px] font-bold py-1 px-1 rounded-lg">
                    ADD TO Pro
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ml-4 hover:bg-opacity-75"
          onClick={() =>
            setStartIndex((prevIndex) =>
              prevIndex === 0
                ? products.edges.length - (products.edges.length % 2)
                : prevIndex,
            )
          }
        >
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
        />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75"
          onClick={() =>
            setStartIndex(
              (prevIndex) => (prevIndex + 1) % products.edges.length,
            )
          }
        >
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
        />
        </button>
      </div>
    </div>
  );
};

export default ProductsCorousel;
