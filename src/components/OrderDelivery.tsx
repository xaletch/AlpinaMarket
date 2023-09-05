import React, { useState } from 'react'

const delivery = ["Курьером", "Самовывоз"];


export const OrderDelivery = () => {
  const [selected, setSelected] = useState<number | null>(0);

  const handleClickDeliverySelected = (index: number) => {
    setSelected(index);
  };

  return (
    <div className='order_delivery'>
        <div className='order_content-name'>
          <div className='order_content-name-num'>2</div>
            <h2>Способ доставки</h2>
        </div>
        <div className='order_delivery-one-form order_information-form'>
          <label>Введите свой адрес, чтобы увидеть доступные способы доставки и самовывоза.</label>
          <input type="text" placeholder='Адрес*'/>
        </div>
        <div className='order_information-head'>
          {delivery.map((item, index) => (
            <div className={selected === index ? 'order_information-head-name order_information-head-active' : 'order_information-head-name'} onClick={() => handleClickDeliverySelected(index)} key={index}>
               {item}
            </div>
          ))}
        </div>
        <form>
          {selected === 0 ? 
            <div className='order_delivery-form'>
              <div className='order_delivery-form_where'>
                <div className='order_delivery-form_radio'>
                  <input type="radio" />
                  <label>До квартиры</label>
                  <input type="radio" />
                  <label>До подъезда</label>
                </div>
                <p className='order_delivery-form_price'>800 руб</p>
              </div>
              <div className='order_delivery-form_address'>
                <input type="text" placeholder='Подъезд*' />
                <input type="text" placeholder='Домофон/код подъезда' />
                <input type="text" placeholder='Этаж*' />
                <input type="text" placeholder='Квартира*' />
              </div>
              <div className='order_delivery-form_checkbox'>
                <input type="checkbox" />
                <label>Наличие грузового лифта</label>
                <input type="checkbox" />
                <label>Частный дом</label>
              </div>
              <div className='order_delivery-form_calendar'>
                <p className='order_delivery-form_calendar_title'>Время доставки</p>
                <input className='order_delivery-form_calendar-calendar' type="date" id="date" name="date"/>
              </div>
              <button type='submit' className='order_information-btn'>Продолжить</button>
            </div>
          : 
            <div className='order_delivery-form'>
              <h2 style={{textAlign: 'center', color: '#000'}}>Упс...</h2>
            </div>
          }
        </form>
    </div>
  )
}
