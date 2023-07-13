import React from 'react'
import { ButtonComeBack } from '../components/ButtonComeBack'

interface Selected {
  selected: number | null;
  onSelected: (id: number) => void;
}

const deliveryItem = ["Доставка", "Оплата"]

const delivery = [
  {
    title: "Наш интернет-магазин предлагает несколько вариантов доставки:",
    list: [
      "самовывоз из магазина",
      "курьерская доставка по г. Тюмень",
      "доставка Почтой России",
      "самовывоз из пунктов выдачи СДЭК по всей России",
      "курьерская доставка по России СДЭК",
    ]
  },
  {
    title: "Самовывоз из магазина",
    paragraph1: [
      "вы можете забрать товар в одном из наших магазинов «Alpina» в г. Тюмень:"
    ],
    list: [
      "ул. Пермякова, 82",
      "ул. Федюнинского, 43, ТК «Орион»",
      "ул. 30 лет победы, 7,  ТК «Орион»",
    ],
    paragraph2: [
      "Режим работы: Ежедневно с 10:00-19:00, без перерывов и выходных.",
      "Оплата возможна любым способом после.",
    ],
  },
  {
    title: "Курьерская доставка по г.Тюмень",
    paragraph1: [
      "Доставка выполняется"
    ],
    list: [
      "ежедневно с 10:00 до 19:00 часов",
      "в субботу с 10:00 до 14:00",
      "в воскресенье доставки нет",
    ],
    paragraph2: [
      "Товары, заказанные вами в субботу и воскресенье, доставляются в понедельник.",
      "Стоимость доставки по г. Тюмень 300 рублей.",
      "Доставка осуществляется по адресу, указанному при оформлении заказа.",
      "В случае вопросов, пожеланий и претензий и по вопросам доставки обращайтесь к нам по следующим координатам: +7 (3452) 54-61-62",
    ],
  },
  {
    title: "Доставка почтой России",
    paragraph1: [
      "Доставка Почтой России в ближайшее почтовое отделение доступна на всей территории России.",
      "Сроки доставки: в среднем 7 дней в зависимости от региона доставки.",
      "Стоимость доставки: рассчитывается автоматически в процессе оформления заказа.",
      "Расчет стоимости доставки Почтой РФ производится, согласно установленным тарифам почты. На стоимость доставки влияют: расстояние и тип доставки.",
      "Способы оплаты заказа при доставке Почтой России:",
    ],
    list: [
      "Безналичный расчет: по банковской карте при оформлении заказа",
    ],
  }
];

const payment = [
  {
    title: "Оплата наличными",
    paragraph: [
      "При выборе варианта оплаты наличными, вы передаёте курьеру сумму за товар в рублях. Курьер предоставляет товар, который можно осмотреть на предмет повреждений, соответствие указанным условиям. Вы подписываете товаросопроводительные документы, вносите денежные средства и получаете чек.",
      "Также оплата наличными доступна при самовывозе из магазина.",
    ]
  },
  {
    title: "Оплата банковской картой",
    paragraph: [
      "Мы принимаем карты Visa и Master Card. Чтобы оплатить покупку вы должны ввести номер карты, срок действия, имя держателя.",
      "Безналичным расчётом можно воспользоваться при курьерской доставке или самовывоза из магазина.",
    ]
  }
];

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
