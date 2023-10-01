import React, { useState } from 'react'

const colors = [
    {name: "бордовый", id: 1},
    {name: "темно-серый", id: 2},
    {name: "коричневый", id: 3},
    {name: "венге", id: 4},
    {name: "слоновая кость", id: 5},
    {name: "прозрачный", id: 6},
    {name: "Черно-белые", id: 7},
    {name: "серебристый", id: 8},
    {name: "Опал белый", id: 9},
    {name: "черный", id: 10},
    {name: "cерый", id: 11},
    {name: "орех", id: 12},
    {name: "золотой", id: 13},
    {name: "фиолетовый", id: 14},
    {name: "зеленый", id: 15},
    {name: "бежевый", id: 16},
    {name: "жемчужный", id: 17},
    {name: "серо-голубой", id: 18},
    {name: "вишня", id: 19},
    {name: "дуб беленый", id: 20},
]

export const Color = () => {
    const [colorPopupActive, setColorPopupActive] = useState<boolean>(false)

    const handleColorPopup = () => {
        setColorPopupActive(!colorPopupActive);
    }

  return (
    <div className='filter_menu-color'>
        <div className={colorPopupActive ? 'filter_menu-color_name' : 'filter_menu-popup-name'} onClick={handleColorPopup}>
            <span>Цвет</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M2.58658 1.41287L2.40981 1.23648L2.23322 1.41307L0.823223 2.82307L0.646447 2.99984L0.823223 3.17662L6.82322 9.17662L7 9.3534L7.17678 9.17662L13.1768 3.17662L13.3536 2.99984L13.1768 2.82307L11.7668 1.41307L11.5902 1.23648L11.4134 1.41287L7 5.81668L2.58658 1.41287Z" fill="black" stroke="white" stroke-width="0.5"/>
            </svg>
        </div>
        <div className={colorPopupActive ? 'filter_menu-color-popup filter_menu-color-popup_active' : 'filter_menu-color-popup filter_menu-popup'}>
            <ul className='filter_menu-color-popup_list filter_menu-popup-list'>
                {colors.map((item, index) => (
                    <li key={index} className='filter_menu-color-popup_item filter_menu-popup-item'>
                        <label>
                            <input type="checkbox" />
                            <span>{item.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
