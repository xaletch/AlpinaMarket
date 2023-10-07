import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const delivery = ["Курьером", "Самовывоз"];


const inputRadio = ["До квартиры", "До подъезда"];
const inputCheckBox = ["До квартиры", "До подъезда"];

interface MyForm {
  entrance: number;
  intercom: number;
  floor: number;
  apartment: number;
  radio: null;
  checkbox: null;
};

export const OrderDelivery = () => {
  const [selected, setSelected] = useState<number | null>(0);

  const [selectedRadio, setSelectedRadio] = useState<number | null>(0);
  const [selectedCheckBocks, setSelectedCheckBocks] = useState<number | null>(0);

  const { register, handleSubmit } = useForm<MyForm>();
  const [dataUser, setDataUser] = React.useState([]);


  const handleClickDeliverySelected = (index: number) => {
    setSelected(index);
  };

  const handleClickRadio =(index: number) => {
    setSelectedRadio(index);
  };

  const handleClickCheckBox =(index: number) => {
    setSelectedCheckBocks(index);
  };

  const submit: SubmitHandler<MyForm> = (data: any) => {
    setDataUser((prevData) => [...prevData, data]);
    console.log(dataUser)
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
        <form onSubmit={handleSubmit(submit)}>
          {selected === 0 ? 
            <div className='order_delivery-form'>
              <div className='order_delivery-form_where'>
                <div className='order_delivery-form_radio'>
                  {inputRadio.map((item, index) => (
                    <div key={index} onClick={() => handleClickRadio(index)}>
                      <input type="radio" checked={selectedRadio === index} {...register('radio', { required: true })} />
                      <label>{item}</label>
                    </div>
                  ))}
                </div>
                <p className='order_delivery-form_price'>800 руб</p>
              </div>
              <div className='order_delivery-form_address'>
                <input type="text" {...register('entrance', { required: true })} placeholder='Подъезд*' />
                <input type="text" {...register('intercom', { required: true })} placeholder='Домофон/код подъезда' />
                <input type="text" {...register('floor', { required: true })} placeholder='Этаж*' />
                <input type="text" {...register('apartment', { required: true })} placeholder='Квартира*' />
              </div>
              <div className='order_delivery-form_checkbox'>
                {inputCheckBox.map((item, index) => (
                  <div key={index} onClick={() => handleClickCheckBox(index)}>
                    <input type="checkbox" checked={selectedCheckBocks === index} {...register('checkbox', { required: true })} />
                    <label>{item}</label>
                  </div>
                ))}
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
