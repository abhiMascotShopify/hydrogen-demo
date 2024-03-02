import {json, redirect} from '@shopify/remix-oxygen';
import React, {useRef, useState} from 'react';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {
  Pagination,
  getPaginationVariables,
  Image,
  Money,
} from '@shopify/hydrogen';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';
import {
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';
import {useVariantUrl} from '~/utils';
//import Filters from '~/components/Filters';
import {Fragment} from 'react';
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';

const sortOptions = [
  {name: 'Most Popular', href: '#', value:'', current: true},
  {name: 'Best Rating', href: '#', value:'', current: false},
  {name: 'Newest', href: '#', value:'created_desc', current: false},
  {name: 'Price: Low to High', value:'lh', href: '#', current: false},
  {name: 'Price: High to Low', value:'hl', href: '#', current: false},
];
const subCategories = [
  {name: 'Totes', href: '#'},
  {name: 'Backpacks', href: '#'},
  {name: 'Travel Bags', href: '#'},
  {name: 'Hip Bags', href: '#'},
  {name: 'Laptop Sleeves', href: '#'},
  {name: 'Way 2 Slay', href: '#'},
  {name: 'Rizz & Roll', href: '#'},
  {name: 'Pro Studio', href: '#'},
];
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [{value: 'new-arrivals', label: 'New Arrivals', checked: false}],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      {value: 'new-arrivals', label: 'New Arrivals', checked: false},
      {value: 'sale', label: 'Sale', checked: false},
      {value: 'travel', label: 'Travel', checked: true},
      {value: 'organization', label: 'Organization', checked: false},
      {value: 'accessories', label: 'Accessories', checked: false},
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [],
  },{
    id:"price",
    name:"Price",
    options:[{value: '299', label: "₹0 - ₹299"},{value: '499', label: "₹300 - ₹499"},
    {value: '899', label: '₹500 - ₹899'},{value: '900', label:"₹900+"}]
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const meta = ({data}) => {
  return [{title: `Hydrogen | ${data.collection.title} Collection`}];
};

export async function loader({request, params, context}) {
  const {handle} = params;
  //console.log("handle::",handle)
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });
  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheNone(),
    variables: {
      headerMenuHandle: 'main-menu', // Adjust to your header menu handle
    },
  });

  if (!handle) {
    return redirect('/collections');
  }

  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {handle, ...paginationVariables},
  });
  //console.log("Collection Handle ::",collection);
  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }
  return json({collection,  header: await headerPromise,handle});
}

