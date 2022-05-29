import React from 'react';
import Image1 from "../../assets/Gift.svg";
import Image2 from "../../assets/Delivery.svg";
import Image3 from "../../assets/Discount_Tag.svg";

export const WhyUse = () => {
    return (
        <>
            <div className="text-left">
                <h2 className='text-6xl font-bold text-blue-700 ml-8 mt-20'>Why Use ReBazz</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 lg:ml-6 mb-14'>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <div class="px-6 py-4">
                        <img src={Image2} alt='img' className='float-center ml-20' />
                        <div class="font-bold text-3xl mt-4 text-center text-blue-700">Fast Delivery</div>
                        <p class="text-black text-xl mt-2 text-center font-bold">
                            Become searchable by top companies in your domain. Companies search for candidate CVs directly for open positions.
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <div class="px-6 py-4">
                        <img src={Image3} alt='img' className='float-center ml-20' />
                        <div class="font-bold text-3xl mt-4 text-center text-blue-700">Huge Discount</div>
                        <p class="text-black text-xl mt-2 text-center font-bold">
                            Let companies reach you directly without any hassle.             Companies contact candidates & schedule interviews.
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8 bg-white">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center ml-20' />
                        <div class="font-bold text-3xl mt-4 text-center text-blue-700">Great Rewards</div>
                        <p class="text-black text-xl mt-2 text-center font-bold">
                            Get hired effortlessly by letting companies reach you. 70% of companies hire candidates without posting jobs.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
