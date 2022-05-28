import Image from "../../assets/image.svg";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Trendings = () => {

    // const [data, setData] = useState({
    //     getData: []
    // })

    // console.log(data);

    // useEffect(() => {
    //     axios.post('').then((response) => {
    //         setData({
    //             getData: response.data.data.jobs
    //         });
    //         console.log(response.data.data.jobs);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, []);

    return (
        <>
            <div className="text-left">
                <h2 className='text-6xl font-bold text-indigo-700 ml-8 mt-20 mb-10'>Trending</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 lg:ml-6'>
                {/* <Link to='/Jobs' state={{ disabilityType: "visually impaired" }}>
                    <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                        <div class="px-6 py-4">
                            <img src={Visually} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Visually Impaired</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Jobs Available
                            </p>
                        </div>
                    </div>
                </Link> */}
                <div class="max-w-sm rounded-2xl overflow-hidden border-gray-500 border-2 mt-8 bg-gray-500">
                    <div class="px-6 py-4">
                        <img src={Image} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-white">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-white">R.K. Puram Supermarket</div>
                        <p class="text-indigo-800 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-gray-500 border-2 mt-8 bg-gray-500">
                    <div class="px-6 py-4">
                        <img src={Image} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-white">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-white">R.K. Puram Supermarket</div>
                        <p class="text-indigo-800 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-gray-500 border-2 mt-8 bg-gray-500">
                    <div class="px-6 py-4">
                        <img src={Image} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-white">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-white">R.K. Puram Supermarket</div>
                        <p class="text-indigo-800 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-gray-500 border-2 mt-8 bg-gray-500">
                    <div class="px-6 py-4">
                        <img src={Image} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-white">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-white">R.K. Puram Supermarket</div>
                        <p class="text-indigo-800 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-gray-500 border-2 mt-8 bg-gray-500">
                    <div class="px-6 py-4">
                        <img src={Image} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-white">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-white">R.K. Puram Supermarket</div>
                        <p class="text-indigo-800 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-gray-500 border-2 mt-8 bg-gray-500">
                    <div class="px-6 py-4">
                        <img src={Image} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-white">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-white">R.K. Puram Supermarket</div>
                        <p class="text-indigo-800 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

