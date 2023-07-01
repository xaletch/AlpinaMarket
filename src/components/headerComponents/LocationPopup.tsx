import React, { useState } from 'react'

import city from './city/city'

export const LocationPopup = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Санкт-Петербург')
  const [searchCity, setSearchCity] = useState('')
  const [filterCity, setFilterCity] = useState(city)


  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleCityClick = (cityName: string) => {
    setSelectedCity(cityName)
    setIsMenuOpen(false)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchCity(query)

    const filtered = city.filter((city) =>
      city.cityName.some((name) => name.toLowerCase().includes(query))
    );
    setFilterCity(filtered);
  }

  const handleSearchAdd = () => {
    setSelectedCity(searchCity)
    setSearchCity('')
  }
  
  return (
    <>
      <div className='header__location--popup header__location' onClick={() => handleClick()}>
        <span className='header__location--name'>{selectedCity}</span>
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.11658 0.549715L1.93981 0.373324L1.76322 0.549908L0.823223 1.48991L0.646447 1.66668L0.823223 1.84346L4.82322 5.84346L5 6.02024L5.17678 5.84346L9.17678 1.84346L9.35355 1.66668L9.17678 1.48991L8.23678 0.549908L8.06019 0.373324L7.88342 0.549715L5 3.42685L2.11658 0.549715Z" fill="black" stroke="white" stroke-width="0.5"/>
        </svg>
      </div>
      <div className={isMenuOpen ? 'header__location--selection header__location' : 'header__location--selectionOff'}>
        <div className='header__location--container container'>
        <div className='header__location--inner'>
          <div className='header__location--input'>
            <input type="text" placeholder='Найти свой город' onChange={handleSearch} value={searchCity} />
            <span>
              <svg onClick={handleSearchAdd} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_10902_122502" fill="white">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5197 13.9709H14.7273L14.4519 13.6975C15.4249 12.5629 16.0166 11.092 16.0166 9.48035C16.0166 5.8979 13.1127 2.99402 9.53028 2.99402C5.94783 2.99402 3.04395 5.8979 3.04395 9.48035C3.04395 13.0628 5.94783 15.9667 9.53028 15.9667C11.1419 15.9667 12.6118 15.3759 13.7464 14.404L14.0218 14.6774V15.4677L19.0093 20.4482L20.4972 18.9604L15.5197 13.9709ZM9.53054 13.9712C7.04976 13.9712 5.04 11.9615 5.04 9.48069C5.04 7.00091 7.04976 4.99015 9.53054 4.99015C12.0103 4.99015 14.0211 7.00091 14.0211 9.48069C14.0211 11.9615 12.0103 13.9712 9.53054 13.9712Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5197 13.9709H14.7273L14.4519 13.6975C15.4249 12.5629 16.0166 11.092 16.0166 9.48035C16.0166 5.8979 13.1127 2.99402 9.53028 2.99402C5.94783 2.99402 3.04395 5.8979 3.04395 9.48035C3.04395 13.0628 5.94783 15.9667 9.53028 15.9667C11.1419 15.9667 12.6118 15.3759 13.7464 14.404L14.0218 14.6774V15.4677L19.0093 20.4482L20.4972 18.9604L15.5197 13.9709ZM9.53054 13.9712C7.04976 13.9712 5.04 11.9615 5.04 9.48069C5.04 7.00091 7.04976 4.99015 9.53054 4.99015C12.0103 4.99015 14.0211 7.00091 14.0211 9.48069C14.0211 11.9615 12.0103 13.9712 9.53054 13.9712Z" fill="black" fill-opacity="0.38"/>
                <path d="M14.7273 13.9709V14.2709H14.6037L14.516 14.1838L14.7273 13.9709ZM14.4519 13.6975L14.2405 13.9104L14.0426 13.7139L14.2242 13.5022L14.4519 13.6975ZM13.7464 14.404L13.5512 14.1761L13.7614 13.9961L13.9578 14.1911L13.7464 14.404ZM14.0218 14.6774L14.2332 14.4645L14.3218 14.5525V14.6774H14.0218ZM14.0218 15.4677L13.8098 15.68L13.7218 15.5921V15.4677H14.0218ZM19.0093 20.4482L19.2214 20.6604L19.0094 20.8724L18.7973 20.6605L19.0093 20.4482ZM20.4972 18.9604L20.7096 18.7485L20.9212 18.9606L20.7093 19.1725L20.4972 18.9604ZM15.5197 14.2709H14.7273V13.6709H15.5197V14.2709ZM14.516 14.1838L14.2405 13.9104L14.6633 13.4846L14.9387 13.758L14.516 14.1838ZM14.2242 13.5022C15.1527 12.4193 15.7166 11.017 15.7166 9.48035H16.3166C16.3166 11.167 15.697 12.7064 14.6796 13.8928L14.2242 13.5022ZM15.7166 9.48035C15.7166 6.06359 12.947 3.29402 9.53028 3.29402V2.69402C13.2784 2.69402 16.3166 5.73222 16.3166 9.48035H15.7166ZM9.53028 3.29402C6.11351 3.29402 3.34395 6.06359 3.34395 9.48035H2.74395C2.74395 5.73222 5.78214 2.69402 9.53028 2.69402V3.29402ZM3.34395 9.48035C3.34395 12.8971 6.11351 15.6667 9.53028 15.6667V16.2667C5.78214 16.2667 2.74395 13.2285 2.74395 9.48035H3.34395ZM9.53028 15.6667C11.067 15.6667 12.4684 15.1037 13.5512 14.1761L13.9416 14.6318C12.7552 15.6481 11.2168 16.2667 9.53028 16.2667V15.6667ZM13.9578 14.1911L14.2332 14.4645L13.8105 14.8903L13.535 14.6169L13.9578 14.1911ZM14.3218 14.6774V15.4677H13.7218V14.6774H14.3218ZM14.2338 15.2555L19.2213 20.236L18.7973 20.6605L13.8098 15.68L14.2338 15.2555ZM18.7972 20.2361L20.285 18.7482L20.7093 19.1725L19.2214 20.6604L18.7972 20.2361ZM20.2848 19.1723L15.3073 14.1828L15.732 13.759L20.7096 18.7485L20.2848 19.1723ZM9.53054 14.2712C6.88408 14.2712 4.74 12.1271 4.74 9.48069H5.34C5.34 11.7958 7.21545 13.6712 9.53054 13.6712V14.2712ZM4.74 9.48069C4.74 6.83527 6.88403 4.69015 9.53054 4.69015V5.29015C7.21549 5.29015 5.34 7.16655 5.34 9.48069H4.74ZM9.53054 4.69015C12.176 4.69015 14.3211 6.83523 14.3211 9.48069H13.7211C13.7211 7.1666 11.8446 5.29015 9.53054 5.29015V4.69015ZM14.3211 9.48069C14.3211 12.1272 12.176 14.2712 9.53054 14.2712V13.6712C11.8447 13.6712 13.7211 11.7957 13.7211 9.48069H14.3211Z" fill="#F6F6F6" mask="url(#path-1-inside-1_10902_122502)"/>
              </svg>
            </span>
          </div>
          <div className='city'>
            <ul className='city__list flex'>
              {city.map((city) => (
                <div className='city__block' key={city.letter}>
                  <h3 className='city--letter'>{city.letter}</h3>
                  <ul className='city__list'>
                    {city.cityName.map((name) => (
                    <li className='city__item'key={name} onClick={() => handleCityClick(name)}>
                      {name}
                    </li>
                  ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
