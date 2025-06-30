import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    {/* Header Section */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="text-2xl font-bold">
                                    <span className="text-lime-400">DEVLOP.ME</span>

                                </div>
                            </div>
                            <div className="text-right">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                                    As you can
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        {/* Say Hello Section */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-300 mb-8">Say hello</h3>
                            <div className="space-y-4">
                                <Link
                                    href="mailto:HELLO@DEVLOP.ME.COM"
                                    className="flex items-center space-x-3 text-white hover:text-lime-400 transition-colors duration-300 group"
                                >
                                    <div className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="font-medium">HELLO@DEVLOP.ME.COM</span>
                                </Link>
                                <a
                                    href="mailto:MAHBUBUL@ME.COM"
                                    className="flex items-center space-x-3 text-white hover:text-lime-400 transition-colors duration-300 group"
                                >
                                    <div className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="font-medium">MAHBUBUL@ME.COM</span>
                                </a>
                            </div>

                            <div className="pt-8">
                                <h4 className="text-lg font-medium text-gray-300 mb-6">Call</h4>
                                <div className="space-y-3">
                                    <a
                                        href="tel:+784349496100"
                                        className="flex items-center space-x-3 text-white hover:text-lime-400 transition-colors duration-300 group"
                                    >
                                        <div className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium">+784349 4961 00</span>
                                    </a>
                                    <a
                                        href="tel:+88450100941"
                                        className="flex items-center space-x-3 text-white hover:text-lime-400 transition-colors duration-300 group"
                                    >
                                        <div className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium">+8845 0100 941</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Menu Section */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-300 mb-8">Menu</h3>
                            <nav className="space-y-4">
                                <ul>
                                    <li>Home</li>
                                </ul>
                            </nav>
                        </div>

                        {/* Social Section */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-300 mb-8">Social</h3>
                            <div className="space-y-4">
                                <li>TWITTER
                                </li>
                                <li>
                                    INSTAGRAM
                                </li>
                                <li>
                                    FACEBOOK
                                </li>
                                <li>
                                    BEHANCE
                                </li>
                                <li>

                                    DRIBBBLE</li>
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
                                © devlop.me 2022
                            </div>
                            <div className="flex space-x-4 text-sm">
                                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    PRIVACY
                                </a>
                                <span className="text-gray-600">-</span>
                                <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    TERMS
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;