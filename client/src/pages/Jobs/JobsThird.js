import React from 'react';
import { JobsSearch } from './JobsSearch';
import { JobsListsThird } from './JobsListsThird';
import { JobsCategory } from './JobsCategory';

export const JobsThird = () => {
    return (
        <>
            <div className='bg-indigo-50 pt-16'>
                <JobsSearch />
            </div>
            <div className='grid grid-cols-3 gap-4 bg-indigo-50 py-20 pr-10'>
                <div className='pl-3'>
                    <JobsCategory />
                </div>
                <div className="col-span-2">
                    <JobsListsThird />
                </div>
            </div>
        </>
    );
};
