import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import ProductCard from 'app/components/productCard';
import ShopifyCarousel from '~/components/ShopifyCarousel';
import ImageCarousel from '~/components/ImageCarousel';
import ProductCarousel from '~/components/ProductCarousel';
import CustomizedProducts from '~/components/CustomizedProducts';
import GiftingCarousel from '~/components/GiftingCarousel';
import YouTubeVideo from '~/components/YouTubeVideo';
import {useMediaQuery} from 'react-responsive';
import {SearchForm} from '~/components/Search';
import CustomizedCollection from '~/components/CustomizedCollection';
import BlogCorousel from '~/components/BlogCorousel';
import {
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';

export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}) {
  console.log("context:",context)
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  //console.log(collections.nodes[0].products);
  const collectionProducts = collections;
  const featuredCollection = collections.nodes;
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {products} = await storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {blogs} = await storefront.query(BLOGS_QUERY);

 
  //console.log(products.nodes[0].variants.edges[0].node.metafields);
  //console.log(products.nodes[0].variants.edges[0].node.metafields);
  const collection = collections;

  return defer({
    featuredCollection,
    recommendedProducts,
    collections,
    collectionProducts,
    products,
    blogs,
  });
}

export default function Homepage() {
  const data = useLoaderData();
  const imageSrc = [
    'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  ];
  //console.log(data.blogs);
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});
  var GiftCollections = [];
  var ReviewCollection = [];
  data.collectionProducts.nodes.forEach((col) => {
    if (col.metafields[0] != null && col.metafields[0].value == 'true') {
      ReviewCollection.push(col);
      //console.log('Added')
    }
    if (col.metafields[1] != null && col.metafields[1].value == 'true') {
      GiftCollections.push(col);
      //console.log(col)
    }
  });
  //console.log(GiftCollections)
  //console.log('Review Collection '+ ReviewCollection)
  //console.log(data.collectionProducts.nodes[7].metafields[1].value)

  return (
    <div className="home">
      <section className="collectionContent lg:hidden block sm:mt-4 overflow-auto">
        <div className="inline-flex gap-4">
          {collectionArray?.map((item, index) => (
            <div
              className=" col-item sm:w-auto  rounded-lg hover:shadow-md cursor-pointer"
              key={index}
            >
              <div className="image">
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
              </div>
              <div className="collectionname  sm:text-lg text-[12px] font-semibold  text-center px-[15px] pb-[12px]  pt-[5px]">
                {item.collectionname}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div>
        <ImageCarousel images={imageSrc}></ImageCarousel>
      </div>
      {/*{data.collectionProducts.nodes.map((coll)=>(
        <RecommendedProducts key={coll.id} products={coll.products} title={coll.title}/>
      ))
      }*/}
      {/* -- Section 2 -- */}
      <RecommendedProducts
        key={data.collectionProducts.nodes[0]?.id}
        products={data.collectionProducts.nodes[0]?.products}
        title={data.collectionProducts.nodes[0]?.title}
      />
      {/* -- Section 3 -- */}
      <CustomizedProducts
        key={data.products.nodes[0]?.id}
        products={data.products.nodes}
      ></CustomizedProducts>

      {/*---Banner Statis -section 4 -- */}
      {isLargeScreen && (
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Banner1.jpg"
            className="rounded-2xl mt-[15px]"
          ></img>
        </div>
      )}
      {isSmall && (
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Liquid-concealer_1c3a4678-78f2-4c94-921b-cf77022205f7.jpg?v=1695059222"
            className="rounded-2xl w-[100%] m-auto"
          ></img>
        </div>
      )}
      <RecommendedProducts
        key={data.collectionProducts.nodes[1].id}
        products={data.collectionProducts.nodes[1].products}
        title={data.collectionProducts.nodes[1].title}
      />
      <CustomizedCollection collections={GiftCollections} title={'Gifting'} />
      <YouTubeVideo></YouTubeVideo>
      {/*---Banner Statis section 8 --- */}
      {isLargeScreen && (
        <div className="my-[15px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Banner1.jpg"
            className="rounded-2xl"
          ></img>
        </div>
      )}
      {isSmall && (
        <div className="my-[15px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Liquid-concealer_1c3a4678-78f2-4c94-921b-cf77022205f7.jpg?v=1695059222"
            className="rounded-2xl w-[100%] m-auto"
          ></img>
        </div>
      )}
      {/* -- Section 9 -- */}
      <RecommendedProducts
        key={data.collectionProducts.nodes[2].id}
        products={data.collectionProducts.nodes[2].products}
        title={data.collectionProducts.nodes[2].title}
      />
      {/* section 10 - Instagram -- */}
      {/* -- sectio 11 -Review -- */}
      <CustomizedCollection
        collections={ReviewCollection}
        title={"From Customer's Inbox"}
      />
      {/* -- section 12 - Blog -- */}
      {/*<RecommendedProducts products={data.recommendedProducts} />*/}
      <BlogCorousel collections={data.blogs} />
      {/*console.log(data.collectionProducts)*/}
    </div>
  );
}

function FeaturedCollection({collection}) {
  const image = collection.image;
  //console.log(collection.title)
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
  const data = [
    'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  ];
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
              variants(first: 100) {
              edges {
              node {
                    id
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
    metafields(identifiers: [{namespace: "custom", key: "from_customer_inbox"}, {namespace: "custom", key: "gifting_collection"}]){
      key
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
    metafields(identifiers: [{namespace: "custom", key: "customized"}, {namespace: "custom", key: "reviewed_products"}]){
      key
      value
    }
    variants(first: 100) {
      edges {
        node {

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
const collectionArray = [
  {
    collectionname: 'Cream',
    collectionimageurl: '/collection/Cream.webp',
  },
  {
    collectionname: 'Scrub',
    collectionimageurl: '/collection/Scrub.webp',
  },
  {
    collectionname: 'Serum',
    collectionimageurl: '/collection/Serum.webp',
  },
  {
    collectionname: 'Face Wash',
    collectionimageurl: '/collection/Face-Wash.jpg',
  },
  {
    collectionname: 'Face Wash',
    collectionimageurl: '/collection/Foaming-Face-Wash.jpg',
  },
  {
    collectionname: 'Serum',
    collectionimageurl: '/collection/Serum.webp',
  },
  {
    collectionname: 'Face Wash',
    collectionimageurl: '/collection/Face-Wash.jpg',
  },
  {
    collectionname: 'Face Wash',
    collectionimageurl: '/collection/Foaming-Face-Wash.jpg',
  },
];
