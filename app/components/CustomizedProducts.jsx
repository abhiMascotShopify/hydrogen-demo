// src/ProductCarousel.js
import React, {useState} from 'react';
//import products from './products';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';

const MobileProductCorousel = ({products, title}) => {
  const [startIndex, setStartIndex] = useState(0);

  const productsToShow = products.slice(startIndex, startIndex + 5);
  //console.log(productsToShow)

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-1 ">
      <div className="relative">
        <h1 className="text-center">{title}</h1>
        <div className="flex overflow-y-auto product-40">
          {products.map((product) => (
            <img
              src={`${product.images.nodes[0]?.url}`} // Make sure to put your images in the 'public/images/' directory
              alt={product.name}
              className="w-full h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3 mr-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopCorousel = ({products, title}) => {
  const [startIndex, setStartIndex] = useState(0);

  const productsToShow = products.slice(startIndex, startIndex + 3);
  //console.log(productsToShow)
  const isMobile = useMediaQuery({maxWidth: 640});

  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? products.length - (products.length % 3) : prevIndex - 1,
    );
  };

  return (
    <div>
      <div className="w-full max-w-screen-2xl mx-auto px-1">
        <div className="relative">
          <h1 className="text-center">{title}</h1>
          <div className="flex">
            {productsToShow.map((product) => (
              <div key={product.id} className="w-full sm:w-1/3 md:w-1/3 px-4">
                <div className="bg-white rounded-lg shadow-lg p-1">
                  <img
                    src={`${product.images.nodes[0].url}`} // Make sure to put your images in the 'public/images/' directory
                    alt={product.name}
                    className="w-full h-auto rounded-lg"
                  />
                  {/* Add more product information here */}
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute left-[5px] top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full ml-1 p-2 mr-2 hover:bg-opacity-75"
            onClick={() =>
              setStartIndex((prevIndex) =>
                prevIndex === 0
                  ? products.length - (products.length % 3)
                  : prevIndex - 1,
              )
            }
          >
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={20}
            />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75"
            onClick={() =>
              setStartIndex((prevIndex) => (prevIndex + 3) % products.length)
            }
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
