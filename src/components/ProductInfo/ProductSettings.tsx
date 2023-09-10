import React from 'react'
import { Link } from 'react-router-dom';


const productSettings = [
  { name: "Ткань и цвет", innerName: "В наличии на складе", material: [ '', '', '', '', '', '', ], materialOrder: "Материал под заказ", },
  { name: "Ножки", innerName: "В наличии на складе", material: [ '', '', '', '', ], materialOrder: "Материал под заказ", },
  { name: "Другой параментр", innerName: "В наличии на складе", material: [ '', '', '', ], materialOrder: "Материал под заказ", },
]

export const ProductSettings = ({ title, price }) => {
  const [accordionOpen, setAccordionOpen] = React.useState<number | null>(null);

  const handleClickAccordion = (index: number) => {
      accordionOpen === index ? setAccordionOpen(null) : setAccordionOpen(index);
      console.log(accordionOpen);
  }

  return (
    <div className='product-info_block-menu'>
      <h2 className='product-info_block-menu_name'>{title}</h2>
      <p className='product-info_block-menu_price'>{price} руб.</p>  
      <div className='product-info_block-menu_settings'>
        {productSettings.map((item, index) => (
          <>
            <div className='product-info_block-menu_settings-popup' key={index}>
              <p className='product-info_block-menu_settings-popup-title' onClick={() => handleClickAccordion(index)}>
                {item.name}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_11338_70873)">
                      <path d="M16.5899 8.80186L17.7879 9.99984L12 15.7877L6.21213 9.99984L7.41012 8.80186L11.894 13.276L12 13.3817L12.106 13.276L16.5899 8.80186Z" fill="black" stroke="white" stroke-width="0.3"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_11338_70873">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
              <div className={accordionOpen === index ? 'product-info_block-menu_settings-open product-info_block-menu_settings-accordion' : 'product-info_block-menu_settings-unopen'}>
                <p className='product-info_block-menu_settings-accordion_title'>{item.innerName}</p>
                <div className='product-info_block-menu_settings-accordion_setting'>
                  {item.material.map((item, index) => (
                    <div className='product-info_block-menu_settings-accordion_setting-block' key={index}>{item}</div>
                  ))}
                </div>
                <p className='product-info_block-menu_settings-accordion_order'><Link to=''>{item.materialOrder}</Link></p>
                <button className='product-info_block-menu_settings-accordion_btn'>Заказать образцы</button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className='product-info_block-menu_btn'>
        <button className='product-info_block-menu_btn-pay product-info_block-menu_btn-btn'>Купить</button>
        <button className='product-info_block-menu_btn-question product-info_block-menu_btn-btn'>Задать вопрос</button>
      </div>
    </div>
  )
}
