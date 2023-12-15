import React from 'react';

const BrowseShimmer = () => {
  return (
    <div className="flex flex-col transition-all duration-300 animate-pulse  w-screen bg-black">
      <div className="relative w-full h-[300px] mb-6 bg-black transition-all duration-300 animate-pulse rounded"></div>
      <div className="absolute mt-24 rounded-2xl w-[20%] h-[22px] mb-6 bg-[rgb(51,51,51)] transition-all duration-300 animate-pulse"></div>
      <div className="absolute mt-36 rounded-lg w-[40%] h-4 bg-[rgb(51,51,51)] transition-all duration-300 animate-pulse"></div>
      <div className="absolute my-56">
      <div className='w-[10%] rounded-lg h-4 bg-[rgb(51,51,51)] my-2'></div>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex ">
                    <div className='mr-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                </div>
            </div>
        </div>
      <div className='mt-[6rem]'>
      {
        
        [...Array(2)].map((_, index) => (
        <div key={index} className="mt-8">
            <div className='w-[25%] rounded-lg h-4 bg-[rgb(51,51,51)] my-2'></div>
            <div className="flex over2flow-x-scroll no-scrollbar">
                <div className="flex ">
                    <div className='mr-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
                    <div className='mx-[2px] w-32 h-40 bg-[rgb(51,51,51)] rounded'></div>
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
