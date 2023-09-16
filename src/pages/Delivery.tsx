import React from 'react'
import { ButtonComeBack } from '../components/ButtonComeBack'

import { delivery } from '../components/arrays/PaymentAndDelivery';
import { payment } from '../components/arrays/PaymentAndDelivery';

interface Selected {
  selected: number | null;
  onSelected: (id: number) => void;
}

const deliveryItem = ["Доставка", "Оплата"];

export const Delivery: React.FC<Selected> = ({ selected, onSelected }) => {

  return (
    <div className='delivery container'>
      <ButtonComeBack />
      <h2 className='delivery__title'>Оплата и доставка</h2>
      <div className='delivery__inner delivery__top'>
        <ul className='delivery__top--list flex'>
          {deliveryItem.map((item, i) => (
            <li className={selected === i ? 'delivery__top--item active' : 'delivery__top--item'} key={i} onClick={() => onSelected(i)} >{item}</li>
          ))}
        </ul>
        <div className='delivery__top--line'></div>
      </div>
      {selected === 0 ? (
        <div className='delivery__bottom delivery__inner'>
          <p className='delivery__bottom--list'>Наш интернет-магазин гарантирует быструю и надежную доставку всех заказов. Мы работаем с крупнейшими транспортными компаниями, которые доставляют товары по всей России. Вы можете выбрать наиболее удобный и быстрый вариант доставки из предложенных услуг.</p>
          <ul className='delivery__bottom--list'>
            {delivery.map((item, index) => (
              <div className='delivery__bottom--block' key={index}>
                  <h2 className='delivery__bottom--title'>{item.title}</h2>
                  {item.paragraph1 && item.paragraph1.map((item, index) => (
                    <p className='delivery__bottom--paragraph' key={index}>{item}</p>
                  ))}
                  <ul className='delivery__bottom--block__list'>
                    {item.list.map((list) => (
                      <li className='delivery__bottom--block__item' key={list}><span>{list}</span></li>
                    ))}
                  </ul>
                  {item.paragraph2 && item.paragraph2.map((item, index) => (
                    <p className='delivery__bottom--paragraph' key={index}>{item}</p>
                  ))}
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className='payment__bottom delivery__inner'>
          {payment.map((item, index) => (
            <div className='payment__bottom--block' key={index}>
              <h2 className='delivery__bottom--block delivery__bottom--title'>{item.title}</h2>
              {item.paragraph.map((item, index) => (
                    <p className='payment__bottom--paragraph delivery__bottom--paragraph' key={index}>{item}</p>
                  ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
