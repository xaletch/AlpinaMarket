import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { PageNavigation } from './headerComponents/PageNavigation';
import { Navigation } from './headerComponents/Navigation';
import { ProductNavigation } from './headerComponents/ProductNavigation';
import { Search } from './headerComponents/Search';
import { LocationPopup } from './headerComponents/LocationPopup';
import { CallOrWrite } from './headerComponents/CallOrWrite';
import { ProductMenu } from './headerComponents/ProductMenu';
import { LocationMenu } from './headerComponents/LocationMenu';
import { SearchMenu } from './SearchMenu';


import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { MobileMenu } from './headerComponents/MobileMenu';


export const Header = ({ searchValue, products }) => {
  const { items, totalPrice, discountPrice } = useSelector((state: RootState) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [selectedCity, setSelectedCity] = useState(() => {
    const savedCity = localStorage.getItem("city");
    return savedCity ? JSON.parse(savedCity) : "Москва";
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  
  const inputRef: any = React.useRef<HTMLInputElement>(null);
  const localeStorageRef = React.useRef(false);
  

  React.useEffect(() => {
    if (localeStorageRef.current) {
      const json = JSON.stringify(items);
      const price = JSON.stringify(totalPrice);
      
      localStorage.setItem("cart", json);
      localStorage.setItem("cartPrice", price);
    };

    localeStorageRef.current = true;
  }, [items, totalPrice, discountPrice]);

  const handleMouseLeave = () => {
    setSelectedCategoryId(null);
  };

  React.useEffect(() => {
    if (isSearchOpen) {
      inputRef.current.focus()
    }
  }, [isSearchOpen]);

  const handleClickOpenMobileMenu = () => {
    setIsMobileMenu(true);
  }

  return (
    <div className='header'>
      <div className='container'>
        <SearchMenu inputRef={inputRef} products={products} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} searchValue={searchValue} />
      </div>
      <div className='header__top'>
        <div className='container'>
          <div className='header__top--inner grid'>
            <div className='header__top--left header__location flex'>
              <LocationPopup isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} selectedCity={selectedCity} />
            </div>
            <p className='header__telephone'>8 800 700 40 24</p>
            <CallOrWrite />
            <div className='header__top--navigation'>
              <PageNavigation />
            </div>
          </div>
        </div>
        <LocationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
      </div>
      <div className='container'>
      <div className='header__bottom grid'>
        <Navigation />

        <div className='header__bottom--menu'>
          <div className='header__bottom--menu__btn header_menu-bnt' onClick={handleClickOpenMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
              <rect width="18" height="1.5" rx="0.75" fill="black"/>
              <rect y="6.5" width="18" height="1.5" rx="0.75" fill="black"/>
              <rect y="13" width="18" height="1.5" rx="0.75" fill="black"/>
            </svg>
          </div>
        </div>

          <div className='header__bottom--center logo flex'>
            <Link to='/'>
              <svg width="82" height="32" viewBox="0 0 82 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.57747 12.9409V11.7319C4.57747 11.527 4.7435 11.361 4.94835 11.361H10.9245V13.3118H4.94835C4.7435 13.3118 4.57747 13.1457 4.57747 12.9409ZM12.2102 4.85818H1.84036V7.44454H10.5536C10.7584 7.44454 10.9245 7.61046 10.9245 7.81543V9.16285H3.29418C1.99617 9.16285 0.945312 10.2161 0.945312 11.5118V13.7445C0.945312 15.0418 1.99699 16.0934 3.29418 16.0934H14.5591V7.20711C14.5591 5.90981 13.5075 4.85818 12.2102 4.85818Z" fill="black"/>
                <path d="M35.7638 7.50355C35.689 7.45971 35.5466 7.43607 35.3383 7.43607H28.7677V13.3126H35.3383C35.5484 13.3126 35.689 13.287 35.7638 13.234C35.8388 13.1812 35.8771 13.0588 35.8771 12.8652V7.88521C35.8771 7.67531 35.8388 7.54918 35.7638 7.50355ZM28.7677 20.4894H25.1338V4.85749H35.6305C36.3171 4.85749 36.9088 4.90312 37.4019 4.99259C37.8949 5.08221 38.2986 5.25007 38.6126 5.49664C38.9268 5.7432 39.1549 6.08836 39.2974 6.52837C39.438 6.97048 39.5092 7.53467 39.5092 8.22124V12.7301C39.5092 13.4332 39.438 14.0011 39.2974 14.4339C39.1549 14.8686 38.9268 15.2082 38.6126 15.4547C38.2986 15.7012 37.8949 15.8692 37.4019 15.9588C36.9088 16.0481 36.3171 16.0939 35.6305 16.0939H28.7677V20.4894Z" fill="black"/>
                <path d="M60.1892 7.88507C60.1892 7.67516 60.1509 7.54904 60.0759 7.5034C60.0011 7.45957 59.8587 7.43593 59.6506 7.43593H54.0423V16.0938H50.4102V4.85734H59.941C60.6295 4.85734 61.2193 4.90298 61.7142 4.99244C62.2073 5.08206 62.6108 5.24993 62.9249 5.49649C63.2389 5.74305 63.4672 6.08821 63.6078 6.52823C63.7503 6.97033 63.8215 7.53452 63.8215 8.2211V16.0938H60.1892V7.88507Z" fill="black"/>
                <path d="M71.0501 12.9414V11.7323C71.0501 11.5275 71.2161 11.3615 71.421 11.3615H77.3972V13.3123H71.421C71.2161 13.3123 71.0501 13.1462 71.0501 12.9414ZM78.6828 4.85867H68.313V7.44503H77.0261C77.231 7.44503 77.3972 7.61095 77.3972 7.81592V9.16334H69.7669C68.4687 9.16334 67.418 10.2166 67.418 11.5123V13.7449C67.418 15.0422 68.4696 16.0939 69.7669 16.0939H81.0317V7.20759C81.0317 5.9103 79.9801 4.85867 78.6828 4.85867Z" fill="black"/>
                <path d="M21.4984 16.0938H17.8643V0.461704H21.4984V16.0938Z" fill="black"/>
                <path d="M46.7747 16.0942H43.1406V4.85783H46.7747V16.0942Z" fill="black"/>
                <path d="M10.5968 31.0551V27.6515C10.5968 27.3096 10.5992 26.9625 10.6047 26.6102C10.6097 26.258 10.6225 25.9366 10.6435 25.6467H10.6124C10.5709 25.7088 10.5087 25.7969 10.4259 25.9106C10.3428 26.0248 10.2494 26.1518 10.1462 26.2914C10.0424 26.4314 9.93619 26.5765 9.82743 26.7266C9.71867 26.877 9.61768 27.0092 9.52447 27.1231L7.34864 29.8429H6.6648L4.5199 27.1541C4.42674 27.0402 4.32301 26.908 4.20916 26.7577C4.09491 26.6077 3.98381 26.46 3.87482 26.3147C3.76605 26.1699 3.66763 26.0378 3.57967 25.9185C3.49137 25.7995 3.42662 25.7088 3.38536 25.6467H3.35439C3.37478 25.916 3.38787 26.2242 3.39318 26.5712C3.39821 26.9185 3.4009 27.2577 3.4009 27.5893V31.0551H0.945312V22.8799H3.63409L5.77881 25.631C5.86163 25.745 5.96262 25.8773 6.08189 26.0273C6.20084 26.1775 6.31737 26.3304 6.43162 26.4857C6.54541 26.6412 6.65698 26.7914 6.76573 26.9365C6.87456 27.0817 6.95995 27.1955 7.02212 27.2784H7.05327C7.11545 27.1853 7.19559 27.0712 7.29424 26.9365C7.39248 26.802 7.49873 26.6594 7.61275 26.5092C7.72653 26.359 7.84061 26.2061 7.95469 26.0507C8.06854 25.8952 8.1773 25.7553 8.28099 25.631L10.4259 22.8799H13.0525V31.0551H10.5968Z" fill="black"/>
                <path d="M21.9903 25.2887L20.4206 27.8841H23.591L21.9903 25.2887ZM25.394 31.0547L24.4459 29.423H19.5658L18.6023 31.0547H15.8047L20.9023 22.8796H23.1716L28.2691 31.0547H25.394Z" fill="black"/>
                <path d="M38.4913 24.9932C38.4913 24.8174 38.4548 24.7086 38.3826 24.6671C38.3099 24.6257 38.2011 24.6049 38.056 24.6049H33.5335V26.6719H38.056C38.2217 26.6719 38.3359 26.6486 38.3978 26.6019C38.4601 26.5554 38.4913 26.4492 38.4913 26.2834V24.9932ZM38.3978 31.0547L35.6937 28.4125H33.5335V31.0547H31.0156V22.8796H38.3048C38.8332 22.8796 39.2657 22.9162 39.6024 22.9884C39.9392 23.0612 40.2032 23.1828 40.3953 23.3536C40.5867 23.5246 40.7216 23.7474 40.7991 24.022C40.8769 24.2967 40.9158 24.6414 40.9158 25.0555V26.2834C40.9158 26.5841 40.882 26.8638 40.8147 27.1227C40.7474 27.3817 40.6283 27.6045 40.4573 27.791C40.2863 27.9774 40.0557 28.1249 39.7659 28.2339C39.4755 28.3425 39.113 28.3971 38.6779 28.3971L41.5686 31.0547H38.3978Z" fill="black"/>
                <path d="M51.9986 31.0551L47.1341 27.8691V31.0551H44.6162V22.8799H47.1341V25.8175L51.7034 22.8799H55.3712L49.2478 26.7812L55.9463 31.0551H51.9986Z" fill="black"/>
                <path d="M58.6533 31.0551V22.8799H68.0716V24.6053H61.171V26.0818H65.8336V27.6048H61.171V29.2678H68.1494V31.0551H58.6533Z" fill="black"/>
                <path d="M74.5374 31.0547V24.6049H70.5586V22.8796H81.0339V24.6049H77.0553V31.0547H74.5374Z" fill="black"/>
              </svg>
            </Link>
          </div>
        <div className='header__bottom--right flex'>
            <div className='header__bottom--page flex'>
            <Link to='cart'>
              <span className='header__bottom--basket basket'>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4402 18.1075L15.3448 5.90959C15.315 5.57648 15.0358 5.32132 14.7014 5.32132H12.4426V4.30259C12.4426 2.404 10.8981 0.859375 8.99956 0.859375C7.10114 0.859375 5.55677 2.404 5.55677 4.30259V5.32132H3.29647C2.96206 5.32132 2.68287 5.57648 2.65298 5.90959L1.55336 18.1555C1.53717 18.3362 1.59764 18.5153 1.72005 18.6492C1.84246 18.7831 2.01552 18.8593 2.19685 18.8593H15.8011C15.8016 18.8593 15.8023 18.8593 15.8028 18.8593C16.1597 18.8593 16.4489 18.57 16.4489 18.2132C16.4488 18.1773 16.4458 18.1419 16.4402 18.1075ZM6.84892 4.30259C6.84892 3.11649 7.81372 2.15152 8.99965 2.15152C10.1857 2.15152 11.1505 3.11649 11.1505 4.30259V5.32132H6.84892V4.30259ZM2.90357 17.5672L3.88715 6.61346H5.55677V7.76881C5.55677 8.12562 5.84595 8.41489 6.20284 8.41489C6.55973 8.41489 6.84892 8.12562 6.84892 7.76881V6.61346H11.1505V7.76881C11.1505 8.12562 11.4397 8.41489 11.7966 8.41489C12.1535 8.41489 12.4427 8.12562 12.4427 7.76881V6.61346H14.1108L15.0943 17.5672H2.90357Z" fill="black"/>
                  </svg>
                {items.length === 0 ? '' :
                  <b className='basket--count header__bottom--count flex'>
                    <span className='count'>{items.length}</span>
                  </b>
                }
              </span>
              </Link>
            </div>
        </div>
      </div>
      <div className='header__bottom--navigation header__navigation flex'>
        <ProductNavigation setSelectedCategoryId={setSelectedCategoryId} selectedCategoryId={selectedCategoryId} />
        <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      </div>
      </div>
      {selectedCategoryId && (
        <div className='header__navigation--product--block' onMouseLeave={handleMouseLeave} >
          <ProductMenu selectedCategoryId={selectedCategoryId} />
        </div>
      )}
      {isMobileMenu && (
        <div className={isMobileMenu ? 'header_menu header_menu-activate' : 'header_menu'}>
          <MobileMenu isMobileMenu={isMobileMenu} setIsMobileMenu={setIsMobileMenu} selectedCity={selectedCity} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setSelectedCity={setSelectedCity} />
        </div>
      )}
    </div>
  )
}
