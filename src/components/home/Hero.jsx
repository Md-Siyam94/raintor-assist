import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="px-12 bg-base-200">
            <div className=" ">

                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-8xl font-semibold  ">Trusted <span className=' btn h-28 pb-5 text-8xl px-1 bg-black text-white rounded-xl'>Partner</span> for</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-8xl font-semibold mt-4 "> Your Website <span className=' btn h-28 pb-5 text-8xl px-1 bg-black text-white rounded-xl'>Develop.</span></h1>

                    <div className='flex items-center gap-48 my-10'>
                        <div className='rotate-270 mt-20'>
                            <h2 className='text-xl'>@Williamrey</h2>
                            {/* Icons */}
                            <div className='flex items-center gap-3 mt-6'>
                                <p className='border w-8 h-0'></p>
                                <FaFacebook className='text-2xl' />
                                <FaInstagram className='text-2xl' />
                                <FaTwitter className='text-2xl' />
                            </div>
                        </div>
                        <div className='w-lg '>
                            <p className="py-6 font-semibold">
                                Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.
                            </p>
                            <button className="py-3 pr-4 border rounded-full flex gap-3 items-center "><IoIosCall className='text-4xl p-1 border rounded-full' />Schedule a Call</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;