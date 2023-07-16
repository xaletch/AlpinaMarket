import React from 'react'

import { useDispatch } from "react-redux";
import { CartItem, addProducts } from '../redux/slice/cartSlice';

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
    const dispatch = useDispatch();

    const handleClickCartAdd = () => {
        const item: CartItem = {
          id,
          title,
          price,
          img,
          count: 0,
      }
      dispatch(addProducts(item))
      };

  return (
    <>
        <div className='home__best--offer__card'>
            <div className='home__best--offer__card--favorites flex'>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4246 2.22078C17.442 1.22574 16.0871 0.677734 14.6094 0.677734C12.5414 0.677734 10.9477 1.67324 10 3.55707C9.05234 1.67324 7.45863 0.677734 5.39062 0.677734C3.91293 0.677734 2.55801 1.22574 1.57539 2.22082C0.544766 3.26453 0 4.69324 0 6.3525C0 8.34277 1.26469 10.5324 3.75891 12.8606C6.02039 14.9715 8.49887 16.4529 8.97277 16.7285C9.17023 16.8433 9.60973 17.0967 9.60973 17.0967L10.0001 17.3219L10.3905 17.0966C10.3905 17.0966 10.8296 16.8432 11.027 16.7284C11.5009 16.4529 13.9795 14.9713 16.2409 12.8605C18.7352 10.5324 20 8.34277 20 6.3525C20 4.69324 19.4552 3.26453 18.4246 2.22078ZM15.1748 11.7183C13.0357 13.7148 10.69 15.1169 10.2415 15.3777C10.1784 15.4144 10.0903 15.4654 9.99988 15.5177C9.90945 15.4655 9.82129 15.4144 9.75816 15.3777C9.30969 15.1169 6.96414 13.7149 4.82508 11.7183C2.6907 9.72605 1.5625 7.87059 1.5625 6.3525C1.5625 3.93125 3.13668 2.24023 5.39062 2.24023C6.85687 2.24023 7.90246 2.88965 8.58703 4.22562C9.13641 5.29754 9.21969 6.40887 9.22047 6.41996L9.25047 6.41793H10.7796C10.7803 6.40723 10.8637 5.31953 11.3936 4.26367C12.0675 2.92102 13.1495 2.24023 14.6094 2.24023C16.8633 2.24023 18.4375 3.93125 18.4375 6.3525C18.4375 7.87059 17.3093 9.72605 15.1748 11.7183Z" fill="black"/>
              </svg>
            </div>
            <div className='home__best--offer__card--top flex'>
              <img className='home__best--offer__card--img' src={img} alt={title} />
            </div>
            {sale && <p className='home__best--offer__card--sale home__best--offer__top--card'>{sale}</p>}
            {discount && <p className='home__best--offer__card--discount home__best--offer__top--card'>{discount}</p>}
            <div className='home__best--offer__card--bottom flex'>
              <h3 className='home__best--offer__card--bottom--title'>{title}</h3>
              <p className='home__best--offer__card--bottom--price'>₽ {price}</p>
            </div>
            <p className='home__best--offer__card--size'>{size}</p>
            <div className="home__best--offer__gallery--container flex">
              <div className='home__best--offer__gallery--block flex'>
              {gallery && gallery.map((photo, index) => (
                <div className='home__best--offer__gallery--photo flex'>
                  <div key={index}>{photo}</div>
                </div>
              ))}
              <div className='home__best--offer__gallery--photo flex'>+5</div>
              </div>
              <button className='home__best--offer__card--add--cart' onClick={handleClickCartAdd}>
                <svg width="37" height="32" fill='#000' viewBox="0 0 37 32">
                  <path d="M25.1519 9.9806H22.7417V9.01709C22.7417 6.67781 20.839 4.775 18.4998 4.775C16.1607 4.775 14.2582 6.67783 14.2582 9.01709V9.9806H11.8462C11.3396 9.9806 10.9167 10.3671 10.8714 10.8718C10.8714 10.8718 10.8714 10.8718 10.8714 10.8718L9.58849 25.1587L9.58848 25.1587C9.56395 25.4325 9.65556 25.7038 9.84101 25.9066C10.0264 26.1094 10.2886 26.2249 10.5633 26.2249H26.4349H26.4349H26.4349H26.4349H26.435H26.435H26.435H26.435H26.435H26.435H26.4351H26.4351H26.4351H26.4351H26.4351H26.4351H26.4352H26.4352H26.4352H26.4352H26.4352H26.4352H26.4352H26.4353H26.4353H26.4353H26.4353H26.4353H26.4353H26.4354H26.4354H26.4354H26.4354H26.4354H26.4354H26.4354H26.4355H26.4355H26.4355H26.4355H26.4355H26.4355H26.4356H26.4356H26.4356H26.4356H26.4356H26.4356H26.4357H26.4357H26.4357H26.4357H26.4357H26.4357H26.4358H26.4358H26.4358H26.4358H26.4358H26.4358H26.4359H26.4359H26.4359H26.4359H26.4359H26.4359H26.436H26.436H26.436H26.436H26.436H26.436H26.4361H26.4361H26.4361H26.4361H26.4361H26.4361H26.4362H26.4362H26.4362H26.4362H26.4362H26.4362H26.4362H26.4363H26.4363H26.4363H26.4363H26.4363H26.4363H26.4364H26.4364H26.4364H26.4364H26.4364H26.4364H26.4365H26.4365H26.4365H26.4365H26.4365H26.4365H26.4366H26.4366H26.4366H26.4366H26.4366H26.4366H26.4366H26.4367H26.4367H26.4367H26.4367H26.4367H26.4367H26.4368H26.4368H26.4368H26.4368H26.4368H26.4368H26.4368H26.4369H26.4369H26.4369C26.9776 26.2249 27.4157 25.7867 27.4157 25.2461L27.4157 25.2456C27.4155 25.1949 27.4116 25.1444 27.4039 25.0949L26.1267 10.8718C26.0815 10.3671 25.6585 9.9806 25.1519 9.9806ZM16.2157 9.01709C16.2157 7.75753 17.2406 6.7325 18.4999 6.7325C19.7593 6.7325 20.7843 7.75755 20.7843 9.01709V9.9806H16.2157V9.01709ZM24.2572 11.9381L25.3643 24.2675H11.6339L12.741 11.9381H14.2582V13.061C14.2582 13.6015 14.6963 14.0398 15.237 14.0398C15.7776 14.0398 16.2157 13.6015 16.2157 13.061V11.9381H20.7843V13.061C20.7843 13.6015 21.2224 14.0398 21.763 14.0398C22.3037 14.0398 22.7418 13.6015 22.7418 13.061V11.9381H24.2572Z" fill="black" stroke="white" stroke-width="0.45"/>
                </svg>
              </button>
            </div>
        </div>
    </>
  )
}