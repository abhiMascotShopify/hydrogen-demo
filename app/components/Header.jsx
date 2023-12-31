import {Await, NavLink, useMatches} from '@remix-run/react';
import React, {useState} from 'react';
import {TERipple} from 'tw-elements-react';
import {Suspense} from 'react';
import {useMediaQuery} from 'react-responsive';
//import Navbar from "./Navbar/Navbar";
//import {PredictiveSearchForm, SearchForm} from '~/components/Search'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from '@material-tailwind/react';
import SearchComponent from '~/components/SearchComponent';
import {
  PredictiveSearchForm,
  PredictiveSearchResults,
} from '~/components/Search';

export function Header({header, isLoggedIn, cart}) {
  const {shop, menu} = header;
  //console.log(header.menu)
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  return (
    <>
      <header className="header border-b border-gray-200">
        <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
          <strong>{shop.name}</strong>
        </NavLink>

        {isLargeScreen && (
          <div className="m-auto">
            <div className="relative flex w-full flex-wrap items-stretch">
              <div className="bg-white rounded w-full">
                <PredictiveSearchForm>
                  {({fetchResults, inputRef}) => (
                    <div className=" ">
                      <div className="relative  flex w-full items-center items-stretch">
                        <input
                          type="search"
                          className="relative lg:w-[470px] m-0 py-[10px] px-[15px] block  rounded-bl-lg rounded-tl-lg border border-solid border-black bg-transparent bg-clip-padding  text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                          aria-label="Search"
                          aria-describedby="button-addon3"
                          name="q"
                          onChange={fetchResults}
                          onFocus={fetchResults}
                          placeholder='Try "Lipstick"'
                          ref={inputRef}
                        />
                        <TERipple>
                          <button
                            className="relative z-[2] rounded-tr-lg rounded-br-lg border border-1 border-black p-[15px] text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            type="submit"
                            id="button-addon3"
                          >
                            Search
                          </button>
                        </TERipple>
                      </div>
                    </div>
                  )}
                </PredictiveSearchForm>
                <PredictiveSearchResults />
              </div>
            </div>
          </div>
        )}
        <div className="sm:flex gap-2 items-center sm:block hidden ">
          {/* <img src="/user.png" width={20} height={20} alt="user" /> */}
          <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
            {isLoggedIn ? (
              'Acc'
            ) : (
              <div className='login_wrapper'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              <span className="login_span font-semibold mt-[-3px] ">Login/Register</span>
              </div>
            )}
            
          </NavLink>
        </div>
        <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
      </header>
      <HeaderMenu menu={menu} viewport="desktop" />
    </>
  );
}

export function HeaderMenu({menu, viewport}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  const className = `header-menu-${viewport}`;
  //const [isOpen, setisOpen] = useState(false)
  //console.log(menu);
  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
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
  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={closeAside}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        ></NavLink>
      )}
      {menu.items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') || 
          item.url.includes(publicStoreDomain)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <div className="relative inline-block text-left group">
            <button onClick={()=> goToCollection(item.url) } className="px-4 py-2 text-gray-800 focus:outline-none">
              {item.title}
            </button>
            {item.items.length > 0 && (
              <div className="absolute hidden mt-2 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg group-hover:block">
                <div className="py-1">
                  {item.items.map((it) => (
                    <a
                      href={getPath(it.url)}
                      className="menu block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:opacity-100"
                    >
                    {it.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      {/*<SearchComponent></SearchComponent>*/}
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        {isLoggedIn ? (
          'Acc'
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:hidden block"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
      <HeaderMenuMobileToggle />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a className="header-menu-mobile-toggle" href="#mobile-menu-aside">
      <h3>☰</h3>
    </a>
  );
}

function SearchToggle() {
  return (
    <a href="#search-aside">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </a>
  );
}

function CartBadge({count}) {
  return (
    <>
    <a href="#cart-aside">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </a>
     <a href="/offers">
     <svg width="22.81px" height="22px" viewBox="0 0 20 21" fill="var(--navbar-color)" xmlns="http://www.w3.org/2000/svg" alt="discount_icon"><path fill-rule="evenodd" clip-rule="evenodd" d="m8.744 3.662.832-.803.832.803a3 3 0 0 0 2.504.813l1.146-.162.2 1.134a3 3 0 0 0 1.55 2.132l1.018.54-.505 1.03a3 3 0 0 0 0 2.639l.505 1.031-1.018.54a3 3 0 0 0-1.55 2.131l-.2 1.134-1.146-.162a3 3 0 0 0-2.504.813l-.832.804-.832-.804a3 3 0 0 0-2.504-.813l-1.146.162-.2-1.134a3 3 0 0 0-1.55-2.132l-1.018-.539.505-1.031a3 3 0 0 0 0-2.638l-.505-1.032 1.018-.539a3 3 0 0 0 1.55-2.132l.2-1.134 1.146.162a3 3 0 0 0 2.504-.813ZM8.88.75a1 1 0 0 1 1.39 0l1.527 1.475a1 1 0 0 0 .834.27l2.104-.296a1 1 0 0 1 1.125.817l.366 2.086a1 1 0 0 0 .517.71l1.874.993a1 1 0 0 1 .43 1.324l-.93 1.901a1 1 0 0 0 0 .88l.93 1.9a1 1 0 0 1-.43 1.324l-1.874.993a1 1 0 0 0-.517.71l-.366 2.087a1 1 0 0 1-1.125.817l-2.104-.297a1 1 0 0 0-.834.27l-1.527 1.475a1 1 0 0 1-1.39 0l-1.527-1.474a1 1 0 0 0-.834-.271l-2.104.297a1 1 0 0 1-1.125-.817l-.366-2.087a1 1 0 0 0-.517-.71l-1.874-.993a1 1 0 0 1-.43-1.323l.93-1.902a1 1 0 0 0 0-.879l-.93-1.901a1 1 0 0 1 .43-1.324l1.874-.992a1 1 0 0 0 .517-.711l.366-2.086a1 1 0 0 1 1.125-.817l2.104.297a1 1 0 0 0 .834-.271L8.881.749Zm4.524 7.31a1 1 0 0 0-1.413-1.415l-6.245 6.234a1 1 0 1 0 1.413 1.416l6.245-6.235Zm-4.87-.188A1.56 1.56 0 0 1 6.974 9.43 1.56 1.56 0 1 1 8.535 7.87Zm3.642 6.754a1.56 1.56 0 0 0 1.561-1.559 1.56 1.56 0 0 0-1.56-1.558 1.56 1.56 0 1 0 0 3.117Z"></path></svg>
      </a>
    </>
  );
}

function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : '',
    color: isPending ? 'grey' : 'black',
  };
}

const DropdownMenu = (item) => {
  //console.log('Drop'+item)
  return (
    <div className="relative inline-block text-left group">
      <button className="px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none">
        Hover
      </button>
      <div className="absolute hidden mt-2 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg group-hover:block">
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Item 3
          </a>
        </div>
      </div>
    </div>
  );
};

{
  /*<header className="header">
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <strong>{shop.name}</strong>
      </NavLink>
      <HeaderMenu menu={menu} viewport="desktop" />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
  </header>*/
}
{
  /*<NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={closeAside}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          > {item.title} 
          <DropdownMenu item={item} />
        </NavLink>*/
}

{
  /*<div className="absolute hidden mt-2 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg group-hover:block">
            <div className="py-1">
              {item.items.map((it)=>(
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Item 1
              </a>
              ))}              
            </div>
              </div>*/
}
