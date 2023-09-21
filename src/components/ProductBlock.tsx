import React, { useEffect, useState } from 'react'

import { useDispatch } from "react-redux";
import { CartItem, addProducts } from '../redux/slice/cartSlice';
import { Link, NavLink } from 'react-router-dom';

type ProductBlockProps = {
    id: string;
    title: string;
    img: string;
    price: number;
    sale: string;
    discount: string;
    size: string;
    gallery: [];
};

export const ProductBlock: React.FC<ProductBlockProps> = ({ img, title, id, price, sale, discount, size, gallery }) => {
  const [cardButton, setCardButton] = useState<boolean>(false);
  const [isGallery, setIsGallery] = useState<number>(0);

  const dispatch = useDispatch();


  useEffect(() => {
    const storedCardButton = localStorage.getItem(`cardItemAdd_${id}`);
    if (storedCardButton !== null) {
       setCardButton(JSON.parse(storedCardButton));
    }
 }, [id]);

  const handleClickCartAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      img,
      count: 0,
    };

    dispatch(addProducts(item));
    setCardButton(true);
    localStorage.setItem(`cardItemAdd_${id}`, JSON.stringify(true));
  };

  const handleClickButton = () => {
    window.scrollTo(0, 0);
  };

  const onChangeSelectedPhoto = (index: number) => {
    setIsGallery(index);
    // console.log(`Photo: ${gallery[index]}`);
  };

  return (
    <>
        <div className='home__best--offer__card'>
          <Link to={`/product/${id}`} onClick={handleClickButton}>
            <div className='home__best--offer__card--top flex'>
              <img className='home__best--offer__card--img' src={img && gallery[isGallery]} alt={title} />
            </div>
          </Link>
            {sale && <p className='home__best--offer__card--sale home__best--offer__top--card'>{sale}</p>}
            {discount && <p className='home__best--offer__card--discount home__best--offer__top--card'>{discount}</p>}
            <div className='home__best--offer__card--bottom flex'>
              <h3 className='home__best--offer__card--bottom--title'>{title}</h3>
              <p className='home__best--offer__card--bottom--price'>{price} ₽</p>
            </div>
            <p className='home__best--offer__card--size'>{size}</p>
            <div className="home__best--offer__gallery--container flex">
              <div className='home__best--offer__gallery--block flex'>
              {gallery && gallery.map((photo, index) => (
                <div className='home__best--offer__gallery--photo flex' key={index} onMouseMove={() => onChangeSelectedPhoto(index)}>
                  <img src={photo} alt={photo} />
                </div>
              ))}
              <div className='home__best--offer__gallery--photo flex'>+5</div>
              </div>
              {cardButton === false ? (
                <button className='home__best--offer__card--add--cart' onClick={handleClickCartAdd}>
                  <svg width="37" height="32" fill='#fff' viewBox="0 0 37 32">
                    <path d="M25.1519 9.9806H22.7417V9.01709C22.7417 6.67781 20.839 4.775 18.4998 4.775C16.1607 4.775 14.2582 6.67783 14.2582 9.01709V9.9806H11.8462C11.3396 9.9806 10.9167 10.3671 10.8714 10.8718C10.8714 10.8718 10.8714 10.8718 10.8714 10.8718L9.58849 25.1587L9.58848 25.1587C9.56395 25.4325 9.65556 25.7038 9.84101 25.9066C10.0264 26.1094 10.2886 26.2249 10.5633 26.2249H26.4349H26.4349H26.4349H26.4349H26.435H26.435H26.435H26.435H26.435H26.435H26.4351H26.4351H26.4351H26.4351H26.4351H26.4351H26.4352H26.4352H26.4352H26.4352H26.4352H26.4352H26.4352H26.4353H26.4353H26.4353H26.4353H26.4353H26.4353H26.4354H26.4354H26.4354H26.4354H26.4354H26.4354H26.4354H26.4355H26.4355H26.4355H26.4355H26.4355H26.4355H26.4356H26.4356H26.4356H26.4356H26.4356H26.4356H26.4357H26.4357H26.4357H26.4357H26.4357H26.4357H26.4358H26.4358H26.4358H26.4358H26.4358H26.4358H26.4359H26.4359H26.4359H26.4359H26.4359H26.4359H26.436H26.436H26.436H26.436H26.436H26.436H26.4361H26.4361H26.4361H26.4361H26.4361H26.4361H26.4362H26.4362H26.4362H26.4362H26.4362H26.4362H26.4362H26.4363H26.4363H26.4363H26.4363H26.4363H26.4363H26.4364H26.4364H26.4364H26.4364H26.4364H26.4364H26.4365H26.4365H26.4365H26.4365H26.4365H26.4365H26.4366H26.4366H26.4366H26.4366H26.4366H26.4366H26.4366H26.4367H26.4367H26.4367H26.4367H26.4367H26.4367H26.4368H26.4368H26.4368H26.4368H26.4368H26.4368H26.4368H26.4369H26.4369H26.4369C26.9776 26.2249 27.4157 25.7867 27.4157 25.2461L27.4157 25.2456C27.4155 25.1949 27.4116 25.1444 27.4039 25.0949L26.1267 10.8718C26.0815 10.3671 25.6585 9.9806 25.1519 9.9806ZM16.2157 9.01709C16.2157 7.75753 17.2406 6.7325 18.4999 6.7325C19.7593 6.7325 20.7843 7.75755 20.7843 9.01709V9.9806H16.2157V9.01709ZM24.2572 11.9381L25.3643 24.2675H11.6339L12.741 11.9381H14.2582V13.061C14.2582 13.6015 14.6963 14.0398 15.237 14.0398C15.7776 14.0398 16.2157 13.6015 16.2157 13.061V11.9381H20.7843V13.061C20.7843 13.6015 21.2224 14.0398 21.763 14.0398C22.3037 14.0398 22.7418 13.6015 22.7418 13.061V11.9381H24.2572Z" fill="black" stroke="white" stroke-width="0.45"/>
                  </svg>
                </button>
              ) : (
                <NavLink to='/cart'>
                  <button className='home__best--offer__card--button' onClick={handleClickButton}>В корзине</button>
                </NavLink>
              )}
            </div>
        </div>
    </>
  )
}
