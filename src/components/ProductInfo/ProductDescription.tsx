import React, { useState } from 'react'

import { delivery } from '../arrays/PaymentAndDelivery';
import { payment } from '../arrays/PaymentAndDelivery';

const descriptionNav = ["Описание", "Оплата и доставка", "Инструкция", "Отзывы"];

const descriptionInfo = [
    { name: "Почему мы используем это?", txt: "Выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв..Здесь ваш текст.. Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения", text: "Выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв..Здесь ваш текст.. Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения",
      characteristicsTitle: "Характеристики",
      characteristicsData: [
        { name: "Отметка", info: "Автоматические клеммы" },
        { name: "Тип установки", info: "Углублений" },
        { name: "Статус доставки", info: "Полный" },
        { name: "Интенсивность", info: "16 А" },
      ]
    },
    { delivery, payment},
    { name: "Инструкция", txt: "Выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв..Здесь ваш текст.. Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения", text: "Выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв..Здесь ваш текст.. Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения",},
    { name: "Отзывы", noReviews: "На данный момент у этого товара нет отзывов. Будьте первым, кто поделится своим мнением о нем!"}
]

export const ProductDescription = () => {
    const [activeCategory, setActiveCategory] = useState<number>(0);

    const handleClickCategory = (i: number) => {
        setActiveCategory(i);
    };

    // console.log(descriptionInfo);

    return (
        <>
            <div className='product-info_description-head'>
                <div className='product-info_description-head_inner'>
                    {descriptionNav.map((item, index) => (
                        <div className={activeCategory === index ? 'product-info_description-head-item product-info_description-head-item_active': 'product-info_description-head-item'} key={index} onClick={() => handleClickCategory(index)}>{item}</div>
                    ))}
                </div>
            </div>
            <div className='product-info_description-block'>
                {descriptionInfo.map((item, index) => (
                    <div key={index}>
                        {activeCategory === index && (
                            <>
                                <h2 className='product-info_description-block_title'>{item.name}</h2>
                                <p className='product-info_description-block_text'>{item.txt}</p>
                                {activeCategory === 0 || activeCategory === 2 ? ( <div className='product-info_description-block_video'></div> ) : ( '' )}
                                <p className='product-info_description-block_text'>{item.text}</p>
                                {activeCategory === 2 && ( <p className='product-info_description-block_text'>{item.text}</p> )}
                                <div className='product-info_description-block_characteristics'>
                                    <h2 className='product-info_description-block_title'>{item.characteristicsTitle}</h2>
                                    <div className='product-info_description-block_characteristics-block'>
                                        {item.characteristicsData && item.characteristicsData.map((item, index) => (
                                            <div className='product-info_description-block_characteristics-item' key={index}>
                                                <p className='product-info_description-block_characteristics-text'>{item.name}</p>
                                                <p className='product-info_description-block_characteristics-text'>{item.info}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='payment__bottom delivery__inner'>
                                    {item.payment && item.payment.map((item, index) => (
                                        <div className='payment__bottom--block' key={index}>
                                            <h2 className='product-info_description-block_title2'>{item.title}</h2>
                                            {item.paragraph.map((item, index) => (
                                                <p className='product-info_description-block_characteristics-text' key={index}>{item}</p>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <ul className='delivery__bottom--list product-info_description-block_list'>
                                    {item.delivery && item.delivery.map((item, index) => (
                                    <div className='delivery__bottom--block' key={index}>

                                        <h2 className='product-info_description-block_title2'>{item.title}</h2>
                                        {item.paragraph1 && item.paragraph1.map((item, index) => (
                                            <p className='product-info_description-block_characteristics-text' key={index}>{item}</p>
                                        ))}
                                        <ul className='delivery__bottom--block__list'>
                                            {item.list.map((list) => (
                                            <li className='product-info_description-block_characteristics-text' key={list}><span>{list}</span></li>
                                            ))}
                                        </ul>
                                        {item.paragraph2 && item.paragraph2.map((item, index) => (
                                            <p className='product-info_description-block_characteristics-text' key={index}>{item}</p>
                                        ))}
                                    </div>
                                    ))}
                                </ul>
                                <div className='product-info_description-block_reviews'>
                                    <div className='product-info_description-block_reviews-noreviews'>
                                        <p>{item.noReviews}</p>
                                    </div>
                                    {/* <textarea placeholder='Дать отзыв'></textarea> */}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
