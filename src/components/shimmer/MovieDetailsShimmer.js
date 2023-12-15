import React from 'react';
import Header from '../Header';

const MovieDetailsShimmer = () => {
    return (
        <div className='bg-[rgb(51,51,51)] h-screen'>
            <div>
                <Header />
            </div>
            <div className='flex flex-col md:flex-row pt-12 pb-8 md:pt-20 justify-center bg-inherit  text-white md:px-[10%]'>
                <div className='left animate-pulse md:mx-12 lg:mx-12 mx-2'>
                    <div className='md:w-[350px] h-[500px]  bg-[rgb(91,91,91)] rounded-lg'></div>
                </div>
                <div className='right animate-pulse w-[120%] md:my-0 my-8 md:mx-0 lg:mx-0 mx-2'>
                    <div className='h-8 bg-[rgb(91,91,91)] rounded-lg'></div>
                    <div className='mt-2 h-6 bg-[rgb(91,91,91)] rounded-lg'></div>
                    <div className='mt-24  h-4 bg-[rgb(91,91,91)] rounded-lg'></div>
                    <div className='mt-2 h-4 bg-[rgb(91,91,91)] rounded-lg'></div>
                    <div className='mt-40 h-4 bg-[rgb(91,91,91)] rounded-lg'></div>
                    <div className='flex mt-2'>
                        <div className='mr-2 w-16 h-4 bg-[rgb(91,91,91)] rounded-lg'></div>
                        <div className='mx-2 w-16 h-4 bg-[rgb(91,91,91)] rounded-lg'></div>
                        <div className='mx-2 w-16 h-4 bg-[rgb(91,91,91)] rounded-lg'></div>
                        
                    </div>
                    <div className='mt-6 w-72 h-4 bg-[rgb(91,91,91)] rounded-lg'></div>
                </div>
            </div>
        </div>
      );
    };

export default MovieDetailsShimmer;
