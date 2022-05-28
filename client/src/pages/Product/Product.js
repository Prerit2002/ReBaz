import React, { useState, useEffect } from 'react';
import Image from "../../assets/joker.svg";

export const Product = () => {
    return (
        <>
            <div class="grid grid-cols-3 gap-2">
                <div class="">
                    <img src={Image} alt='img' className='mt-14 ml-16' />
                </div>
                <div class="col-span-2 text-left">
                    <p className='text-blue-800 font-extrabold text-4xl mt-14 mb-3'>Bald Black Man</p>
                    <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className='text-orange-700 text-3xl font-bold mt-4'>Rs. 25000</p>
                    <div class="grid grid-cols-3 gap-2 mt-5">
                        <div class="">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded">
                                Buy Now
                            </button>
                        </div>
                        <div class="">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-indigo-50 pt-1 mb-20 mt-28 pb-32'>
                <h2 className='text-6xl font-semibold ml-10 text-left text-blue-700 mt-16 mb-20'>Explore More</h2>
                <div className='overflow-x-auto mt-20'>
                    <div className='flex flex-row'>
                        <div className="w-36 h-66 rounded-xl shadow-lg bg-white ml-16">
                            <div class="px-6 py-4">
                                <img src={Image} alt='img' className='float-center' />
                                <div class="font-extrabold text-lg mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                                <div class="text-md mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                                <p class="text-orange-600 text-lg mt-2 text-left font-bold">
                                    Rs.25000
                                </p>
                            </div>
                        </div>
                        <div className="w-36 h-66 rounded-xl shadow-lg bg-white ml-16">
                            <div class="px-6 py-4">
                                <img src={Image} alt='img' className='float-center' />
                                <div class="font-extrabold text-lg mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                                <div class="text-md mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                                <p class="text-orange-600 text-lg mt-2 text-left font-bold">
                                    Rs.25000
                                </p>
                            </div>
                        </div>
                        <div className="w-36 h-66 rounded-xl shadow-lg bg-white ml-16">
                            <div class="px-6 py-4">
                                <img src={Image} alt='img' className='float-center' />
                                <div class="font-extrabold text-lg mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                                <div class="text-md mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                                <p class="text-orange-600 text-lg mt-2 text-left font-bold">
                                    Rs.25000
                                </p>
                            </div>
                        </div>
                        <div className="w-36 h-66 rounded-xl shadow-lg bg-white ml-16">
                            <div class="px-6 py-4">
                                <img src={Image} alt='img' className='float-center' />
                                <div class="font-extrabold text-lg mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                                <div class="text-md mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                                <p class="text-orange-600 text-lg mt-2 text-left font-bold">
                                    Rs.25000
                                </p>
                            </div>
                        </div>
                        <div className="w-36 h-66 rounded-xl shadow-lg bg-white ml-16">
                            <div class="px-6 py-4">
                                <img src={Image} alt='img' className='float-center' />
                                <div class="font-extrabold text-lg mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                                <div class="text-md mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                                <p class="text-orange-600 text-lg mt-2 text-left font-bold">
                                    Rs.25000
                                </p>
                            </div>
                        </div>
                        <div className="w-36 h-66 rounded-xl shadow-lg bg-white ml-16">
                            <div class="px-6 py-4">
                                <img src={Image} alt='img' className='float-center' />
                                <div class="font-extrabold text-lg mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                                <div class="text-md mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                                <p class="text-orange-600 text-lg mt-2 text-left font-bold">
                                    Rs.25000
                                </p>
                            </div>
                        </div>
                        <div className="w-36 h-66 rounded-xl shadow-lg bg-white ml-16">
                            <div class="px-6 py-4">
                                <img src={Image} alt='img' className='float-center' />
                                <div class="font-extrabold text-lg mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                                <div class="text-md mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                                <p class="text-orange-600 text-lg mt-2 text-left font-bold">
                                    Rs.25000
                                </p>
                            </div>
                        </div>
                        <div className="w-36 h-66 rounded-xl shadow-lg bg-white ml-16">
                            <div class="px-6 py-4">
                                <img src={Image} alt='img' className='float-center' />
                                <div class="font-extrabold text-lg mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                                <div class="text-md mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                                <p class="text-orange-600 text-lg mt-2 text-left font-bold">
                                    Rs.25000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
