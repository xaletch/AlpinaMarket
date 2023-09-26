import React, { useState } from 'react'

type CategoryItem = {
    name: string;
    className: string;
};

type SortItem = {
    name: string;
};

const category: CategoryItem[] = [
    {name: "Цена", className: ""},
    {name: "Распродажa", className: ""},
    {name: "Цвет", className: ""},
    {name: "Размер", className: ""},
    {name: "Все фильтры", className: "all-filters"},
]
  
  export const sortList: SortItem[] = [
    { name : 'Сначала дешёвые'},
    { name : 'Сначала дорогие'},
    { name : 'Сначала новые'},
    { name : 'Сначала популярные'},
    { name : 'По размеру скидки'},
  ];

export const Filters = ({ setOpenMenuFilter }) => {
    const [sortPopupMenu, setSortPopupMenu] = useState<boolean>(false);

  return (
    <div className='filter'>
        <div className="filter_wrapper">
            <div className="filter_filters">
                <ul className='filter_filters-list'> 
                    {category.map((item, index) => (
                        <li className={`filter_filters-item ${item.className}`} key={index} onClick={() => setOpenMenuFilter(true)}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className='filter_popup-wrapper'>
                <div className="filter-label" onClick={() => setSortPopupMenu(!sortPopupMenu)}>
                    <span >Сначала популярные</span>
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
                <div className="filter_popup" style={sortPopupMenu ? {maxHeight: '240px'} : {}}>
                    <ul>
                        {sortList.map((item, index) => (
                            <li key={index} className={'filter_popup-item'}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