export default function Collection() {
  var collectionArray = [];
  const {collection , header, handle} = useLoaderData();
  const { menu } = header;
  let subMenu = menu.items;
  var sortArr = subMenu.filter((item)=> item.title.toLowerCase() === handle );
  var collectionArray = sortArr[0]?.items;
  //console.log("collectionArray::",collectionArray)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  var productsToShow = [];
  const lines = [];
  const [startIndex, setStartIndex] = useState(0);
  const [productsToShow1, setProductToShow] = useState([])
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const endIndex = isLargeScreen ? 4 : 2;
  if (collection.products != null || collection.products != undefined) {
    console.log("collection::",collection);
    productsToShow = collection.products.nodes;
    //console.log(productsToShow);
  }

  collection.products.nodes.map((product) => {
    product.variants.nodes.map((line) => {
        lines.push({
          merchandiseId: line.id,
          quantity: 1,
        });
    });
  });
  
  const sortCollectionProducts= (sort_by)=> {
    var data = collection.products.nodes;
    console.log("sortCollectionProducts::",data)
    switch(sort_by){
      case 'lh':  sortArray(data,"ascending"); 
                  break;
      case 'hl':  sortArray(data,"descending");
                  break;
      case 'created_asc': sortByDate(data,"ascending");
                  break;
      case 'created_desc':sortByDate(data,"descending");
                  break;
      default:
        productsToShow=data; 
    }
  }

  const sortArray = (data,sortOrder="ascending") => {
    console.log("sortArray::",data)
    const sortedData = [...data].sort((a, b) => {
        var nodeA =a.node,nodeB=b.node;
        if(this.state.isSortedProduct) {
           nodeA = a,
           nodeB = b;
        }
        if (sortOrder === 'ascending') {
            return nodeA.title.localeCompare(nodeB.title);
        } else {
            return nodeB.title.localeCompare(nodeA.title);
        }
    });
    productsToShow = sortedData
  }
  
  const sortByDate = (data,sortOrder="ascending") => {
    console.log("sortByDate::",data)
    const sortedData = [...data].sort((a, b) => {
      var nodeA =a.node,nodeB=b.node;
      if (sortOrder === 'ascending') {
        return new Date(nodeA.publishedAt).getTime() - new Date(nodeB.publishedAt).getTime();
      } else {
        return  new Date(nodeB.publishedAt).getTime() - new Date(nodeA.publishedAt).getTime();
      }
    });
    productsToShow = sortedData
  }

  const filterData = (e)=>{
    var price = parent(e.target.value);
    let filter = productsToShow.filter((item)=> item.priceRange.maxVariantPrice.amount > price )
    productsToShow = filter;
    console.log(productsToShow);
  }
  
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }

  function goToCollection(url_path){
    let url = getPath(url_path);
    window.location.href = url
  }
  
  const goToProduct=(url_path)=>{
    window.location.href = url_path
  }
  
  return (
    <>
      <div>
        <img
          src={collection?.image?.url}
          style={{ objectFit: 'cover', width: '100%'}}
        ></img>
      </div>
      <div className="bg-white mx-2.5">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({open}) => (
                            <>
                              
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        onChange={(e)=> filterData(e) }
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <section className="collectionContent sm:mt-4 overflow-auto">
            <div className="inline-flex gap-4">
              {collectionArray?.map((item, index) => (
                <div onClick={()=> goToCollection (item.url) }
                  className="collection-items sm:w-auto w-[30%] bg-[#f5f5f5] rounded-lg hover:shadow-md cursor-pointer"
                  key={index}
                >
                  <div className="image" >
                    <img
                      width={300}
                      height={300}
                      alt={item.title}
                      src={item?.collectionimageurl}
                    />
                  </div>
                  <div className="collectionname  sm:text-lg text-md font-semibold  text-center px-[15px] pb-[12px]  pt-[5px]">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 items-center">
              <Link to="/">Home</Link>
              <img src="/next.png" alt="next" width={20} height={20} />
              <Link to="/collections" className="font-semibold">Collection</Link>
            </div>
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 m-0 relative">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:block hidden my-[15px]">
                {collection.title}
              </h1>

              <div className="flex items-center sm:mr-10">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({active}) => (
                              <a
                                onClick={()=> sortCollectionProducts(option.value) }
                                className={classNames(
                                  option.current
                                    ? 'font-medium text-gray-900'
                                    : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm',
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="second-filter -m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="right-filter -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <div className="shadow-md px-4 py-2">
                  <form className="hidden lg:block lg:sticky lg:top-[120px]">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li
                          key={category.name}
                          className="border-b border-[#ece6e6] pb-2"
                        >
                          <a
                            href={category.href}
                            className="font-bold text-[18px]"
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-b border-gray-200 py-2"
                      >
                        {({open}) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-[18px] text-black font-bold">
                                <span className="">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      onChange={(e)=> filterData(e)}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </div>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="w-full max-w-screen-xl">
                    <div className="cursor product-card grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                      {productsToShow.map((product, index) => (
                        <div className="cursor mst-card"  key={product.id}>
                          <div
                            className="bg-white rounded-lg shadow-lg p-2 px-4"
                            style={{
                              boxShadow:
                                'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            }}
                          >
                          <div onClick={()=>goToProduct(`/products/${product.handle}`)}>
                            <img
                              src={product.images.edges[0]?.node?.url}
                              alt={product.title}
                              className="w-full h-auto"
                            />
                            <h2 className="sm:text-lg text-[17px] font-semibold mt-2 text-center">
                              {product.title}
                            </h2>
                            <div className="h-12">
                              <h1 className="text-center sm:text-[26px] text-[21px] font-bold m-auto w-full">
                              {product.priceRange.maxVariantPrice.amount} &nbsp; Rs
                              </h1>
                            </div>
                          </div>
                            <div className="px-1 py-1 flex justify-center gap-[10px] items-center ">
                              <div>
                             
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 32 33"
                                  xmlSpace="preserve"
                                  // width="2.8em"
                                  // height="2.8em"
                                  className="card-like sm:w-[35px] w-[30px]"
                                >
                                  <path
                                    d="M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                  />
                                  <path
                                    d="M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                  ></path>
                                </svg>
                              </div>
                              
                              <CartForm
                                route="/cart"
                                inputs={{lines: lines[index]}}
                                action={CartForm.ACTIONS.LinesAdd}
                                className="flex-grow"
                              >
                                {(fetcher) => (
                                  <>
                                    <button
                                      className="cart-button lg:w-[200px] h-[2rem] sm:h-11 px-[25px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-lg sm:text-lg text-[12px]"
                                      type="submit"
                                      onClick={() => {
                                        window.location.href =
                                          window.location.href + '#cart-aside';
                                      }}
                                    >
                                      Add To Cart
                                    </button>
                                  </>
                                )}
                              </CartForm>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

function ProductsGrid({products}) {
  return (
    <div className="products-grid">
      {products.map((product, index) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        );
      })}
    </div>
  );
}

function ProductItem({product, loading}) {
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);
  return (
    <Link
      className="product-item"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {product.featuredImage && (
        <Image
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          data={product.featuredImage}
          loading={loading}
          sizes="(min-width: 45em) 400px, 100vw"
        />
      )}
      <h4>{product.title}</h4>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
    </Link>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    handle
    productType
    tags
    publishedAt
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    images(first:10){
      edges{
        node{
          url
        }
      }
    }
    metafields(identifiers: [{namespace: "custom", key: "what_to_expect"},{namespace: "custom", key: "key_ingredients"}, {namespace: "custom", key: "how_to_use1"},{namespace: "custom", key: "who_can_use"},{namespace: "custom", key: "why_we"} ]){
      key
      value
    }
    variants(first: 1) {
      nodes {
        id
        selectedOptions {
          name
          value
        }
        metafields(identifiers: [{namespace: "custom", key: "isdefault"} ]){
                              key
                              value
                            }
      }
    }
  }
`;

// NOTE: https://shopify.dev/docs/api/storefront/2022-04/objects/collection
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      image{
        url
      }
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

const PRODUCTTAGS_QUERY = `#graphql
   {
  productTags(first:16){
    edges{
      node
    }
  }
  }
`;

const MENU_FRAGMENT = `#graphql
  fragment Menu on Menu {
    id
    items {
      id
      title
      url
      items{
        title
        url
      }
    }
  }
`;

const HEADER_QUERY = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;

// const collectionArray = [
//   {
//     collectionname: 'Moisturizer',
//     url:"/collections/moisturizer",
//     collectionimageurl: '/collection/Moisturizer.webp',
//   },
//   {
//     collectionname: 'Cream',
//     url:"/collections/cream",
//     collectionimageurl: '/collection/Cream.webp',
//   },
//   {
//     collectionname: 'Scrub',
//     url:"/collections/scrub",
//     collectionimageurl: '/collection/Scrub.webp',
//   },
//   {
//     collectionname: 'Serum',
//     url:"/collections/serum",
//     collectionimageurl: '/collection/Serum.webp',
//   },
//   {
//     collectionname: 'Face Wash',
//     url:"/collections/face-wash",
//     collectionimageurl: '/collection/Foaming-Face-Wash.jpg',
//   },
//   {
//     collectionname: 'Face Wash',
//     url:"/collections/face-wash",
//     collectionimageurl: '/collection/Face-Wash.jpg',
//   }
// ];
