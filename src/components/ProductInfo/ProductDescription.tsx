import React, { useState } from 'react'

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
    { name: "Оплата и доставка",},
    { name: "Инструкция",},
    { name: "Отзывы",}
]

export const ProductDescription = () => {
    const [activeCategory, setActiveCategory] = useState<number>(0);

    const handleClickCategory = (i: number) => {
        setActiveCategory(i);
    };

    return (
        <>
            <div className='product-info_description-head'>
                {descriptionNav.map((item, index) => (
                    <div className={activeCategory === index ? 'product-info_description-head-item product-info_description-head-item_active': 'product-info_description-head-item'} key={index} onClick={() => handleClickCategory(index)}>{item}</div>
                ))}
            </div>
            <div className='product-info_description-block'>
                {descriptionInfo.map((item, index) => (
                    <div key={index}>
                        {activeCategory === index && (
                            <>
                                <h2 className='product-info_description-block_title'>{item.name}</h2>
                                <p className='product-info_description-block_text'>{item.txt}</p>
                                <div className='product-info_description-block_video'></div>
                                <p className='product-info_description-block_text'>{item.text}</p>
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
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
