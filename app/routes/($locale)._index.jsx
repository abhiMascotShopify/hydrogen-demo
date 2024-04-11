import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import ImageCarousel from '~/components/ImageCarousel';
import ProductCarousel from '~/components/ProductCarousel';
import CustomizedProducts from '~/components/CustomizedProducts';
import YouTubeVideo from '~/components/YouTubeVideo';
import {useMediaQuery} from 'react-responsive';
import CustomizedCollection from '~/components/CustomizedCollection';
import BlogCorousel from '~/components/BlogCorousel';

export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  //console.log(collections.nodes[0].products);
  const collectionProducts = collections;
  const featuredCollection = collections.nodes;
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {products} = await storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {blogs} = await storefront.query(BLOGS_QUERY);
  const collection = collections;

  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheNone(),
    variables: {
      headerMenuHandle: 'main-menu', // Adjust to your header menu handle
    },
  });

  return defer({
    featuredCollection,
    recommendedProducts,
    collections,
    collectionProducts,
    products,
    blogs, 
    header: await headerPromise
  });
}

export default function Homepage() {
  const noImg = "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_600x600.gif"
  const data = useLoaderData();
  const { header } = data;
  //console.log("menu ::",data.collections)
  var menus = header.menu.items;
  var collectionArray = menus.filter((item)=> item.title !== "Home");
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});
  var imageSrc = []
  if(!isSmall){
    imageSrc = [
      'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_1.jpg?v=1708767049',
      'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_3_opt_1.jpg?v=1708767048',
      'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_4_opt_2.jpg?v=1708767048',
      'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_5_opt_2.jpg?v=1708767048'
    ];
  }else{
    imageSrc = [
      'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Website_Banner_op_1_700_x_470.jpg?v=1712753471',
      'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Website_Banner_op_4_700_x_470.jpg?v=1712753471',
      'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Website_Banner_op_3_700_x_470.jpg?v=1712753471',
      'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Website_Banner_op_5_700_x_470.jpg?v=1712753471'
    ];
  }

  var GiftCollections = [];
  var ReviewCollection = [];
  var BuildYourOwnColl = [];
  var ThirdHeroCollection = [];

  collectionArray.map((col,index)=>{
    let collNodes = data.collections.nodes;
    collectionArray[index]['image'] = {'url': noImg } 
    collNodes.map((item)=> {
      if(item.title.trim() === col.title.trim()){
        let isImg = item.image?.url;
        collectionArray[index]['handle'] = col.title.toLowerCase();
        collectionArray[index]['image'] = {'url': isImg ? isImg : noImg }
      };
    })
  })

  //console.log("collectionArray:",collectionArray)
  data.collectionProducts.nodes.forEach((col) => {
    if (col.metafields[0] != null && col.metafields[0].value == 'true') {
      ReviewCollection.push(col);
      //console.log('Added')
    }
    if (col.title == "Build Your Own Kit") {
      BuildYourOwnColl.push(col);
      //console.log(col)
    }
    if(col.title=='3rd Hero Collection'){
      ThirdHeroCollection.push(col)
    }
    if (col.title == "Gift Under 500" || col.title == "Gift Under 1000" || col.title == "Gifts Under 2000") {
      GiftCollections.push(col);
      //console.log(col)
    }
  });
  //console.log("BuildYourOwnColl::",BuildYourOwnColl[0].products.edges)
  BuildYourOwnColl = BuildYourOwnColl[0].products.edges;
  ThirdHeroCollection =  ThirdHeroCollection[0].products;
  GiftCollections = GiftCollections;
  //console.log(data.collectionProducts.nodes[7].metafields[1].value)

  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }

  return (
    <div className="home">
      { isSmall ?
        <section className="collectionContent lg:hidden block sm:mt-4 overflow-auto ">
        <div className="inline-flex gap-4 w-[100%]">
          {collectionArrayStatic?.map((item, index) => (
            <div
              className=" col-item sm:w-auto  rounded-lg hover:shadow-md cursor-pointer"
              key={index}
            >
              <div className="image">
                <NavLink to={`/collections/${item.collectionname}`}>
                  <img
                    width={80}
                    height={80}
                    alt={item.collectionname}
                    src={item.collectionimageurl}
                    style={{
                      width: '80px',
                      borderRadius: '50%',
                      border: '1px solid #e5e5e5',
                    }}
                  />
                </NavLink>
              </div>
              <div className="collectionname  sm:text-lg text-[12px] font-semibold  text-center px-[15px] pb-[12px]  pt-[5px]">
                {item.collectionname}
              </div>
            </div>
          ))}
        </div>
      </section>
      :
      null
      }
      <div>
        <ImageCarousel isSmall={isSmall} images={imageSrc}></ImageCarousel>
      </div>
      {/*{data.collectionProducts.nodes.map((coll)=>(
        <RecommendedProducts key={coll.id} products={coll.products} title={coll.title}/>
      ))
      }*/}
      {/* -- Section 2 -- 1st Hero Collection */}
      <RecommendedProducts
        key={data.collectionProducts.nodes[0].id}
        products={data.collectionProducts.nodes[0].products}
        title={data.collectionProducts.nodes[0].title}
      />
      {/* -- Section 3 -- Collection Name : Build Your Own Kit */}
      <CustomizedProducts
        key={data.products.nodes[0].id}
        products={BuildYourOwnColl}
        title="Build Your Own Kit"
      ></CustomizedProducts>

      {/*---Banner Statis -section 4 -- */}
      {isLargeScreen && (
        <a href="/collections/face">
          <img 
            src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Hero-banner.jpg?v=1703656662"
            className="rounded-2xl mt-[15px]"
          ></img>
        </a>
      )}
      {isSmall && (
       <a href="/collections/face">
          <img
            style={{height:"250px"}}
            src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Hero-banner.jpg?v=1703656662"
            className="rounded-2xl w-[100%] m-auto"
          ></img>
        </a>
      )}
      {/* -- Section --  COll Name : 2nd Hero Collection */}
      <RecommendedProducts
        key={data.collectionProducts.nodes[1].id}
        products={data.collectionProducts.nodes[1].products}
        title={data.collectionProducts.nodes[1].title}
      />

      <CustomizedCollection collections={GiftCollections} title={'Gifting'} />
      <YouTubeVideo></YouTubeVideo>
      {isLargeScreen && (
         <a href="/collections/eyes">
          <div className="my-[15px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Lookbook_Banner.jpg?v=1709971241"
              className="rounded-2xl"
            ></img>
          </div>
        </a>
      )}
      {isSmall && (
        <a href="/collections/eyes">
          <div className="my-[15px]">
            <img
              style={{height:"250px"}}
              src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_look_book.jpg?v=1712816125"
              className="rounded-2xl w-[100%] m-auto"
            ></img>
          </div>
        </a>
      )}
      {/*---Banner Statis section 8 --- */}
      {isLargeScreen && (
         <a href="/collections/eyes">
          <div className="my-[15px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Daily_Essentials_banner.jpg?v=1709971600"
              className="rounded-2xl"
            ></img>
          </div>
        </a>
      )}
      {isSmall && (
        <a href="/collections/eyes">
          <div className="my-[15px]">
            <img
              style={{height:"250px"}}
              src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_everyday_style.jpg?v=1712816125"
              className="rounded-2xl w-[100%] m-auto"
            ></img>
          </div>
        </a>
      )}
      {/* -- Section 9 --  COll Name : 3rd Hero Collection */}
      <RecommendedProducts
        key={ThirdHeroCollection.edges[0].node.id}
        products={ThirdHeroCollection}
        title="Daily Must-Haves"
      />
 
      {/* -- sectio 11 -Review -- */}
      {/* <CustomizedCollection
        collections={ReviewCollection}
        title={"From Customer's Inbox"}
      /> */}
    <section>
    <CustomizedCollection collections={collectionArray} title="Choose Your Own Fashion" />
    </section>

      {/*<RecommendedProducts products={data.recommendedProducts} />*/}
      <BlogCorousel collections={data.blogs} title="blogs" />
      {/*console.log(data.collectionProducts)*/}
    </div>
  );
}

