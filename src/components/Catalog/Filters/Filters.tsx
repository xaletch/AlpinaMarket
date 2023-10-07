import React, { useState } from 'react'

import link_img from '../../../assets/img/link_img';

type CategoryItem = {
    name: string;
    className: string;
};

type SortItem = {
    name: string;
    id: number;
};

const category: CategoryItem[] = [
    {name: "Цена", className: ""},
    {name: "Распродажa", className: ""},
    {name: "Цвет", className: ""},
    {name: "Размер", className: ""},
    {name: "Все фильтры", className: "all-filters"},
]
  
  export const sortList: SortItem[] = [
    { name : 'Сначала дешёвые', id: 1},
    { name : 'Сначала дорогие', id: 2},
    { name : 'Сначала новые', id: 3},
    { name : 'Сначала популярные', id: 4},
    { name : 'По размеру скидки', id: 5},
  ];

export const Filters = ({ setOpenMenuFilter }) => {
    const [sortPopupMenu, setSortPopupMenu] = useState<boolean>(false);
    const [selectSort, setSelectSort] = useState<string>("Сначала популярные");

    const handleSelectSort = (index: string) => {
        setSelectSort(index);
        setSortPopupMenu(false);
    };

  return (
    <div className='filter'>
        <div className="filter_wrapper">
            <div className="filter_filters">
                <ul className='filter_filters-list'> 
                    {category.map((item, index) => (
                        <li className={`filter_filters-item ${item.className}`} key={index} onClick={() => setOpenMenuFilter(true)}>{item.name}</li>
                    ))}
                </ul>
                <div className='filter_filters-open' onClick={() => setOpenMenuFilter(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M8.3125 19C8.22173 19 8.13026 18.9783 8.04704 18.9333C7.86398 18.8358 7.75 18.6445 7.75 18.4375V11.2225C7.75 10.9601 7.63972 10.7079 7.44623 10.5311L1.42531 5.01619C1.1545 4.76721 1 4.41469 1 4.04871V2.31245C1 1.58873 1.58873 1 2.31245 1H17.6875C18.4113 1 19 1.58873 19 2.31245V4.04871C19 4.41469 18.8455 4.76721 18.5755 5.01619L12.5553 10.5317C12.3603 10.7079 12.25 10.9601 12.25 11.2225V15.7855C12.25 16.225 12.0318 16.6337 11.6658 16.8774L8.62451 18.9047C8.53072 18.9686 8.42195 19 8.3125 19ZM2.31245 2.125C2.20905 2.125 2.125 2.20905 2.125 2.31245V4.04871C2.125 4.1013 2.14752 4.15157 2.18652 4.18755L8.20525 9.70145C8.63055 10.0915 8.875 10.6457 8.875 11.2225V17.386L11.0418 15.9415C11.0936 15.9069 11.125 15.8484 11.125 15.7855V11.2225C11.125 10.645 11.3688 10.0908 11.7954 9.70145L17.8143 4.18672C17.8525 4.15157 17.875 4.1013 17.875 4.04871V2.31245C17.875 2.20905 17.791 2.125 17.6875 2.125H2.31245Z" fill="black" stroke="black" strokeWidth="0.2"/>
                    </svg>
                </div>
            </div>
            <div className='filter_popup-wrapper'>
                <div className="filter-label" onClick={() => setSortPopupMenu(!sortPopupMenu)}>
                    <span >{selectSort}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_2285_157918)">
                            <path d="M7.58658 8.41312L7.40981 8.23673L7.23322 8.41331L5.82322 9.82331L5.64645 10.0001L5.82322 10.1769L11.8232 16.1769L12 16.3536L12.1768 16.1769L18.1768 10.1769L18.3536 10.0001L18.1768 9.82331L16.7668 8.41331L16.5902 8.23673L16.4134 8.41312L12 12.8169L7.58658 8.41312Z" fill="black" stroke="white" strokeWidth="0.5"/>
                        </g>
                       <defs>
                            <clipPath id="clip0_2285_157918">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='filter-label_tablet'>
                    <img src={link_img.sort_popup_catalog} alt="" onClick={() => setSortPopupMenu(!sortPopupMenu)} />
                </div>
                <div className="filter_popup" style={sortPopupMenu ? {maxHeight: '240px'} : {}}>
                    <ul>
                        {sortList.map((item, index) => (
                            <li key={index} className={selectSort === item.name ? 'filter_popup-item filter_popup-item_active' : 'filter_popup-item'} onClick={() => handleSelectSort(item.name)}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
