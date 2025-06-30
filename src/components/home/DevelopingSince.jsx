import React from 'react';
import { MdArrowDownward } from 'react-icons/md';

const DevelopingSince = () => {
    return (
        <div>
             <div className='flex px-20 py-10 justify-end '>
                <div className='py-2 px-2 border rounded-full flex gap-1 items-center'><MdArrowDownward className='text-2xl' /></div>
                <button className='py-2 px-4 border rounded-full '>About</button>
            </div>
            <div className='text-center w-6xl space-x-2 font-semibold mx-auto'>
               
                <h1 className=' text-8xl  '>I’ve been <span className=' btn h-28 pb-5 text-8xl px-1 bg-black text-white rounded-xl'>Developing</span> Websites since <span className=' btn h-24 text-8xl px-1 bg-black text-white rounded-xl'>2024</span></h1>
                <p className='w-xl mx-auto mt-5'>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course ofaction.</p>
            </div>
        </div>
    );
};

export default DevelopingSince;