import React from 'react';
import qs from 'qs';

import { useRouter } from 'next/router';
                                              // Redirct กลับหน้า Blog 
const Pagination = ({ page, pageCount, redirectUrl = '/blog' }) => {
    const router = useRouter();

    const isNextDisabled = () => {
        return page >= pageCount;
    };

    const isPrevDisabled = () => {
        return page <= 1;
    };

    const handlePaginate = async (direction) => {
        if (direction === 1 && isNextDisabled()) {
            return;
        }

        if (direction === -1 && isPrevDisabled()) {
            return;
        }
        const queryString = qs.stringify({
            ...router.query,
            page: page + direction,
        });

        router.push(`${redirectUrl}?${queryString}`);
    };
    return (
        <div className="flex justify-center ">
        <button
            onClick={() => handlePaginate(-1)}
            className={`${' py-2 px-4 text-black w-24 rounded'} ${
                isPrevDisabled() ? 'bg-amber-300' : 'text-black bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:amber-purple-800/80'
            }`}>
            Previous
        </button>
        <button
            onClick={() => handlePaginate(1)}
            className={`${' text-black w-24 rounded ml-4'} ${
                isNextDisabled() ? 'bg-amber-300' : 'text-black bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:amber-purple-800/80'
            }`}>
            Next
        </button>
    </div>
    );
};

export default Pagination;