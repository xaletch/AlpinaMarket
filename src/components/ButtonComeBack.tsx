import React from 'react'

import { Link } from 'react-router-dom'

export const ButtonComeBack = () => {
  return (
    <>
            <ul className='will-return__list flex'>
                <li className='will-return__item will-return--back'>
                    <Link to='/'>Главная</Link>
                </li>
                /
                <li className='will-return__item will-return--page-open'>
                    <span>О нас</span>
                </li>
            </ul>
    </>
  )
}
