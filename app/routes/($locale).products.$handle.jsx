import {Suspense} from 'react';
import {defer, redirect} from '@shopify/remix-oxygen';
import {Await, Link, useLoaderData} from '@remix-run/react';
import React, {useState} from 'react';
import ProductsCorousel from '~/components/ProductsCorousel';

import {
  Image,
  Money,
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';
import {getVariantUrl} from '~/utils';

export const meta = ({data}) => {
  return [{title: `Hydrogen | ${data.product.title}`}];
};

export async function loader({params, request, context}) {
  const {handle} = params;
  const {storefront} = context;

  const selectedOptions = getSelectedProductOptions(request).filter(
    (option) =>
      // Filter out Shopify predictive search query params
      !option.name.startsWith('_sid') &&
      !option.name.startsWith('_pos') &&
      !option.name.startsWith('_psq') &&
      !option.name.startsWith('_ss') &&
      !option.name.startsWith('_v'),
  );

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  // await the query for the critical product data
  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions},
  });

  const products = await storefront.query(PRODUCTS_QUERY);
  // console.log(products.products.edges);

  const productsreturn = products.products;
  //console.log(product.variants.nodes[0].image.url);
  //console.log(product.variants.nodes[0]);

  // In order to show which variants are available in the UI, we need to query
  // all of them. But there might be a *lot*, so instead separate the variants
  // into it's own separate query that is deferred. So there's a brief moment
  // where variant options might show as available when they're not, but after
  // this deffered query resolves, the UI will update.
  const variants = storefront.query(VARIANTS_QUERY, {
    variables: {handle},
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  const firstVariant = product.variants.nodes[0];
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option) => option.name === 'Title' && option.value === 'Default Title',
    ),
  );

  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant;
  } else {
    // if no selected variant was returned from the selected options,
    // we redirect to the first variant's url with it's selected options applied
    if (!product.selectedVariant) {
      return redirectToFirstVariant({product, request});
    }
  }
  return defer({product, variants, productsreturn});
}

function redirectToFirstVariant({product, request}) {
  const url = new URL(request.url);
  const firstVariant = product.variants.nodes[0];

  throw redirect(
    getVariantUrl({
      pathname: url.pathname,
      handle: product.handle,
      selectedOptions: firstVariant.selectedOptions,
      searchParams: new URLSearchParams(url.search),
    }),
    {
      status: 302,
    },
  );
}

//const [activeImg, setActiveImage] = useState(0)

export default function Product() {
  const {product, variants, productsreturn} = useLoaderData();
  const {selectedVariant} = product;
  console.log("selectedVariant ::",selectedVariant);
  return (
    <>
      {/*<ProductVariantColrousel className="col-span-1 overflow-x-auto" product={product}></ProductVariantColrousel>*/}
      {/*<ProductImage image={selectedVariant?.image} />*/}
      <ProductMain
        selectedVariant={selectedVariant}
        product={product}
        variants={variants}
      />
      {productsreturn && <ProductsCorousel products={productsreturn} />}
    </>
  );
}

function ProductImage({image, activeImg, setActiveImage, product}) {
  const ImageSrc = [];

  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });

  //console.log(ImageSrc)

  const [images, setImages] = useState(ImageSrc);
  //const [activeImg, setActiveImage] = useState(images[0])
  // console.log(image)
  if (!image) {
    return <div className="" />;
  }
  return (
    <>
      <div className="lg:grid flex flex-col-reverse lg:grid-cols-[20%_80%] gap-2 lg:gap-0 items-center">
        <div className="flex  lg:flex-col  justify-between lg:h-[325px] overflow-x-auto gap-[5px]">
          {product.images.edges &&
            product.images.edges.map((item, index) => (
              <img
                src={images[index]}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer product-image-caro"
                onClick={() => setActiveImage(images[index])}
              />
            ))}
        </div>
        <img
          src={activeImg}
          alt=""
          className="w-[90%] border border-[#e5e5e5] h-full aspect-square object-cover rounded-xl p-[10px] border-1 border-[#e5e5e5]"
        />
      </div>
    </>
  );
}

