import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';

const GiftingCollection = ({collections,title}) => {
  let productsToShow = [];
  const [startIndex, setStartIndex] = useState(0);
  const isLargeScreen = useMediaQuery({minWidth: 1024});
//   const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
//   const [endIndex, setEndIndex]  = useState(eIndex);
//   var len = products.length;
//   if (products != null || products != undefined) {
//     productsToShow = products.slice(startIndex, endIndex);
//     console.log("productsToShow::",productsToShow);
//   }
  const goToCollection=(url_path)=>{
    window.location.href = url_path
  }

return (
<div className="recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6">
<h1 className="text-center lg:text=[28px] text-[20px] mt-[15px]">
      {title}
</h1> 
<div className="relative">
    <div className="flex gap-4">
      {collections.map((coll, index) => {
        return <div key={`gift_${index}`} className="w-full">
            <div className={`p-1 sm:p-2`}>
              <img
                onClick={()=> goToCollection(`/collections/${coll.handle}`)}
                src={coll.image.url} // Make sure to put your images in the 'public/images/' directory
                alt={coll.title}
                className="lg:w-full lg:h-auto rounded-lg h-[40%] w:[100%] sm:w-[375px] sm:w-[250px]   cursor"
              />
          </div>
        </div>
        })}
  </div>
</div>
</div>

  );
};

// const DesktopCorousel = ({products,title}) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const productsToShow = products.slice(startIndex, startIndex + 3);
//   //console.log("DesktopCorousel::",productsToShow)
//   const isMobile = useMediaQuery({maxWidth: 640});
//   const nextProducts = () => {
//     setStartIndex((prevIndex) => (prevIndex + 4) % products.length);
//   };

//   const prevProducts = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - (products.length % 3) : prevIndex - 1,
//     );
//   };

//   return (
//     <div>
//       <div className="w-full max-w-screen-2xl mx-auto px-1">
//         <div className="relative">
//           <h1 className="text-center">{title}</h1>
//           <div className="flex w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6">
//             {productsToShow.map((product) => (
//               <div key={product.id} className="w-full sm:w-1/3 md:w-1/3 px-4">
//                 <div className="cursor mst-card bg-white rounded-lg shadow-lg p-1">
//                   <a href={`/collections/${product.handle}`}>
//                     <img
//                       //src={`${product.image.url}`} // Make sure to put your images in the 'public/images/' directory
//                       src={product.image?.url}
//                       alt={product.title}
//                       className="w-full h-auto rounded-lg"
//                     />
                    
//                   </a>
//                   {/* Add more product information here */}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white"
//             onClick={() =>
//               setStartIndex((prevIndex) =>
//                 prevIndex === 0
//                   ? products.length - (products.length % 3)
//                   : prevIndex - 1,
//               )
//             }
//           >
//             <MdChevronLeft
//               className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
//               size={40}
//             />
//           </button>
//           <button
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white"
//             onClick={() =>
//               setStartIndex((prevIndex) => (prevIndex + 3) % products.length)
//             }
//           >
//             <MdChevronRight
//               className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
//               size={40}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const CustomizedCollection = ({collections,title}) => {
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});
  //console.log('is Tablet: '+isLargeScreen);

  return (
    <div>
       <DesktopCorousel products={collections} title={title}></DesktopCorousel>
      {/* {isSmall && (
        <MobileProductCorousel products={collections} title={title}></MobileProductCorousel>
      )}
      {isLargeScreen && (
        <DesktopCorousel products={collections} title={title}></DesktopCorousel>
      )} */}
    </div>
  );
};

export default GiftingCollection;
