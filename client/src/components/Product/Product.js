import React, { useState, useEffect } from 'react';
import Image from "../../assets/image.svg";

export const Product = () => {
    const [show, setShow] = useState(true);

    function changeState() {
        setShow(!show);
    }
    return (
        <>
            <div className=''>
                <div className=''>
                    <img src={Image} alt='img' className='mt-14 ml-16' />
                </div>
                <div className=''>
                    {show ? (
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={changeState}> Display </button>
                    ) : (
                        <>
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg></button>
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-3">3</button>
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg></button></>
                    )}
                </div>
                <div></div>
            </div>
        </>
    )
}