function ProductMain({selectedVariant, product, variants}) {
  {
    /*const {title, descriptionHtml} = product;
  return (
    <div className="col-span-5">
      <h1>{title}</h1>
      <ProductPrice selectedVariant={selectedVariant} />
      <div className='shadow-2xl bg-grey'>
      AVAILABLE OFFERS!!
      </div>
      <br />
      <Suspense
        fallback={
          <ProductForm
            product={product}
            selectedVariant={selectedVariant}
            variants={[]}
          />
        }
      >
        <Await
          errorElement="There was a problem loading product variants"
          resolve={variants}
        >
          {(data) => (
            <ProductForm
              product={product}
              selectedVariant={selectedVariant}
              variants={data.product?.variants.nodes || []}
            />
          )}
        </Await>
      </Suspense>
      <br />
      <br />
      <p>
        <strong>Description</strong>
      </p>
      <br />
      <div dangerouslySetInnerHTML={{__html: descriptionHtml}} />
      <br />
    </div>
          );*/
  }

  //console.log(product)

  /*const [images, setImages] = useState({
              img0 : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
              img1 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
              img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
              img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
          })*/
  const ImageSrc = [];

  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });

  //console.log(ImageSrc)

  const [images, setImages] = useState(ImageSrc);

  const expaction = product.metafields[0]?.value;
  //console.log(expaction)
  const key_ingredients = product.metafields[1]?.value;
  const How_To_use = product.metafields[2]?.value;
  const who_can_use = product.metafields[3]?.value;
  const why_us = product.metafields[4]?.value;
  //console.log(why_us);

  const [activeTab, setActiveTab] = useState('Key Ingredients');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [activeImg, setActiveImage] = useState(images[0]);

  const [amount, setAmount] = useState(1);
  //<img src={images[0]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images[0])}/>
  //<img src={images[1]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images[1])}/>
  const [moreText, setMoreText] = useState(true);
  const [moreOffer, setMoreOffer] = useState(false);

  return (
    <>
      {/*<ProductImage image={selectedVariant?.image} />*/}
      <div className="flex m-[2%] gap-2 items-center">
        <span>Home</span>
        <img src="/next.png" alt="next" width={20} height={20} />
        <span className="font-semibold">Product page</span>
      </div>
      <div className="final-product shadow-lg p-4 flex flex-col justify-between lg:flex-row lg:gap-8 lg:ml-8 lg:mr-8 items-start relative">
        <div className="flex flex-col gap-6 lg:w-2/4 flex-wrap items-center lg:sticky top-[240px]">
          {/*<img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                    <div className='flex flex-row justify-between h-full overflow-y-auto'>
                      {product.images.edges && product.images.edges.map((item,index)=>(
                        <img src={images[index]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images[index])}/>
                      ))
                      }
                    </div>*/}
          <ProductImage
            image={selectedVariant?.image}
            product={product}
            activeImg={selectedVariant?.image?.url}
            setActiveImage={setActiveImage}
          />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col lg:w-3/4">
          <div>
            {/*<!--h6 className='text-2xl font-semibold'></h6 -->*/}
            {/*<span className=' text-violet-600 font-semibold'>Special Sneaker</span>*/}
            <h1 className="text-2xl font-semibold mt-0 mb-[15px]">
              {product.title}
            </h1>
            <ProductPrice selectedVariant={selectedVariant} />
          </div>
          <div>
            <Suspense
              fallback={
                <ProductForm
                  product={product}
                  selectedVariant={selectedVariant}
                  variants={[]}
                  activeImg={activeImg}
                  setActiveImage={setActiveImage}
                />
              }
            >
              <Await
                errorElement="There was a problem loading product variants"
                resolve={variants}
              >
                {(data) => (
                  <ProductForm
                    product={product}
                    selectedVariant={selectedVariant}
                    variants={data.product?.variants.nodes || []}
                  />
                )}
              </Await>
            </Suspense>
          </div>
          <h2 className="mt-[10px]">Product Description</h2>
          <div className="shadow-p relative py-[10px]">
            <p className="text-gray-700">
              {product.description.substr(0, 200)}
            </p>
            {moreText && (
              <>
              
                <div
                className="expect"
                dangerouslySetInnerHTML={{__html: product.description}}
              />
              </>
            )}
          </div>
        </div>
        <div className="absolute cursor-pointer flex flex-col items-center top-[-36px] lg:top-[15px] right-2">
          <img
            className="sharelogo"
            src="/share.png"
            width={24}
            height={24}
            alt="share"
          />
          <span className="text-sm font-semibold ">Share</span>
        </div>
      </div>
      <div className="max-w-[1320px] p-[10px] m-auto">
        <div>
          <h2 className="text-center lg:text-2xl mt-[4%] mb-[2%]">
            What to Expect from {product.title} ?
          </h2>
          {expaction && (
            <div
              className="expect"
              dangerouslySetInnerHTML={{__html: expaction}}
            />
          )}
        </div>
        <div className="container mx-auto mt-5">
          <h1 className="lg:text-3xl font-semibold mb-4 text-center mt-[4%] mb-[2%]">
            Product Information
          </h1>
          <div className="flex space-x-4 overflow-y-auto lg:justify-center my-[20px]">
            <div
              className={`cursor-pointer py-2 lg:px-8 px-4  whitespace-nowrap ${
                activeTab === 'Key Ingredients' ? 'border-active' : ''
              }`}
              onClick={() => handleTabClick('Key Ingredients')}
              style={{border: '1px solid #e5e5e5'}}
            >
              Key Ingredients
            </div>
            <div
              className={`cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${
                activeTab === 'How to Use' ? 'border-active' : ''
              }`}
              onClick={() => handleTabClick('How to Use')}
              style={{border: '1px solid #e5e5e5'}}
            >
              How to Use
            </div>
            <div
              className={`cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${
                activeTab === 'Who Can Use' ? 'border-active' : ''
              }`}
              onClick={() => handleTabClick('Who Can Use')}
              style={{border: '1px solid #e5e5e5'}}
            >
              Who Can Use
            </div>
            <div
              className={`cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${
                activeTab === 'Why us' ? 'border-active' : ''
              }`}
              onClick={() => handleTabClick('Why us')}
              style={{border: '1px solid #e5e5e5'}}
            >
              Why us
            </div>
          </div>
          <div className="mt-4">
            {activeTab === 'Key Ingredients' && key_ingredients && (
              <div className="overflow-y-auto overflow-x-auto">
                {key_ingredients && (
                  <div
                    className="expect"
                    dangerouslySetInnerHTML={{__html: key_ingredients}}
                  />
                )}
              </div>
            )}
            {activeTab === 'How to Use' && How_To_use && (
              <div className="overflow-y-auto">
                <div
                  className="key-ing"
                  dangerouslySetInnerHTML={{__html: How_To_use}}
                />
              </div>
            )}
            {activeTab === 'Who Can Use' && who_can_use && (
              <div className="overflow-y-auto">
                <div dangerouslySetInnerHTML={{__html: who_can_use}} />
              </div>
            )}
            {activeTab === 'Why us' && why_us && (
              <div className="overflow-y-auto">
                <div dangerouslySetInnerHTML={{__html: why_us}} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

//{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Onion, in combination with coconut, reduces hair fall and promotes growth of lost hair."}]}]}

function ProductPrice({selectedVariant}) {
  return (
    <div className="product-price flex gap-[10px]">
      {selectedVariant?.compareAtPrice ? (
        <>
          <div className="product-price-on-sale font-semibold">
            {selectedVariant ? <Money data={selectedVariant.price} /> : null}
            <s>
              <Money data={selectedVariant.compareAtPrice} />
            </s>
          </div>
        </>
      ) : (
        selectedVariant?.price && (
          <Money className="font-semibold" data={selectedVariant?.price} />
        )
      )}
      <div>
        <span className="font-semibold bg-[#e1eecc] py-1 px-2 text-sm rounded">
          FREE SHIPPING
        </span>
      </div>
    </div>
  );
}

function ProductForm({
  product,
  selectedVariant,
  variants,
  activeImg,
  setActiveImage,
}) {
  return (
    <div className="product-form">
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={variants}
      >
        {({option}) => (
          <ProductOptions
            key={option.name}
            option={option}
            activeImg={activeImg}
            setActiveImage={setActiveImage}
          />
        )}
      </VariantSelector>
      <br />

      <AddToCartButton
        disabled={!selectedVariant || !selectedVariant.availableForSale}
        onClick={() => {
          window.location.href = window.location.href + '#cart-aside';
        }}
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                },
              ]
            : []
        }
      >
        {selectedVariant?.availableForSale ? 'ADD TO CART' : 'Sold out'}
      </AddToCartButton>
    </div>
  );
}

