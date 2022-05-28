import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image1 from "../../assets/uncle.svg";

export const JobsListThird = () => {

    const [data, setData] = useState({
        getData: []
    })

    useEffect(() => {
        axios.get('https://samarthbackend.herokuapp.com/findAllJob').then((response) => {
            setData({
                getData: response.data.data.jobs
            });
            console.log(response.data.data.jobs);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        // <>
        //     {
        //         data.getData.map((job) => {
        //             return (
        //                 <div class="w-full py-4 bg-white mb-10">
        //                     <div class="grid grid-cols-6 gap-4">
        //                         <div>
        //                             <img src={Google} alt='pic' className='pt-3 pl-10 h-24' />
        //                         </div>
        //                         <div class="col-start-2 col-span-4">
        //                             <h2 className='text-2xl font-semibold mt-3'>{job.jobInfo.title}</h2>
        //                             <h3 className='text-lg font-semibold'>{job.compInfo.name}</h3>
        //                             <div className='flex flex-row flex-wrap'>
        //                                 <div className='flex flex-row flex-wrap mr-5 mt-2'>
        //                                     <h3 className=''>{job.jobInfo.salary}</h3>
        //                                 </div>
        //                                 <div className='flex flex-row flex-wrap mr-5 mt-2'>

        //                                     <h3 className=''>{job.jobInfo.disabilityType}</h3>
        //                                 </div>
        //                                 <div className='flex flex-row flex-wrap mt-2'>
        //                                     <h3 className=''>{job.jobInfo.location}</h3>
        //                                 </div>
        //                             </div>
        //                             <h2 className='mt-3 text-lg'>{job.jobDescp.abtRole}</h2>
        //                             <button className="bg-violet-200 text-indigo-600 font-bold rounded mt-7 py-2 px-8">
        //                                 2 Days ago
        //                             </button>
        //                         </div>
        //                         <div>
        //                             <img src={Bookmark} alt='pic' className='pt-3 pl-10 h-12' />
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     }
        // </>

        <>

            <div className='grid lg:grid-cols-3 gap-4 lg:ml-6'>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 lg:ml-6'>

                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 lg:ml-6'>

                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Image1} alt='img' className='float-center' />
                        <div class="font-bold text-xl mt-4 text-left text-blue-700">Godrej Cupboard 7 feet tall</div>
                        <div class="font-bold text-lg mb-2 text-left text-blue-700">R.K. Puram Supermarket</div>
                        <p class="text-orange-600 text-2xl mt-2 text-left font-bold">
                            Rs.25000
                        </p>
                    </div>
                </div>
            </div>

        </>

    );
};
