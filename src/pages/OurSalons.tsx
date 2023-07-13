import React from 'react'
import { ButtonComeBack } from '../components/ButtonComeBack'
import { Link } from 'react-router-dom'

import { YandexMap } from '../components/YandexMap';

interface Selected {
    selected: number | null;
    onSelected: (id: number) => void;
}

const addressItem = ["Списком", "На карте"]

const listCard = [
    {
        street: "Прямкова, 82",
        titleList: [
            {
                title: "Сегодня с 10:00 до 19:00",
                txt: "Открыто"
            },
            {
                title: "+7 (3452) 54‒61‒62",
                txt: "Позвонить"
            },
            {
                title: "Dryppa90@gmail.com",
                txt: "Написать"
            }
        ]
        
    },
    {
        street: "Федюнинского, 43",
        titleList: [
            {
                title: "Сегодня с 10:00 до 19:00",
                txt: "Открыто"
            },
            {
                title: "+7 (3452) 54‒61‒62",
                txt: "Позвонить"
            },
            {
                title: "Dryppa90@gmail.com",
                txt: "Написать"
            }
        ]
    },
    {
        street: "30 лет победы, 7",
        titleList: [
            {
                title: "Сегодня с 10:00 до 19:00",
                txt: "Открыто"
            },
            {
                title: "+7 (3452) 54‒61‒62",
                txt: "Позвонить"
            },
            {
                title: "Dryppa90@gmail.com",
                txt: "Написать"
            }
        ]
    },
]

export const OurSalons: React.FC<Selected> = ({ selected, onSelected }) => {

  return (
    <div className='our-salons container'>
        <ButtonComeBack />
        <h2 className='our-salons__title'>Наши салоны</h2>
        <div className='our-salons__address'>
            <ul className='our-salons__address--list flex'>
                {addressItem.map((item, i) => (
                    <li key={i} onClick={() => onSelected(i)} className={selected === i ? 'our-salons__address--item active' : 'our-salons__address--item'}>{item}</li>
                ))}
            </ul>
            <div className='our-salons__address--line'></div>
        </div>
        {selected === 0 ? (
            <div className='our-salons__wrapper flex'>
            {listCard.map((item, index) => (
                <div className='our-salons__wrapper--card flex' key={index}>
                    <p className='our-salons__wrapper--card__address flex'>
                        {item.street}
                        <span className='our-salons__wrapper--card__address--b'></span>
                    </p>
                    <div className='our-salons__wrapper--card__address--link'>
                        <Link to='#'>маршрут</Link>
                        <div className='our-salons__wrapper--card__address--link__border'></div>
                    </div>
                    <ul className='our-salons__wrapper--card__list'>
                        {item.titleList.map((item, index) => (
                            <li className='our-salons__wrapper--card__item' key={index}>
                                <p className='our-salons__wrapper--card__item--title flex'>
                                    {item.title}
                                    <span className='our-salons__wrapper--card__item--text'>{item.txt}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        ) : (
            <div className='our-salons__map' style={{ width: '100%', height: '400px' }}>
                <YandexMap/>
            </div>
        )}
    </div>
  )
}