function ProductOptions({option, activeImg, setActiveImage}) {
  const [more, setMore] = useState(false);
  const [moreContent, setMoreContent] = useState('+View More');

  return (
    <>
      <div className="product-options" key={option.name}>
        <h5 className="font-semibold">{option.name}</h5>
        <div className="product-options-grid items-center">
          {option.values.map(({value, isAvailable, isActive, to}) => {
            return (
              <Link
                className="product-options-item"
                key={option.name + value}
                prefetch="intent"
                preventScrollReset
                replace
                to={to}
                style={{
                  border: isActive
                    ? '1px solid black'
                    : '1px solid transparent',
                  opacity: isAvailable ? 1 : 0.3,
                  borderRadius: '5px',
                }}
                onClick={() => {
                  setActiveImage(selectedVariant?.image.url);
                }}
              >
                <div dangerouslySetInnerHTML={{__html: value}} />
              </Link>
            );
          })}
        </div>
        <br />
      </div>
      <div className="bg-[#f7f7f7] py-[10px] pl-[50px]">
        <h2 className="text-[16px]">AVAILABLE OFFERS!!</h2>
        <ul className="text-[#757575] list-disc">
          <li>FREE Mivi Play Bluetooth Speakers on a spend of Rs.2199</li>
          <li>Holographic Pouch + Liquid Lipstick on a spend of Rs.599</li>

          {more && (
            <>
              <li>Shop for Rs.999 and get Flat Rs.100 off</li>
              <li>Shop for Rs.1299 and get Flat Rs.200 off</li>
              <li>Shop for Rs.1499 and get Flat Rs.300 off</li>
            </>
          )}
          <span
            onClick={() => {
              setMore(!more),
                setMoreContent(
                  moreContent === '+View More' ? '-View Less' : '+View More',
                );
            }}
            className="text-red-700 cursor-pointer"
          >
            {moreContent}
          </span>
        </ul>
      </div>
    </>
  );
}

