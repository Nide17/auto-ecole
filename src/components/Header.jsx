import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/svg/logo-color.svg'

const Header = () => {
    return (
        <header className="header w-full fixed z-10 shadow-lg shadow-yellow-300/20 px-1 lg:px-32 2xl:px-40 h-24 2xl:h-36 flex items-center justify-around text-[#F9F9F9] bg-[#0C1D36]" id='ahabanza'>
            <div className="header__logo lg:w-1/2">
                <Link to="/">
                    <img src={logo} alt="logo" className='h-12 sm:h-20 2xl:h-28' />
                </Link>
            </div>
            <nav className="header__nav sm:w-1/2">
                <ul className="flex items-center justify-end">
                    <li className='mx-1 sm:mx-8 text-sm sm:text-xl 2xl:text-2xl font-bold'>
                        <a href="/#ahabanza">Ahabanza</a>
                    </li>
                    <li className='mx-1 sm:mx-8 text-sm sm:text-xl 2xl:text-2xl font-bold'>
                        <a href="/#amashuri">Amashuri</a>
                    </li>
                    <li className='mx-1 sm:mx-8 text-sm sm:text-xl 2xl:text-2xl font-bold'>
                        <a href="/#tuvugishe">Tuvugishe</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header