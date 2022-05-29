import React from 'react'

export const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'bg-indigo-200' : 'hidden'} onClick={toggle}>
            <div className='flex flex-col'>
                <span className='text-xl font-bold text-black p-4'>About Us</span><hr />
                <span className='text-xl font-bold text-black p-4'>Jobs</span>
            </div>
        </div>
    )
}