function AddToCartButton({analytics, children, disabled, lines, onClick}) {
  const [amount, setAmount] = useState(1);
  lines[0].quantity = amount;
  console.log(lines[0].merchandiseId);
  return (
    <>
      <CartForm
        route="/cart"
        inputs={{lines}}
        action={CartForm.ACTIONS.LinesAdd}
      >
        {(fetcher) => (
          <>
            <input
              name="analytics"
              type="hidden"
              value={JSON.stringify(analytics)}
            />
            <div className="flex flex-row items-center gap-4 mobile-cart-product">
              <div
                className="flex flex-row items-center py-[6px] px-[8px] rounded-xl"
                style={{border: '1px solid #000', background: 'white'}}
              >
                <button
                  className=" text-xl"
                  onClick={() => {
                    if (amount != 0) {
                      setAmount((prev) => prev - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="px-4">{amount}</span>
                <button
                  className=" text-xl"
                  onClick={() => setAmount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="w-[150px] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg"
                type="submit"
                onClick={onClick}
                disabled={disabled ?? fetcher.state !== 'idle'}
              >
                {children}
              </button>
            </div>
          </>
        )}
      </CartForm>
      <p
        className="lg:mt-6"
        style={{width: '100%', borderBottom: '1px dashed #bdbdbd'}}
      ></p>
      <div className="mt-2">
        <img src="/BrandBand.svg" alt="brand" />
      </div>
      <p
        className="mt-2"
        style={{width: '100%', borderBottom: '1px dashed #bdbdbd'}}
      ></p>
    </>
  );
}

function ProductVariantColrousel(product) {
  return (
    <div>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            {/* {product.product.images.edges.map((url)=>(
            <img src={url.node.url} ></img>
          ))}*/}
            {/*console.log(product.product.images)*/}
            {product.product.variants.nodes.map((url) => (
              <img src={url.image.url}></img>
            ))}
          </a>
        </li>
      </ul>
    </div>
  );
}
//variants.nodes[0].image.url
const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    quantityAvailable
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    tags
    productType
    metafields(identifiers: [{namespace: "custom", key: "what_to_expect"},{namespace: "custom", key: "key_ingredients"}, {namespace: "custom", key: "how_to_use1"},{namespace: "custom", key: "who_can_use"},{namespace: "custom", key: "why_we"} ]){
      key
      value
    }
    images(first:10){
      edges{
        node{
          url
        }
      }
    }
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 10) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;

const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 50) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;

const PRODUCTS_QUERY = `#graphql
  query {
  products(first: 250, query:"tags:* Under 100 OR Under 1000"){
    edges{
      node{
        id
        title
        handle
        tags
        images(first:1){
          edges{
            node{
              url
              id
            }
          }
        }
        featuredImage {
          id
        }
      }
    }
}
  }
`;
/*
function JsonToHtml({ json }) {
  const renderChildren = (children) => {
    return children.map((child, index) => {
      if (child.type === 'paragraph') {
        // If the type is 'paragraph', create a <p> element
        return <p key={index}>{child.children[0].value}</p>;
      } else if (child.type === 'list') {
        // Handle list elements as needed (e.g., ul, ol)
        // You can add logic to create list elements here
        return null;
      } else {
        // Handle other types or unknown types
        return null;
      }
    });
  };

  return (
    <div>
      {renderChildren(json.children)}
    </div>
  );
};
*/
