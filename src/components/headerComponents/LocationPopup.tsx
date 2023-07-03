import React, {Dispatch, SetStateAction} from 'react'

interface LocationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>; 
  selectedCity: string;
}

export const LocationPopup: React.FC<LocationProps> = ({ isMenuOpen, setIsMenuOpen, selectedCity }) => {
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <>
      <div className='header__location--popup header__location' onClick={() => handleClick()}>
        <span className='header__location--name'>{selectedCity}</span>
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.11658 0.549715L1.93981 0.373324L1.76322 0.549908L0.823223 1.48991L0.646447 1.66668L0.823223 1.84346L4.82322 5.84346L5 6.02024L5.17678 5.84346L9.17678 1.84346L9.35355 1.66668L9.17678 1.48991L8.23678 0.549908L8.06019 0.373324L7.88342 0.549715L5 3.42685L2.11658 0.549715Z" fill="black" stroke="white" stroke-width="0.5"/>
        </svg>
      </div>
    </>
  )
}
