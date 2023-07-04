import React from 'react'
import { homeBestDealArray } from './arrays/homeBestDeal'

export const HomeBestOffes = () => {
  return (
    <>
        {homeBestDealArray.map((obj, i) => (
            <div key={i}>
                <img src={obj.img} alt="error" />
                <span>{obj.discount}</span>
                <h3>{obj.title}</h3>
                <p>{obj.price}</p>
                <span>{obj.size}</span>
            </div>
        ))}
    </>
  )
}
