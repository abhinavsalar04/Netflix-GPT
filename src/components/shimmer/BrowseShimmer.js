import React from 'react';

const BrowseShimmer = () => {
  return (
    <div className="flex flex-col transition-all duration-300 animate-pulse w-screen">
      <div className="relative w-screen h-[300px] mb-6 bg-gray-300 transition-all duration-300 animate-pulse rounded"></div>
      <div className="absolute mt-24 rounded-lg w-[20%] h-10 mb-6 bg-[rgb(195,195,195)] transition-all duration-300 animate-pulse"></div>
      <div className="absolute mt-36 rounded-lg w-[40%] h-10 bg-[rgb(195,195,195)] transition-all duration-300 animate-pulse"></div>
      <div className="absolute my-56">
      <div className='w-[55%] rounded h-8 bg-gray-200 my-2'></div>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex ">
                    <div className='mr-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                </div>
            </div>
        </div>
      <div className='mt-[6rem]'>
      {
        
        [...Array(2)].map((_, index) => (
        <div className="mt-8">
            <div className='w-[70%] rounded h-8 bg-gray-200 my-2'></div>
            <div className="flex over2flow-x-scroll no-scrollbar">
                <div className="flex ">
                    <div className='mr-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(195,195,195)] rounded'></div>
                </div>
            </div>
        </div>
        ))
      }
      </div>
    </div>
  );
};



export default BrowseShimmer;
