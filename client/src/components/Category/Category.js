import Visually from "../../assets/Visually.svg";
import Hearing from "../../assets/Hearing.svg";
import WheelChair from "../../assets/WheelChair.svg";
import Autism from "../../assets/Autism.svg";
import Deaf from "../../assets/Deaf.svg";
import Disabled from "../../assets/Disabled.svg";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Category = () => {

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
            <div className="text-left ml-5">
                <h2 className='text-6xl font-bold text-blue-700 mt-20'>Category</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 lg:ml-6'>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <Link to='/Jobs'>
                        <div class="px-6 py-4">
                            <img src={Visually} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-3xl mb-2 mt-4 text-center text-orange-600">Grocery</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Products Available
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <Link to='/Jobs'>
                        <div class="px-6 py-4">
                            <img src={Hearing} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-3xl mb-2 mt-4 text-center text-orange-600">Electronics</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Products Available
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <Link to='/Jobs'>
                        <div class="px-6 py-4">
                            <img src={WheelChair} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-3xl mb-2 mt-4 text-center text-orange-600">Medicines</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Products Available
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <Link to='/Jobs'>
                        <div class="px-6 py-4">
                            <img src={Autism} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-3xl mb-2 mt-4 text-center text-orange-600">Stationary</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Products Available
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <Link to='/Jobs'>
                        <div class="px-6 py-4">
                            <img src={Deaf} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-3xl mb-2 mt-4 text-center text-orange-600">Gift and Toys</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Products Available
                            </p>
                        </div>
                    </Link>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <Link to='/Jobs'>
                        <div class="px-6 py-4">
                            <img src={Disabled} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-3xl mb-2 mt-4 text-center text-orange-600">Local Artifacts</div>
                            <p class="text-gray-700 text-base text-center font-semibold">
                                2345 Products Available
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};
