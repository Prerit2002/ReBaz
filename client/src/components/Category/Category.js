import React from 'react';
import Image from "../../assets/image.svg";

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
            <div className="text-left">
                <h2 className='text-6xl font-bold text-indigo-700 ml-8 mt-20 mb-10'>Category</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 ml-3 mr-3'>
                <div class="flex flex-wrap rounded-2xl border-gray-400 border-2 bg-gray-400">
                    <div className='flex-none w-44 h-32 mt-5 ml-5'>
                        <img src={Image} alt='img' className='float-center' />
                    </div>
                    <div className='flex-initial'>
                        <div class="font-bold text-2xl text-indigo-700 mt-10 ml-2">Visually Impaired</div>
                        <p class="text-xl text-indigo-700 ml-2">
                            19688 Products
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap rounded-2xl border-gray-400 border-2 bg-gray-400">
                    <div className='flex-none w-44 h-32 mt-5 ml-5'>
                        <img src={Image} alt='img' className='float-center' />
                    </div>
                    <div className='flex-initial'>
                        <div class="font-bold text-2xl text-indigo-700 mt-10 ml-2">Visually Impaired</div>
                        <p class="text-xl text-indigo-700 ml-2">
                            19688 Products
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap rounded-2xl border-gray-400 border-2 bg-gray-400">
                    <div className='flex-none w-44 h-32 mt-5 ml-5'>
                        <img src={Image} alt='img' className='float-center' />
                    </div>
                    <div className='flex-initial'>
                        <div class="font-bold text-2xl text-indigo-700 mt-10 ml-2">Visually Impaired</div>
                        <p class="text-xl text-indigo-700 ml-2">
                            19688 Products
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap rounded-2xl border-gray-400 border-2 bg-gray-400">
                    <div className='flex-none w-44 h-32 mt-5 ml-5'>
                        <img src={Image} alt='img' className='float-center' />
                    </div>
                    <div className='flex-initial'>
                        <div class="font-bold text-2xl text-indigo-700 mt-10 ml-2">Visually Impaired</div>
                        <p class="text-xl text-indigo-700 ml-2">
                            19688 Products
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap rounded-2xl border-gray-400 border-2 bg-gray-400">
                    <div className='flex-none w-44 h-32 mt-5 ml-5'>
                        <img src={Image} alt='img' className='float-center' />
                    </div>
                    <div className='flex-initial'>
                        <div class="font-bold text-2xl text-indigo-700 mt-10 ml-2">Visually Impaired</div>
                        <p class="text-xl text-indigo-700 ml-2">
                            19688 Products
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap rounded-2xl border-gray-400 border-2 bg-gray-400">
                    <div className='flex-none w-44 h-32 mt-5 ml-5'>
                        <img src={Image} alt='img' className='float-center' />
                    </div>
                    <div className='flex-initial'>
                        <div class="font-bold text-2xl text-indigo-700 mt-10 ml-2">Visually Impaired</div>
                        <p class="text-xl text-indigo-700 ml-2">
                            19688 Products
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
