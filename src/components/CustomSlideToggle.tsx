import React from 'react'

export const CustomSlideToggle = (props: any) => {
    const { onClick } = props;
    return (
      <div className="room--catalog__button--slide button__slide flex" onClick={onClick}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6H17M17 6L12 1M17 6L12 11" stroke="black"/>
        </svg>
      </div>
    );
}
