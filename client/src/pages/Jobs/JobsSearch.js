import React from 'react';

export const JobsSearch = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div class="col-span-2 mr-56">
                <div className='flex flex-row flex-wrap ml-10'>
                    <div class="flex justify-center">
                        <div class="mb-3 xl:w-80">
                            <input
                                type="search"
                                class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleSearch"
                                placeholder="Search your item"
                            />
                        </div>
                    </div>
                    <button class="bg-indigo-700 hover:bg-indigo-600 text-white font-bold px-6 mb-3 rounded ml-2">
                        Search
                    </button>
                </div>
            </div>
            <div>
                <button className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded ml-44 py-2 px-8">
                    Sort by
                </button>
            </div>
        </div>
    );
};
