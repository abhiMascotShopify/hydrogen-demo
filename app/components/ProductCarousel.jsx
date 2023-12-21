// src/ProductCarousel.js
import React, {useState} from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {useMediaQuery} from 'react-responsive';
import {
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';
//import products from './products';

const ProductCarousel = ({products}) => {
  //console.log(products)
  /*const products = [
    { id: 1, name: 'Product 1', image: 'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468' },
    { id: 2, name: 'Product 2', image: 'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468' },
    { id: 3, name: 'Product 3', image: 'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468' },
    { id: 4, name: 'Product 3', image: 'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468' },
    { id: 5, name: 'Product 3', image: 'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468' },
    { id: 6, name: 'Product 3', image: 'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/purepng.com-white-t-shirtt-shirtfabrict-shapegramnetsmenswhite-14215264292423zp8k_2677b2d8-59f3-4e10-9cb8-b26178515ac5.png?v=1693692132' },
    { id: 7, name: 'Product 3', image: 'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/purepng.com-white-t-shirtt-shirtfabrict-shapegramnetsmenswhite-14215264292423zp8k_2677b2d8-59f3-4e10-9cb8-b26178515ac5.png?v=1693692132' },
    // Add more products as needed
  ];*/

  //const products = products.edges;
  //console.log(products)

  let productsToShow = [];
  const lines = [];

  const [startIndex, setStartIndex] = useState(0);
  //const [endIndex, setEndIndex]  = useState();

  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const endIndex = isLargeScreen ? 4 : 2;

  if (products != null || products != undefined) {
    //console.log(products.edges[0].node)
    productsToShow = products.edges.slice(startIndex, startIndex + endIndex);
    //console.log(productsToShow);
  }
  //  const isMobile = useMediaQuery({ maxWidth: 640 });
  //  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  products.edges.map((product) => {
    product.node.variants.edges.map((line) => {
      if (
        line.node.metafields[0] != null &&
        line.node.metafields[0].value == 'true'
      ) {
        lines.push([
          {
            merchandiseId: line.node.id,
            quantity: 1,
          },
        ]);
      }
    });
  });

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
    <div className="w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6">
      <div className="relative">
        <div className="flex gap-4">
          {productsToShow.map((product, index) => (
            <div key={product.node.id} className="w-full ">
              <div className="bg-white rounded-lg shadow-lg p-2">
                <img
                  src={`${product.node.images.edges[0].node.url}`} // Make sure to put your images in the 'public/images/' directory
                  alt={product.node.title}
                  className="w-full h-auto"
                />
                <Link key={product.id} to={`/products/${product.node.handle}`}>
                  <h2 className="text-lg font-semibold mt-2 text-center">
                    {product.node.title}
                  </h2>
                </Link>
                <div className="h-12">
                  <h1 className="text-center font-bold h-full w-full m-auto">
                    ₹255
                  </h1>
                </div>
                {/* Add more product information here */}
                <div className="px-1 py-1 flex items-center sm:flex-row gap-3 justify-center w-[100%]">
                  <div className="w-[25%] flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 33"
                      xmlSpace="preserve"
                      className="sm:w-[43px] w-[43px] like-home"
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
                  {console.log(lines)}
                  <div className="w-[75%]">
                    <CartForm
                      route="/cart"
                      inputs={{lines: lines[index]}}
                      action={CartForm.ACTIONS.LinesAdd}
                      className="w-[83%] "
                    >
                      {(fetcher) => (
                        <>
                          <button
                            className="w-[100%] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 rounded-lg inline-block home-product"
                            type="submit"
                            onClick={() => {
                              window.location.href =
                                window.location.href + '#cart-aside';
                            }}
                          >
                            Add To cart
                          </button>
                        </>
                      )}
                    </CartForm>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute lg:left-[-150px] top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100"
          onClick={() =>
            setStartIndex((prevIndex) =>
              prevIndex === 0
                ? products.edges.length - (products.edges.length % 2)
                : prevIndex,
            )
          }
        >
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100 "
            size={30}
          />
        </button>
        <button
          className="absolute lg:right-[-150px] right-0 top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100"
          onClick={() =>
            setStartIndex(
              (prevIndex) => (prevIndex + 1) % products.edges.length,
            )
          }
        >
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={30}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
