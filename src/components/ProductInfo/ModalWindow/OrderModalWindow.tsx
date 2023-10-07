import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { deleteProduct, minusProduct, plusProduct } from '../../../redux/slice/cartSlice';
import { Link } from 'react-router-dom';

interface MyForm {
  name: string;
  email: string;
  commented: null;
  checkbox: null;
};

export const OrderModalWindow = ( { img, title, price, count, id, setIsModalWindow, setIsModalWindowTwo } ) => {
  const { register, handleSubmit } = useForm<MyForm>();
  const [dataUser, setDataUser] = useState([]);
  
  const dispatch = useDispatch();

  const minusBtn = () => {
    dispatch(minusProduct(id));
  };

  const plusBtn = () => {
    dispatch(plusProduct(id));
  };

  const submit: SubmitHandler<MyForm> = (data: any) => {
    setDataUser((prevData) => [...prevData, data]);

    if (data !== undefined) {
      setIsModalWindow(false);
      setIsModalWindowTwo(true);
    };
  };

  const handleClickCloseModalWindow = () => {
    dispatch(deleteProduct(id));
    setIsModalWindow(false);
  };

  return (
    <div className='product-info_modal-window' onClick={handleClickCloseModalWindow}>
      <div className='product-info_modal-window_inner' onClick={(e) => e.stopPropagation()}>
        <div className='product-info_modal-window_close' onClick={handleClickCloseModalWindow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
            <path d="M10.7653 13.0909L10.8648 12.9871L10.7653 12.8833L5.20776 7.08418L6.414 5.82549L11.9627 11.6154L12.071 11.7284L12.1793 11.6154L17.728 5.82549L18.9342 7.08418L13.3767 12.8833L13.2772 12.9871L13.3767 13.0909L18.9342 18.8901L17.728 20.1488L12.1793 14.3588L12.071 14.2458L11.9627 14.3588L6.414 20.1488L5.20776 18.8901L10.7653 13.0909Z" fill="black" stroke="white" strokeWidth="0.3"/>
          </svg>
        </div>
        <h2 className='product-info_modal-window_title'>Оформление заказа</h2>
        <div className='product-info_modal-window_product'>
          <div className='product-info_modal-window_product-img'>
            <img src={img} alt={title} />
          </div>
          <div className='product-info_modal-window_product-inf'>
            <p>{title}</p>
            <p>{price} руб</p>
            <div className='cart__card--right__counter flex'>
              <button disabled={count === 1} className='cart__card--right__counter--button cart__card--plus flex' onClick={minusBtn}>-</button>
              <div className='cart__card--right__counter--button cart__card--count flex'>{count}</div>
              <button className='cart__card--right__counter--button cart__card--minus flex' onClick={plusBtn}>+</button>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className='product-info_modal-window_form'>
            <input type="name" {...register('name', { required: true })} placeholder='Имя *'/>
            <input type="email" {...register('email', { required: true })} placeholder='E-mail *'/>
            <textarea {...register('commented')} placeholder='Ваш комментарий'></textarea>
            <div className='product-info_modal-window_form-personal-data'>
              <input type="checkbox" {...register('checkbox', { required: true })} />
              <label>Согласен с условиями обработки <br/> <Link to='personal-data'>персональных данных</Link></label>
            </div>
            <button className='product-info_modal-window_form-btn' type='submit'>Отправить</button>
          </div>
        </form>
      </div>
    </div>
  )
}
