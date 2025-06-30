import React from 'react';
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import { MdArrowDownward } from 'react-icons/md';

const WorkTogether = () => {
    return (
        <div className='px-12'>
            <div className='flex   '>
                <div className='py-2 px-2 border rounded-full flex gap-1 items-center'><MdArrowDownward className='text-2xl' /></div>
                <button className='py-2 px-4 border rounded-full '>Contact</button>
            </div>
            <div className=" bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-8xl font-semibold  ">Interested in <span className=' btn h-28 pb-5 text-7xl px-1 bg-black text-white rounded-xl'>work</span> together?</h1>
                        <p className="py-6">
                            We start every new client interaction with an in-depth discovery call wherewe get to know each other
                        </p>
                        <button className="py-3 pr-4 border rounded-full flex gap-3 items-center "><IoIosCall className='text-4xl p-1 border rounded-full' />Schedule a Call</button>
                    </div>
                    <div className="card bg-black text-white w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">

                                <input type="text" className="input bg-transparent border-b" placeholder="Enter your name" />

                                <input type="email" className="input bg-transparent border-b" placeholder="Your email address" />

                                <input type="text" className="input bg-transparent border-b" placeholder="Describe your project" />

                                <div className="flex mt-4 w-full">
                                    <button className="py-2 pr-4 border rounded-full flex gap-3 items-center "><FaLocationArrow className='text-3xl p-2 border rounded-full' />Send</button>
                                    <div className="divider divider-horizontal">OR</div>
                                    <button className="py-2 pr-4 border rounded-full flex gap-3 items-center "><IoMail className='text-4xl p-1 border rounded-full' />Contact me</button>
                                </div>
                            
                                    <div className='flex items-center gap-2 mt-20'>
                                        <h2 className='text-lg'>@Williamrey</h2>
                                        {/* Icons */}
                                        <div className='flex items-center gap-3 '>
                                            <p className='border w-8 h-0'></p>
                                            <FaFacebook className='text-2xl' />
                                            <FaInstagram className='text-2xl' />
                                            <FaTwitter className='text-2xl' />
                                        </div>
                                    </div>
                               
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;