function FeaturedCollection({collection}) {
  const image = collection.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h3 className="px-5">{collection.title}</h3>
    </Link>
  );
}

function RecommendedProducts({products, title}) {
  return (
    <>
      <h1 className="text-center font-semibold my-[15px]">{title} </h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={products}>
            {/*<ShopifyCarousel products={products}></ShopifyCarousel>*/}
            {<ProductCarousel products={products}></ProductCarousel>}
          </Await>
        </Suspense>
        <br />
      </div>
    </>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    products(first:100){
      edges{
        node{
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 100) {
          edges {
          node {
                id
                availableForSale
                metafields(identifiers: [{namespace: "custom", key: "isdefault"} ]){
                    key
                    value
                  }
                }
              }
        }
        images(first:1){
          edges{
            node{
              url
            }
          }
        }
        }
      }
    }
    id
    title
    metafields(identifiers: [{namespace: "custom", key: "from_customer_inbox"}, {namespace: "custom", key: "1_custom_colllection"}]){
      id
      key
      namespace
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 100) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    metafields(identifiers: [{namespace: "custom", key: "customized"}, {namespace: "custom", key: "reviewed_products"}]){
      key
      value
    }
    variants(first: 100) {
      edges {
        node {
          availableForSale
          id
          metafields(identifiers: [{namespace: "custom", key: "isdefault"} ]){
              key
              value
            }
          # Add other variant fields you need
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 10, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;
/*
const GET_COLLECTION_BY_HANDLE = gql`
query GetCollectionByHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    id
    title
    products(first: 10) {
      edges {
        node {
          id
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
}
`;

console.log(GET_COLLECTION_BY_HANDLE);*/

const COLLECTION_QUERY = `#graphql
  fragment Collection on Collection {
        id
        title
        handle
        description
      }
  query Collections ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...Collections
      }
    }
  }`;

const BLOGS_QUERY = `#graphql
  query Blogs(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    blogs(first: 100) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        articles(first:10){
        edges{
          node{
            image {
              id
              url
            }
            id
          }
        }
      }
        seo {
          title
          description
        }
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

const collectionArrayStatic = [
  {
    collectionname: 'Moisturizer',
    url:"/collections/moisturizer",
    collectionimageurl: '/collection/Moisturizer.webp',
  },
  {
    collectionname: 'Cream',
    url:"/collections/cream",
    collectionimageurl: '/collection/Cream.webp',
  },
  {
    collectionname: 'Scrub',
    url:"/collections/scrub",
    collectionimageurl: '/collection/Scrub.webp',
  },
  {
    collectionname: 'Serum',
    url:"/collections/serum",
    collectionimageurl: '/collection/Serum.webp',
  },
  {
    collectionname: 'Face Wash',
    url:"/collections/face",
    collectionimageurl: '/collection/Foaming-Face-Wash.jpg',
  },
  {
    collectionname: 'Face Wash',
    url:"/collections/face-wash",
    collectionimageurl: '/collection/Face-Wash.jpg',
  }
];