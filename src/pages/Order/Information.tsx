import React, { useState } from 'react'

export const Information = () => {
    const face = ["Физическое лицо", "Юридическое лицо"];
    const stages = [
        {stage: "2", name: "Способ доставки"},
        {stage: "3", name: "Сборка"},
        {stage: "4", name: "Оплата"},
    ];

    const [selected, setSelected] = useState<number | null>(0);
    const [entityValue, setEntityValue] = useState<string>('');

    const handleClickFaceSelected = (index: number) => {
        setSelected(index);
    };

    const handleOnChangeEntity = (e: any) => {
        setEntityValue(e.target.value);
    };

    return (
        <div className='order_information'>
            <div className='order_content-name'>
                <div className='order_content-name-num'>1</div>
                <h2>Персональные данные</h2>
            </div>
            <div className='order_information-block'>
                <div className='order_information-head'>
                    {face.map((item, index) => (
                        <div className={selected === index ? 'order_information-head-name order_information-head-active' : 'order_information-head-name'} onClick={() => handleClickFaceSelected(index)} key={index}>
                            {item}
                        </div>
                    ))}
                </div>
                <form action="">
                    {selected === 0 ? 
                        <div className='order_information-form'>
                            <input type="text" name="" id="" required placeholder='Имя*' />
                            <input type="text" name="" id="" required placeholder='Фамилия*' />
                            <input type="telephone" name="" id="" required placeholder='Телефон*' />
                            <input type="email" name="" id="" required placeholder='Email*' />
                            <button type='submit' className='order_information-btn'>Продолжить</button>
                        </div>
                        : 
                        <div className='order_information-form'>
                            <label>Введите ИНН или название своей организации.</label>
                            <input type="text" onChange={handleOnChangeEntity} name="" id="" required placeholder='ИНН или название организации*' />
                            {entityValue.length === 12 && (
                                <div className='order_information-form'>
                                    <input type="text" name="" id="" required placeholder='Имя*' />
                                    <input type="text" name="" id="" required placeholder='Фамилия*' />
                                    <input type="telephone" name="" id="" required placeholder='Телефон*' />
                                    <input type="email" name="" id="" required placeholder='Email*' />
                                    <button type='submit' className='order_information-btn'>Продолжить</button>
                                </div>
                            )}
                        </div>
                    }
                </form>

                <div className='order_information-stages'>
                    {stages.map((item, index) => (
                        <div className='order_information-stages-block' key={index}>
                            <div className='order_information-stages-stage'>{item.stage}</div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
