import React from 'react'

import productionSection1 from "../assets/img/production-section_1.png"
import { homeCatalog } from '../components/arrays/homeCatalog';

import { ButtonComeBack } from '../components/ButtonComeBack';

const numbersArray = [
    {
        title: "55 000 м2",
        text: "производственная площадь фабрики Альпина",
    },
    {
        title: "108",
        text: "городов России, в которых установлена наша мебель",
    },
    {
        title: "80 %",
        text: "ассортимента изготавливается из массива дерева",
    },
    {
        title: "10 000",
        text: "возможных вариаций каждого стула фабрики доступно к заказу",
    },
    {
        title: "> 73 000",
        text: "интерьеров создано с помощью нашей мебелью",
    },
]

const aboutText = [
    {
        text: "Альпина Маркет является торговой маркой российской мебельной фабрики «Альпина», основанной в 2002 году. Компания зарекомендовала себя как надёжный производитель качественной и комфортной мебели с поставками по всему миру.",
    },
    {
        text: "В ассортимент производимой продукции входят обеденные и барные стулья, диваны, кресла, кровати, пуфы, столы, а также корпусная мебель. В производстве применяются экологически чистые материалы. Большинство изделий могут быть выполнены по индивидуальным размерам под заказ.",
    },
    {
        text: "Собственное деревообрабатывающее оборудование большой мощности позволяет фабрике изготавливать широкий ассортимент мебели из натурального дерева в короткие сроки.",
    },
    {
        text: "С Альпина Маркет вы можете осуществить полную меблировку квартир, домов или коммерческой недвижимости с полной уверенностью в её качестве и долговечности.",
    },
]

export const About = () => {

    const aboutPhotos = homeCatalog.slice(4);

  return (
    <div className='about container'>
        <ButtonComeBack />
            <h2 className='about__title movies__title'>О нас</h2>
            <div className='home__production--section__slider about__movies flex'>
            <div className='home__production--section__slider--block '>
                <img className='about__movies--img' src={productionSection1} alt="error" />
                <svg className='about__movies--svg' width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1422_60948)">
                    <rect x="20" y="22" width="47" height="37" fill="white"/>
                    <path d="M1.80401 61.8146C3.49859 67.8251 8.68264 68.9249 9.02847 69.1358C17.5602 71.4598 65.382 71.4668 74.0417 69.1358C79.9727 67.4205 81.0621 62.1604 81.2661 61.8146C83.5244 49.8003 83.6731 34.1375 81.1624 20.5048L81.2661 21.1826C79.5716 15.172 74.3875 14.0723 74.0417 13.8613C65.6241 11.5753 17.6778 11.4889 9.02847 13.8613C3.09743 15.5801 2.00805 20.8368 1.80401 21.1826C-0.613363 33.809 -0.734405 48.2959 1.80401 61.8146ZM33.2264 54.1267V28.905L54.8963 41.5349L33.2264 54.1267Z" fill="#A6331C"/>
                </g>
                <defs>
                    <clipPath id="clip0_1422_60948">
                        <rect width="83" height="83" fill="white"/>
                     </clipPath>
                </defs>
                </svg>
            </div>
        </div>
        <div className='about__mission'>
            <h2 className='about__mission--title about__title'>Наша миссия —</h2>
            <p className='about__mission--description'>делать качественную мебель доступной</p>
        </div>
        <div className='about__numbers'>
            <h2 className='about__numbers--title about__title'>Цифры</h2>
            <ul className='about__numbers--list flex'>
                {numbersArray.map((item, index) => (
                    <li className='about__numbers--item' key={index}>
                        <p className='about__numbers--item--title'>{item.title}</p>
                        <span className='about__numbers--item--text'>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className='room--catalog about__photos flex'>
        {aboutPhotos.slice(0, 4).map((obj, index) => (
          <div className='room--catalog__bottom--card about__photos--card' key={index}>
            <img src={obj.imageUrl} alt="" />
            <div className='room--catalog__bottom--card__bottom'>
            </div>
          </div>
        ))}
      </div>
      <div className='about__text'>
        {aboutText.map((item, index) => (
            <p className='about__text--text' key={index}>{item.text}</p>
        ))}
      </div>
    </div>
  )
}
