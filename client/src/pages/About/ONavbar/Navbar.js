import React from 'react';
import Logo from "../../../assets/logo.svg";
import Bell from "../../../assets/Bell.svg";
import Profile from "../../../assets/Profile.svg";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link } from 'react-router-dom';

export const ONavbar = ({ toggle, toggles }) => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-cyan-400 text-black relative font-sans border-black'
            role='navigation'
        >
            <Link to='/dashboard'>
                <div className='flex'>
                    <img src={Logo} alt='img' className='w-72 h-10' />
                </div>
            </Link>
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
                <Link to='/AboutUs' className='mt-2'>
                    <span className='text-xl font-bold text-white'>About Us</span>
                </Link>
                <img src={Bell} alt='img' className='w-10 h-9 ml-10 mr-8 mt-1' />
                <div className='flex flex-row bg-gray-300 py-2 px-1 rounded-full'>
                    <img src={Profile} alt='img' className='w-10 h-9 ml-2' />
                    <KeyboardArrowDownOutlinedIcon className='mt-2 cursor-pointer' onClick={toggles}></KeyboardArrowDownOutlinedIcon>
                </div>
            </div>
        </nav>
    );
};
