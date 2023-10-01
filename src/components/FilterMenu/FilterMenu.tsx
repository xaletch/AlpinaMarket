import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Color } from './Color';

const filter = [
    { all: "Мебель", under: [
        { name: "Кровати и матрасы", className: "filter_menu-furniture-item-one", id: 1},
        { name: "Кухня", className: "", id: 2},
        { name: "Мягкая мебель", className: "", id: 3},
        { name: "Столы и стулья", className: "", id: 4},
        { name: "Шкафы, комоды и тумбы", className: "", id: 5},
        { name: "Спальня", className: "", id: 6},
        { name: "Гостиная", className: "", id: 7},
        { name: "Кабинет", className: "", id: 8},
        { name: "Прихожая", className: "", id: 9},
        { name: "Детская", className: "", id: 10},
        { name: "Садовая мебель", className: "", id: 11},
    ]},
];

export const FilterMenu = ({ openMenuFilter, setOpenMenuFilter }) => {
    const [filterSelectedFurniture, setFilterSelectedFurniture] = useState<number>(0);

    const handleClickSelectedFurniture = (index: number) => {
        setFilterSelectedFurniture(index);
    };

    const handleClickCloseMenuFilter = () => {
        setOpenMenuFilter(false);
    };

  return (
    <div className='filter_menu'>
        <div className={openMenuFilter ? 'filter_menu-wrapper filter_menu-wrapper-active' : 'filter_menu-wrapper'}>
            <div className='filter_menu-head' onClick={handleClickCloseMenuFilter}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="16" y="17" width="21.3483" height="1.5" rx="0.75" transform="rotate(-135 16 17)" fill="black"/>
                    <rect x="1" y="16" width="21.3483" height="1.5" rx="0.75" transform="rotate(-45 1 16)" fill="black"/>
                </svg>
            </div>
            <h2 className='filter_menu-title'>Фильтры</h2>
            <div className='filter_menu-content'>
                <div className='filter_menu-furniture'>
                    <ul className='filter_menu-furniture-list'>
                        {filter.map((item, index) => (
                            <li className='filter_menu-furniture-title' key={index}>
                                <Link to='/catalog' className={filterSelectedFurniture === index ? 'filter_menu-furniture-item_active' : 'filter_menu-furniture-link'} onClick={() => handleClickSelectedFurniture(index)}>
                                    {item.all}
                                    <span></span>
                                </Link>
                                <ul className='filter_menu-furniture-list'>
                                    {item.under.map((name, index) => (
                                        <li className={`filter_menu-furniture-item ${name.className}`} key={index}>
                                            <Link to='/catalog' className={filterSelectedFurniture === name.id ? 'filter_menu-furniture-item_active' : ''} onClick={() => handleClickSelectedFurniture(name.id)}>
                                                {name.name}
                                                <span></span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <Color />
            </div>
            <div className='filter_menu-bottom'>
                <div className='filter_menu-bottom-btn filter_menu-bottom-btn_clear'>Очистить</div>
                <div className='filter_menu-bottom-btn filter_menu-bottom-btn_apply' onClick={handleClickCloseMenuFilter}>Применить</div>
            </div>
        </div>
        {openMenuFilter && (<div className="filter_menu-shadow" onClick={handleClickCloseMenuFilter}></div>)}
    </div>
  )
}
