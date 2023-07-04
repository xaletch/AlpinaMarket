import React, { Dispatch, SetStateAction } from 'react'
import city from './city/city'

interface LocationProps {
    isMenuOpen: Boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedCity: Dispatch<SetStateAction<string>>;
}

export const LocationMenu: React.FC<LocationProps> = ({ isMenuOpen, setIsMenuOpen, setSelectedCity }) => {
    const handleCityClick = (cityName: string) => {
        setSelectedCity(cityName);
        setIsMenuOpen(false);
    };

    return (
        <div className={isMenuOpen ? 'header__location--selection header__location' : 'header__location--selectionOff'}>
            <div className='header__location--container container'>
                <div className='header__location--inner'>
                    <h2 className='header__location--title'>Мы работаем в этих городах</h2>
                    <div className='city'>
                        <ul className='city__list flex'>
                            {city.map((city) => (
                            <div className='city__block' key={city.letter}>
                                <h3 className='city--letter'>{city.letter}</h3>
                                <ul className='city__list'>
                                    {city.cityName.map((name) => (
                                        <li className='city__item' key={name} onClick={() => handleCityClick(name)}>
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
    )
}
