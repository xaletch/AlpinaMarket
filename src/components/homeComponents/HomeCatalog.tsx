import React, { Component } from 'react'

import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import { homeCatalog } from '../arrays/homeCatalog';
import { CustomSlideToggle } from '../CustomSlideToggle';

export class HomeCatalog extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      prevArrow: null,
      nextArrow: <CustomSlideToggle />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
      <div className='room--catalog__top flex'>
        <h2 className='room--catalog__top--title'>Каталог по комнатам</h2>
        <button className='room--catalog--top__more button__more'>подробнее</button>
      </div>
      <div className='room--catalog__bottom'>
      <Slider {...settings}>
        {homeCatalog.map((obj, index) => (
          <div className='room--catalog__bottom--card' key={index}>
            <img src={obj.imageUrl} alt="" />
            <div className='room--catalog__bottom--card__bottom'>
              <button className='room--catalog__button'>{obj.title}</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </>
  )
}
}
