import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black text-white rounded-2xl">
            <footer >
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    {/* Header Section */}
                    <div className="mb-16">
                        <div className="flex items-center ">
                            <div className="flex items-center space-x-4">
                                <div className="text-2xl font-bold">
                                    <span className="text-lime-400">DEVLOP.ME</span>

                                </div>
                            </div>
                            <div className="mx-auto">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold ">
                                    As you can
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 ">
                        {/* Say Hello Section */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-300 mb-8">Say hello</h3>
                            <div className="space-y-4">
                                <div
                                  
                                    className="flex items-center space-x-3 text-white"
                                >
                                   
                                    <span className="font-medium">siyam942404@gmail.com</span>
                                </div>
                              
                            </div>

                            <div className="pt-8">
                                <h4 className="text-lg font-medium text-gray-300 mb-6">Call</h4>
                                <div className="space-y-3">
                                    <div
                                      
                                        className="flex items-center space-x-3 text-white"
                                    >
                                        
                                        <span className="font-medium">+880 01789478967</span>
                                    </div>
                                    <div
                                       
                                        className="flex items-center space-x-3 text-white"
                                    >
                                        
                                        <span className="font-medium">+880 01964402834</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Menu Section */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-300 mb-8">Menu</h3>
                            <div className="space-y-4">
                                <ul>
                                    <li>Home</li>
                                    <li className='my-2'>About</li>
                                    <li>Portfolio</li>
                                    <li className='my-2'>Blog</li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-300 mb-8">Social</h3>
                            <div className="space-y-4">
                                <ul>
                                    <li>TWITTER
                                </li>
                                <li className='my-2'>
                                    INSTAGRAM
                                </li>
                                <li>
                                    FACEBOOK
                                </li>
                                <li className='my-2'>
                                    BEHANCE
                                </li>
                                <li>

                                    DRIBBBLE</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-xl font-bold tracking-wider">
                                BESNIK
                            </div>
                            <div className="text-gray-400 text-sm">
                                © devlop.me 2025
                            </div>
                            <div className="flex space-x-4 text-sm">
                                <Link className="text-gray-400 hover:text-white transition-colors duration-300">
                                    PRIVACY
                                </Link>
                                <span className="text-gray-600">-</span>
                                <Link  className="text-gray-400 hover:text-white transition-colors duration-300">
                                    TERMS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;