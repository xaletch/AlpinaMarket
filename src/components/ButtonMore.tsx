import React from 'react'

export const ButtonMore = () => {

  const handleClickButton = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
        <button className='popular--categories--top__more button__more' onClick={handleClickButton}>
            подробнее
            <div className='border'></div>
        </button>
    </>
  )
}
