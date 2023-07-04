import React from 'react'
import { homeFurnitureArray } from './arrays/homeFurniture'

export const HomeFurniture = () => {
  return (
    <>
        <div className='home__furniture--left'>
            <div className='home__furniture--left__inner'>
                <h3 className='home__furniture--left--title'>Мебель для ресторанов  гостиниц, или офиса</h3>
                <p className='home__furniture--left--description'>
                    Мы стремимся к европейскому качеству, поэтому используем фасады 
                        и элементы декора, созданные итальянскими дизайнерами 
                </p>
                <button className='home__furniture--left__btn'>Подробнее</button>
            </div>
        </div>
        <div className='home__furniture--right flex'>
            {homeFurnitureArray.map((obj, i) => (
                <div className='home__furniture--right__card' key={i}>
                    <img src={obj.img} alt="error" />
                    <div className='home__furniture--right__card--title'>
                        <span className='home__furniture--right__card--title'>{obj.title}</span>
                    </div>
                </div>
            ))}
            <div className='home__furniture--right--slide button__slide flex'>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H17M17 6L12 1M17 6L12 11" stroke="black"/>
                </svg>
            </div>
        </div>
    </>
  )
}
