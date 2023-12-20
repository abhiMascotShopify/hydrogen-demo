import{a as W,b as A,c as M}from"/build/_shared/chunk-E545WTLY.js";import"/build/_shared/chunk-BB4GHA4P.js";import{a as N,d as C,e as L}from"/build/_shared/chunk-NSZ2OLT5.js";import{a as k,l as b,o as _,r as T,x as w}from"/build/_shared/chunk-UAZF22TS.js";import{d as u}from"/build/_shared/chunk-2LOM2E4Y.js";var E=u(k());var m=u(k());var O=u(k());var V=u(W()),s=u(w()),D=({products:t})=>{let a=[],[r,i]=(0,O.useState)(0),l=(0,V.useMediaQuery)({minWidth:1024})?4:2;return(t!=null||t!=null)&&(a=t.edges.slice(r,r+l)),(0,s.jsx)("div",{className:"w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6 py-6",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"flex mobile-productView",children:a.map(o=>(0,s.jsx)("div",{className:"w-full sm:w-1/3 md:w-1/3 lg:px-4 sm:px-1 md:px-3",children:(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-2 shadow-md",children:[(0,s.jsx)("img",{src:`${o.node.images.edges[0].node.url}`,alt:o.node.title,className:"w-full h-auto"}),(0,s.jsx)(b,{to:`/products/${o.node.handle}`,children:(0,s.jsx)("h2",{className:"text-lg font-semibold mt-2 text-center",children:o.node.title})},o.id),(0,s.jsx)("div",{className:"h-12",children:(0,s.jsx)("h1",{className:"text-center font-bold h-full w-full m-auto",children:"\u20B9255"})}),(0,s.jsxs)("div",{className:"px-1 py-1 flex justify-between items-center  sm:flex-row flex-row",children:[(0,s.jsx)("div",{className:"mr-3",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 33",xmlSpace:"preserve",width:"2.8em",height:"2.8em",children:[(0,s.jsx)("path",{d:"M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z",fill:"rgb(255, 255, 255)",stroke:"rgb(0, 0, 0)"}),(0,s.jsx)("path",{d:"M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z",fill:"none",stroke:"rgb(0, 0, 0)"})]})}),(0,s.jsx)("button",{className:"w-full h-11 bg-black hover:bg-blue-700 text-white text-[13px] sm:text-[18px] font-bold py-1 px-1 rounded-lg",children:"ADD TO Pro"})]})]})},o.node.id))}),(0,s.jsx)("button",{className:"absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ml-4 hover:bg-opacity-75",onClick:()=>i(o=>o===0?t.edges.length-t.edges.length%2:o),children:(0,s.jsx)(A,{className:"opacity-50 cursor-pointer hover:opacity-100",size:40})}),(0,s.jsx)("button",{className:"absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",onClick:()=>i(o=>(o+1)%t.edges.length),children:(0,s.jsx)(M,{className:"opacity-50 cursor-pointer hover:opacity-100",size:40})})]})})},$=D;var e=u(w()),B=({data:t})=>[{title:`Hydrogen | ${t.product.title}`}];function U(){let{product:t,variants:a,productsreturn:r}=T(),{selectedVariant:i}=t;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(K,{selectedVariant:i,product:t,variants:a}),r&&(0,e.jsx)($,{products:r})]})}function G({image:t,activeImg:a,setActiveImage:r,product:i}){let n=[];i.images.edges.forEach(d=>{n.push(d.node.url)});let[l,o]=(0,m.useState)(n);return t?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"lg:grid flex flex-col-reverse lg:grid-cols-[20%_80%] gap-2 lg:gap-0 items-center",children:[(0,e.jsx)("div",{className:"flex  lg:flex-col  justify-between lg:h-[325px] overflow-x-auto gap-[5px]",children:i.images.edges&&i.images.edges.map((d,c)=>(0,e.jsx)("img",{src:l[c],alt:"",className:"w-24 h-24 rounded-md cursor-pointer product-image-caro",onClick:()=>r(l[c])}))}),(0,e.jsx)("img",{src:a,alt:"",className:"w-[90%] border border-[#e5e5e5] h-full aspect-square object-cover rounded-xl p-[10px] border-1 border-[#e5e5e5]"})]})}):(0,e.jsx)("div",{className:""})}function K({selectedVariant:t,product:a,variants:r}){let i=[];a.images.edges.forEach(g=>{i.push(g.node.url)});let[n,l]=(0,m.useState)(i),o=a.metafields[0].value,d=a.metafields[1].value,c=a.metafields[2].value,h=a.metafields[3].value,f=a.metafields[4].value,[p,H]=(0,m.useState)("Key Ingredients"),v=g=>{H(g)},[P,S]=(0,m.useState)(n[0]),[X,Z]=(0,m.useState)(1),[x,I]=(0,m.useState)(!0),[y,R]=(0,m.useState)(!1);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"flex m-[2%] gap-2 items-center",children:[(0,e.jsx)("span",{children:"Home"}),(0,e.jsx)("img",{src:"/next.png",alt:"next",width:20,height:20}),(0,e.jsx)("span",{className:"font-semibold",children:"Product page"})]}),(0,e.jsxs)("div",{className:"final-product shadow-lg p-4 flex flex-col justify-between lg:flex-row lg:gap-8 lg:ml-8 lg:mr-8 items-start relative",children:[(0,e.jsx)("div",{className:"flex flex-col gap-6 lg:w-2/4 flex-wrap items-center lg:sticky top-[240px]",children:(0,e.jsx)(G,{image:t?.image,product:a,activeImg:P,setActiveImage:S})}),(0,e.jsxs)("div",{className:"flex flex-col lg:w-3/4",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-2xl font-semibold mt-0 mb-[15px]",children:a.title}),(0,e.jsx)(z,{selectedVariant:t})]}),(0,e.jsx)("div",{children:(0,e.jsx)(E.Suspense,{fallback:(0,e.jsx)(q,{product:a,selectedVariant:t,variants:[],activeImg:P,setActiveImage:S}),children:(0,e.jsx)(_,{errorElement:"There was a problem loading product variants",resolve:r,children:g=>(0,e.jsx)(q,{product:a,selectedVariant:t,variants:g.product?.variants.nodes||[]})})})}),(0,e.jsx)("h2",{className:"mt-[10px]",children:"Product Description"}),(0,e.jsxs)("div",{className:"shadow-p sm:mt-[20px] relative px-[15px] py-[10px]",children:[(0,e.jsx)("p",{className:"text-gray-700",children:a.description.substr(0,200)}),x&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"text-gray-700",children:a.description}),(0,e.jsxs)("div",{className:"mt-4 ml-[5%]",children:[(0,e.jsx)("strong",{children:"Features:"}),(0,e.jsxs)("ul",{className:"list-disc text-sm ml-[5%] font-semibold",children:[(0,e.jsx)("li",{children:"This long-lasting liquid lipstick coats your lips in a rich creamy layer of pigment"}),(0,e.jsx)("li",{children:"The formula is smudge-proof, water-resistant and transfer-proof"}),(0,e.jsx)("li",{children:"Glides effortlessly over your lips and perfects your pout in one swipe while offering full coverage"}),(0,e.jsx)("li",{children:"The non-sticky, lightweight formula stays put without creasing and drying and leaves your lips smooth"}),(0,e.jsx)("li",{children:"Infused with lip-nourishing oils, this matte mousse lipstick is ultra-hydrating"}),(0,e.jsx)("li",{children:"All SUGAR POP products are 100% vegetarian, cruelty-free and paraben-free"})]}),(0,e.jsx)("em",{children:"Indulge in a creamy matte affair!"}),(0,e.jsx)("p",{children:"SUGAR POP Matte Mousse Lipstick is an ultra-matte liquid lipstick that coats your lips in a rich creamy layer of pigment. The lightweight mousse formula glides on super smooth and perfects your pout in a single swipe while offering full coverage. No need to worry about lipstick smears, as this water-resistant lippie does not transfer or smudge for up to 10 hours. Enriched with nourishing oils, this matte liquid lipstick not only hydrates your lips but also prevents them from drying out. Choose from a striking range of nudes, pinks, reds and bold hues that are perfect for any occasion or mood"}),(0,e.jsx)("strong",{children:"Benefits:"}),(0,e.jsxs)("ul",{className:"list-disc ml-[5%]",children:[(0,e.jsx)("li",{children:"Full-coverage"}),(0,e.jsx)("li",{children:"Lasts up to 10 hours"}),(0,e.jsx)("li",{children:(0,e.jsx)("span",{children:"Transfer-proof"})}),(0,e.jsx)("li",{children:"Smudge-proof"}),(0,e.jsx)("li",{children:"Lightweight"}),(0,e.jsx)("li",{children:"Highly pigmented"}),(0,e.jsx)("li",{children:"Water-resistant formula"})]})]})]}),x?(0,e.jsx)("span",{className:"text-red-700 moreLink",onClick:()=>I(!x),children:"less-"}):(0,e.jsx)("span",{className:"text-red-700 moreLink",onClick:()=>I(!x),children:"more+"})]}),(0,e.jsx)("h2",{className:"mt-[20px]",children:"VIEW ALL OFFERS"}),(0,e.jsxs)("div",{className:"sm:mt-[30px]  relative px-[15px] py-[10px] shadow-p",children:[(0,e.jsxs)("ul",{className:"list-disc px-2 text-[14px] font-semibold",children:[(0,e.jsx)("li",{children:"FREE Mivi Play Bluetooth Speakers on a spend of Rs.2199"}),(0,e.jsx)("li",{children:"Holographic Pouch + Liquid Lipstick on a spend of Rs.599"}),y&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("li",{children:"Holographic Pouch + Liquid Lipstick on a spend of Rs.599"}),(0,e.jsx)("li",{children:"Holographic Pouch + Liquid Lipstick on a spend of Rs.599"})]})]}),y?(0,e.jsx)("span",{className:"text-red-700 moreLink",onClick:()=>R(!y),children:"less-"}):(0,e.jsx)("span",{className:"text-red-700 moreLink",onClick:()=>R(!y),children:"more+"})]})]}),(0,e.jsxs)("div",{className:"absolute cursor-pointer flex flex-col items-center top-[-36px] lg:top-[15px] right-2",children:[(0,e.jsx)("img",{className:"sharelogo",src:"/share.png",width:24,height:24,alt:"share"}),(0,e.jsx)("span",{className:"text-sm font-semibold ",children:"Share"})]})]}),(0,e.jsxs)("div",{className:"max-w-[1320px] p-[10px] m-auto",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h2",{className:"text-center lg:text-2xl mt-[4%] mb-[2%]",children:["What to Expect from ",a.title," ?"]}),o&&(0,e.jsx)("div",{className:"expect",dangerouslySetInnerHTML:{__html:o}})]}),(0,e.jsxs)("div",{className:"container mx-auto mt-5",children:[(0,e.jsx)("h1",{className:"lg:text-3xl font-semibold mb-4 text-center mt-[4%] mb-[2%]",children:"Product Information"}),(0,e.jsxs)("div",{className:"flex space-x-4 overflow-y-auto lg:justify-center my-[20px]",children:[(0,e.jsx)("div",{className:`cursor-pointer py-2 lg:px-8 px-4  whitespace-nowrap ${p==="Key Ingredients"?"border-active":""}`,onClick:()=>v("Key Ingredients"),style:{border:"1px solid #e5e5e5"},children:"Key Ingredients"}),(0,e.jsx)("div",{className:`cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${p==="How to Use"?"border-active":""}`,onClick:()=>v("How to Use"),style:{border:"1px solid #e5e5e5"},children:"How to Use"}),(0,e.jsx)("div",{className:`cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${p==="Who Can Use"?"border-active":""}`,onClick:()=>v("Who Can Use"),style:{border:"1px solid #e5e5e5"},children:"Who Can Use"}),(0,e.jsx)("div",{className:`cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${p==="Why us"?"border-active":""}`,onClick:()=>v("Why us"),style:{border:"1px solid #e5e5e5"},children:"Why us"})]}),(0,e.jsxs)("div",{className:"mt-4",children:[p==="Key Ingredients"&&d&&(0,e.jsx)("div",{className:"overflow-y-auto overflow-x-auto",children:d&&(0,e.jsx)("div",{className:"expect",dangerouslySetInnerHTML:{__html:d}})}),p==="How to Use"&&c&&(0,e.jsx)("div",{className:"overflow-y-auto",children:(0,e.jsx)("div",{className:"key-ing",dangerouslySetInnerHTML:{__html:c}})}),p==="Who Can Use"&&h&&(0,e.jsx)("div",{className:"overflow-y-auto",children:(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:h}})}),p==="Why us"&&f&&(0,e.jsx)("div",{className:"overflow-y-auto",children:(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:f}})})]})]})]})]})}function z({selectedVariant:t}){return(0,e.jsxs)("div",{className:"product-price flex gap-[10px]",children:[t?.compareAtPrice?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"product-price-on-sale font-semibold",children:[t?(0,e.jsx)(N,{data:t.price}):null,(0,e.jsx)("s",{children:(0,e.jsx)(N,{data:t.compareAtPrice})})]})}):t?.price&&(0,e.jsx)(N,{className:"font-semibold",data:t?.price}),(0,e.jsx)("div",{children:(0,e.jsx)("span",{className:"font-semibold bg-[#e1eecc] py-1 px-2 text-sm rounded",children:"FREE SHIPPING"})})]})}function q({product:t,selectedVariant:a,variants:r,activeImg:i,setActiveImage:n}){return(0,e.jsxs)("div",{className:"product-form",children:[(0,e.jsx)(L,{handle:t.handle,options:t.options,variants:r,children:({option:l})=>(0,e.jsx)(Q,{option:l,activeImg:i,setActiveImage:n},l.name)}),(0,e.jsx)("br",{}),(0,e.jsx)(j,{disabled:!a||!a.availableForSale,onClick:()=>{window.location.href=window.location.href+"#cart-aside"},lines:a?[{merchandiseId:a.id,quantity:1}]:[],children:a?.availableForSale?"ADD TO CART":"Sold out"})]})}function Q({option:t,activeImg:a,setActiveImage:r}){let[i,n]=(0,m.useState)(!1),[l,o]=(0,m.useState)("+View More");return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"product-options",children:[(0,e.jsx)("h5",{className:"font-semibold",children:t.name}),(0,e.jsx)("div",{className:"product-options-grid items-center",children:t.values.map(({value:d,isAvailable:c,isActive:h,to:f})=>(0,e.jsx)(b,{className:"product-options-item",prefetch:"intent",preventScrollReset:!0,replace:!0,to:f,style:{border:h?"1px solid black":"1px solid transparent",opacity:c?1:.3,borderRadius:"5px"},onClick:()=>{r(selectedVariant?.image.url)},children:(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:d}})},t.name+d))}),(0,e.jsx)("br",{})]},t.name),(0,e.jsxs)("div",{className:"bg-[#f7f7f7] py-[10px] pl-[50px]",children:[(0,e.jsx)("h2",{className:"text-[16px]",children:"AVAILABLE OFFERS!!"}),(0,e.jsxs)("ul",{className:"text-[#757575] list-disc",children:[(0,e.jsx)("li",{children:"FREE Mivi Play Bluetooth Speakers on a spend of Rs.2199"}),(0,e.jsx)("li",{children:"Holographic Pouch + Liquid Lipstick on a spend of Rs.599"}),i&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("li",{children:"Shop for Rs.999 and get Flat Rs.100 off"}),(0,e.jsx)("li",{children:"Shop for Rs.1299 and get Flat Rs.200 off"}),(0,e.jsx)("li",{children:"Shop for Rs.1499 and get Flat Rs.300 off"})]}),(0,e.jsx)("span",{onClick:()=>{n(!i),o(l==="+View More"?"-View Less":"+View More")},className:"text-red-700 cursor-pointer",children:l})]})]})]})}function j({analytics:t,children:a,disabled:r,lines:i,onClick:n}){let[l,o]=(0,m.useState)(1);return i[0].quantity=l,console.log(i[0].merchandiseId),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(C,{route:"/cart",inputs:{lines:i},action:C.ACTIONS.LinesAdd,children:d=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{name:"analytics",type:"hidden",value:JSON.stringify(t)}),(0,e.jsxs)("div",{className:"flex flex-row items-center gap-4 mobile-cart-product",children:[(0,e.jsxs)("div",{className:"flex flex-row items-center py-[6px] px-[8px] rounded-xl",style:{border:"1px solid #000",background:"white"},children:[(0,e.jsx)("button",{className:" text-xl",onClick:()=>{l!=0&&o(c=>c-1)},children:"-"}),(0,e.jsx)("span",{className:"px-4",children:l}),(0,e.jsx)("button",{className:" text-xl",onClick:()=>o(c=>c+1),children:"+"})]}),(0,e.jsx)("button",{className:"w-[150px] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg",type:"submit",onClick:n,disabled:r??d.state!=="idle",children:a})]})]})}),(0,e.jsx)("p",{className:"lg:mt-6",style:{width:"100%",borderBottom:"1px dashed #bdbdbd"}}),(0,e.jsx)("div",{className:"mt-2",children:(0,e.jsx)("img",{src:"/BrandBand.svg",alt:"brand"})}),(0,e.jsx)("p",{className:"mt-2",style:{width:"100%",borderBottom:"1px dashed #bdbdbd"}})]})}var F=`#graphql
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
`,Y=`#graphql
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
  ${F}
`,pe=`#graphql
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
  ${Y}
`,J=`#graphql
  fragment ProductVariants on Product {
    variants(first: 50) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${F}
`,ue=`#graphql
  ${J}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;export{U as default,B as meta};

