import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>About </NavLink></li>
        <li><NavLink to={"https://siyam-portfolio-1.netlify.app/"}>Portfolio </NavLink></li>
        <li><NavLink>Blog </NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm border px-10 pt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-xl ">DEVLOP.ME</a>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex mr-10">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <NavLink className="py-2 pr-3 border rounded-full flex gap-1 items-center "><GoArrowRight className='text-3xl p-1 border rounded-full' />Start Project</NavLink>
            </div>
        </div>
    );
};

export default Navbar;