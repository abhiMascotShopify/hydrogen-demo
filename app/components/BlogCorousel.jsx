// src/ProductCarousel.js
import React, {useState} from 'react';
//import products from './products';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';

const MobileProductCorousel = ({products}) => {
  const [startIndex, setStartIndex] = useState(0);
  //console.log(products)
  //const productsToShow = products.slice(startIndex, startIndex + 5);
  //console.log(productsToShow)

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-1">
      <div className="relative">
        <h1 className="text-center mt-0 lg:text-[28px] text-[20px]">
          Choose Your Own Fashion
        </h1>
        <div className="flex  gap-2 overflow-y-auto">
          {products.nodes.map((product) => (
            <img
              src={`${product.articles.edges[0].node.image.url}`} // Make sure to put your images in the 'public/images/' directory
              alt={product.title}
              className="mst-card lg:w-full lg:h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3 w-[320px] h-[40%]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopCorousel = ({products}) => {
  const [startIndex, setStartIndex] = useState(0);

  const productsToShow = products.nodes.slice(startIndex, startIndex + 3);
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
          <h1 className="text-center">Blogs</h1>
          <div className="flex">
            {productsToShow.map((product) => (
              <div key={product.id} className="w-full sm:w-1/3 md:w-1/3 px-4">
                <div className="bg-white  rounded-lg shadow-lg p-1">
                  <a href={`/blogs/${product.handle}`}>
                    <img
                      src={`${product.articles.edges[0].node.image.url}`} // Make sure to put your images in the 'public/images/' directory
                      alt={product.title}
                      className="mst-card w-full h-auto rounded-lg"
                    />
                  </a>
                  {/* Add more product information here */}
                </div>
              </div>
            ))}
          </div>
          {products.length > 3 &&
          <>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75 text-white"
            onClick={() =>
              setStartIndex((prevIndex) =>
                prevIndex === 0
                  ? products.length - (products.length % 3)
                  : prevIndex - 1,
              )
            }
          >
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
              size={40}
            />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75 text-white"
            onClick={() =>
              setStartIndex((prevIndex) => (prevIndex + 3) % products.length)
            }
          >
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
              size={40}
            />
          </button>
          </>
          }
        </div>
      </div>
    </div>
  );
};

const BlogCorousel = ({collections}) => {
  //console.log(collections);
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});
  //console.log('is Tablet: '+isLargeScreen);

  return (
    <div>
      {isSmall && (
        <MobileProductCorousel products={collections}></MobileProductCorousel>
      )}
      {isLargeScreen && (
        <DesktopCorousel products={collections}></DesktopCorousel>
      )}
    </div>
  );
};

export default BlogCorousel;
