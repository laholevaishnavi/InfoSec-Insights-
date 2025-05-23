import React from 'react';

const Footer = () => {
    return (
        <footer className="py-10 w-full relative z-10 bg-gray-900 text-white sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        {/* <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Company Logo" /> */}

                        <p className="text-base leading-relaxed text-gray-400 mt-7">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a href="#" title="Twitter" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="Facebook" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="Instagram" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="GitHub" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M12 2.253A10.36 10.36 0 0 0 1.64 12.727c0 4.573 3.062 8.566 7.31 9.949.534.1.73-.234.73-.517 0-.258-.013-1.106-.013-2.017-2.731.498-3.37-.664-3.584-1.276-.12-.305-.64-1.276-1.094-1.537-.373-.202-.906-.699-.013-.712.841-.014 1.44.774 1.64 1.093.956 1.585 2.482 1.14 3.09.861.1-.689.373-1.14.68-1.403-2.42-.273-4.957-1.208-4.957-5.315 0-1.14.41-2.073 1.093-2.803-.107-.273-.48-1.385.107-2.872 0 0 .894-.285 2.93 1.093a10.07 10.07 0 0 1 5.34 0c2.035-1.378 2.93-1.093 2.93-1.093.587 1.487.214 2.599.107 2.872.68.73 1.094 1.663 1.094 2.803 0 4.107-2.55 5.042-4.98 5.315.387.336.734.975.734 2.004 0 1.403-.013 2.527-.013 2.872 0 .285.187.63.734.517A10.374 10.374 0 0 0 22.36 12.728C22.36 7.187 17.75 2.253 12 2.253z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Features
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Works
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Customer Support
                                </a>
                            </li>

                           

                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Resources</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Free eBooks
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Development Tutorial
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    How to - Blog
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="text-base text-gray-400 transition-all duration-200 hover:text-white">
                                    Youtube Playlist
                                </a>
                            </li>
                        </ul>
                    </div>

                   
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to Newsletter</p>

                        <form action="#" method="POST" className="mt-6">
                            <div className="flex flex-col sm:flex-row">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-4 py-2 mt-5 text-base font-semibold text-white transition-all duration-200 bg-gray-800 border border-transparent rounded-lg sm:ml-2 sm:mt-0 hover:bg-gray-700 focus:bg-gray-700"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>

                        <p className="mt-4 text-sm text-gray-400">Subscribe to get the latest news article and resources</p>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-700" />

                <p className="text-sm text-gray-400">
                    © 2024 Companyname Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
