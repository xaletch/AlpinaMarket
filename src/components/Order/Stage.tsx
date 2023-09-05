import React from 'react'

export const Stage = ({ checkoutTwo }) => {

    const stages = [
        {stage: "2", name: "Способ доставки"},
        {stage: "3", name: "Сборка"},
        {stage: "4", name: "Оплата"},
    ];

    console.log(stages)

    checkoutTwo && stages.splice(0, 1);

    return (
        <>
            <div className='order_information-stages'>
                {stages.map((item, index) => (
                    <div className='order_information-stages-block' key={index}>
                        <div className='order_information-stages-stage'>{item.stage}</div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
