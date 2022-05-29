import React from 'react';
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';

export const Navbar = ({ toggle, toggles }) => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-cyan-400 text-black relative font-sans border-black'
            role='navigation'
        >
            <div className='flex'>
                <img src={Logo} alt='img' className='w-72 h-10' />
            </div>
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>
            <div className='pr-8 md:flex hidden'>
                <Link to='/sloginsignup'>
                    <button className="bg-white text-indigo-700 font-bold border border-2 rounded ml-10 py-2 px-8">
                        Become a Seller
                    </button>
                </Link>
                <Link to='/loginsignup'>
                    <button className="bg-white text-indigo-700 font-bold border border-2 rounded ml-10 py-2 px-8">
                        Become a Consumer
                    </button>
                </Link>
            </div>
        </nav>
    );
};
