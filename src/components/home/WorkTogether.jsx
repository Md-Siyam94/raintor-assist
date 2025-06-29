import React from 'react';
import { IoIosCall } from 'react-icons/io';
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
                                <label className="label">Email</label>
                                <input type="email" className="input bg-transparent border-b" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;