import {useMatches, NavLink} from '@remix-run/react';
import {Typography} from '@material-tailwind/react';
import {TERipple} from 'tw-elements-react';

const SITEMAP = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Our Team', 'Projects'],
  },
  {
    title: 'Help Center',
    links: ['Discord', 'Twitter', 'GitHub', 'Contact Us'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Free Products', 'Affiliate Program'],
  },
  {
    title: 'Products',
    links: ['Templates', 'UI Kits', 'Icons', 'Mockups'],
  },
];

const currentYear = new Date().getFullYear();

export function Footer({menu}) {
  /*return (
    <footer className="footer">
      <FooterMenu menu={menu} />
    </footer>

  );*/
  console.log(menu.items);
  return (
    <>
      <footer className="mt-8">
        <div className="max-w-[1000px] m-auto">
          <div className="footer-section text-center text-xl font-semibold border-y-2 py-4">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-1">
            <div className="cursor-pointer">Stores</div>
              <div className="cursor-pointer">Terms & Conditions</div>
              <div className="cursor-pointer">Returns</div>
              <div className="cursor-pointer">FAQs</div>
              <div className="cursor-pointer">About Us</div>
            </div>
           
          </div>
          <div className="m-4 footer-contact max-w-[600px] m-auto">
            <div>
              <h2 className="font-semibold text-2xl">GET IN TOUCH</h2>
              <h3 className="mt-4 mb-2 text-md font-semibold">Call us at</h3>
              <a className="mt-2 font-bold text-xl text-[#969696]" href="#">
                +91-9999999999
              </a>
              <p className="mt-2 font-semibold text-[#969696]">
                Monday to Friday : 9 AM to 7 PM
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Support</h2>
              <a className="mt-2 font-bold text-xl text-[#969696]" href="#">
                helpdesk@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* <div className="container p-6 mx-auto">
          <div className="">
            <span className="flex items-center justify-center w-full">
              <span className="mr-4">Register for free</span>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                >
                  Sign up!
                </button>
              </TERipple>
            </span>
          </div>
        </div> */}

        {/* <!--Copyright section--> */}
        <div className="p-4 text-center bg-black bg-opacity-20">
          © 2023 Copyright:
          <a className="text-white" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>
      </footer>
    </>
  );
}

function FooterMenu({menu}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : '',
    color: isPending ? 'grey' : 'white',
  };
}
