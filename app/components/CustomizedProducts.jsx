// src/ProductCarousel.js
import React, {useState} from 'react';
import {MediaFile} from '@shopify/hydrogen-react';
//import products from './products';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';

const MobileProductCorousel = ({products, title}) => {
  const [startIndex, setStartIndex] = useState(0);
  var len = products.length;
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const eIndex = isLargeScreen ? len <= 4 ? len : 4 : 1;
  const [endIndex, setEndIndex]  = useState(eIndex);
  const productsToShow = products.slice(startIndex, endIndex);
  //console.log("productsToShow Custimized::",productsToShow)
  const nextProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex -1 : prevIndex + 1 );
    setEndIndex((prevIndex) => len == endIndex ? prevIndex-1 : prevIndex + 1);
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex -1 : prevIndex + 1 );
    setEndIndex((prevIndex) => len == endIndex ? prevIndex-1 : prevIndex + 1);
  };

  return (
      <div className="w-full max-w-screen-2xl mx-auto px-1 m-5">
        <div className="relative">
          <h1 className="text-center">{title}</h1>
            <div className="flex">
              {productsToShow.map((product) => (
                <div key={product.id} className="w-full sm:w-1/3 md:w-1/3 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-1">
                    <a href={`/products/${product.node.handle}`}>
                    <img
                      src={`${product.node.images?.edges[0].node.url}`} // Make sure to put your images in the 'public/images/' directory
                      alt={product.name}
                      className="w-full h-auto rounded-lg"
                    />
                    </a>
                    {/* Add more product information here */}
                  </div>
                </div>
              ))}
            </div>
          <button
            className="absolute left-[5px] top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full ml-1 p-2 mr-2 hover:bg-opacity-75"
            onClick={() => prevProducts() }
          >
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={20}
          />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75"
            onClick={() => nextProducts() }
          >
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={20}
            />
          </button>
        </div>
      </div>
  );
};

const DesktopCorousel = ({products, title}) => {
  const [startIndex, setStartIndex] = useState(0);
  var len = products.length;
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const eIndex = isLargeScreen ? len <= 4 ? len : 4 : 2;
  const [endIndex, setEndIndex]  = useState(eIndex);
  const productsToShow = products.slice(startIndex, endIndex);
  //console.log("productsToShow Custimized::",productsToShow)
  const nextProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex -1 : prevIndex + 1 );
    setEndIndex((prevIndex) => len == endIndex ? prevIndex-1 : prevIndex + 1);
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex -1 : prevIndex + 1 );
    setEndIndex((prevIndex) => len == endIndex ? prevIndex-1 : prevIndex + 1);
  };

  console.log("start INDEX ::",startIndex,"End Index ::",endIndex,"Length::",len);

  return (
    <div>
      <div className="w-full max-w-screen-2xl mx-auto px-1">
        <div className="relative">
          <h1 className="text-center">{title}</h1>
            <div className="flex">
              {productsToShow.map((product) => (
                <div key={product.id} className="w-full sm:w-1/3 md:w-1/3 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-1">
                    <a href={`/products/${product.node.handle}`}>
                    <img
                      src={`${product.node.images?.edges[0].node.url}`} // Make sure to put your images in the 'public/images/' directory
                      alt={product.name}
                      className="w-full h-auto rounded-lg"
                    />
                    </a>
                    {/* Add more product information here */}
                  </div>
                </div>
              ))}
            </div>
          <button
            className="absolute left-[5px] top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full ml-1 p-2 mr-2 hover:bg-opacity-75"
            onClick={() => prevProducts() }
          >
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={20}
          />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75"
            onClick={() => nextProducts() }
          >
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomizedProducts = ({products, title}) => {
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});
  //console.log('is Tablet: '+isLargeScreen);
  return (
    <div>
      {isSmall && (
        <MobileProductCorousel
          products={products}
          title={title}
        ></MobileProductCorousel>
      )}
      {isLargeScreen && (
        <DesktopCorousel products={products} title={title}></DesktopCorousel>
      )}
    </div>
  );
};

export default CustomizedProducts;
