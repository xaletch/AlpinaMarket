import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LocationMenu } from './LocationMenu';
import { MobileMenuCategory } from './MobileMenuCategory';
import { navigationProduct } from './productNavigate';
import { MobileMenuCategoryCatalog } from './MobileMenuCategoryCatalog';

const categories = [
    { title: "Каталог",  id: 1},
    { title: "Комнаты",  id: 2},
    { title: "Дизайн-проекты",  id: 3},
    { title: "Мебель на заказ", id: 4},
];
const navigation = [
    {"title": 'О нас', "navigation": "about"},
    {"title":'Наши салоны', "navigation": "salons"},
    {"title": 'Оплата и доставка', "navigation": "paymentDelivery"},
];

export const MobileMenu = ({ isMobileMenu, selectedCity, setIsMobileMenu, isMenuOpen, setIsMenuOpen, setSelectedCity }) => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<number | null>(null);
    // const [previousCategory, setPreviousCategory] = useState<number | null>(null);

    const handleClickCloseMobileMenu = () => {
        setIsMobileMenu(false);
        setIsMenuOpen(false);
    };

    const handleClickSelectedCategory = (index: number) => {
        setSelectedCategory(index);
        // setPreviousCategory(selectedCategory);
        // console.log('category id: ',setPreviousCategory(selectedCategory));
    };

    console.log(selectedCategory);
    // console.log(previousCategory);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickNavigation = () => {
        setIsMobileMenu(false);
    };

    const handleClickComeBack = () => {
        // setSelectedCategory(previousCategory);
        setSelectedCategory(null);
        setSelectedCategories(null);
    };

    return (
        <>
            <div className='header_menu-inner'>
                <div className='header_menu-head'>
                    <div className={selectedCategory || selectedCategories ? 'header_menu-head_back-active' : 'header_menu-head_back'} onClick={handleClickComeBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M19 8.5L1 8.5M1 8.5L6.29412 14M1 8.5L6.29412 3" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    {categories.map((item, index) => item.id === selectedCategory && <h2 className='header_menu-head_title' key={index}>{item.title}</h2>)}
                    <div className='header_menu-head_close' onClick={handleClickCloseMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <rect x="16" y="17" width="21.3483" height="1.5" rx="0.75" transform="rotate(-135 16 17)" fill="black"/>
                            <rect x="1" y="16" width="21.3483" height="1.5" rx="0.75" transform="rotate(-45 1 16)" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className='header_menu-content'>
                    <ul className='header_menu-content-categories'>
                        {categories.map((item, index) => (
                            <li className='header_menu-content-categories_item' key={index} onClick={() => handleClickSelectedCategory(item.id)}>{item.title}</li>
                        ))}
                    </ul>
                    <div className='header_menu-content-location'>
                        <div onClick={handleClick}>
                            <span className='header__location--name'>{selectedCity}</span>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.11658 0.549715L1.93981 0.373324L1.76322 0.549908L0.823223 1.48991L0.646447 1.66668L0.823223 1.84346L4.82322 5.84346L5 6.02024L5.17678 5.84346L9.17678 1.84346L9.35355 1.66668L9.17678 1.48991L8.23678 0.549908L8.06019 0.373324L7.88342 0.549715L5 3.42685L2.11658 0.549715Z" fill="black" stroke="white" strokeWidth="0.5"/>
                            </svg>
                        </div>
                        <LocationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
                    </div>
                    <ul className='header_menu-content-navigation'>
                        {navigation.map((item, index) => (
                            <Link to={item.navigation} key={index} onClick={handleClickNavigation}>
                                <li className='header_menu-content-navigation_item'>{item.title}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            {selectedCategory && (
                <MobileMenuCategory navigationProduct={navigationProduct} selectedCategory={selectedCategory} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
            )}
            {selectedCategories && (
                <MobileMenuCategoryCatalog selectedCategories={selectedCategories} />
            )}
        </>
    )
}
