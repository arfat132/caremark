import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { name, specialist, img } = doctor;
    return (
        <div class="p-4 lg:w-1/5 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center bg-white shadow-lg">
                <img alt="team" class="px-3 border-b-4 border-b-secondary flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={img} />
                <div class="w-full">
                    <h2 class="title-font font-bold text-lg text-accent">{name}</h2>
                    <h3 class="text-gray-500 mb-3">{specialist}</h3>
                    <span className="inline-flex pb-5 sm:ml-auto sm:mt-0 mt-8 justify-center sm:justify-start">
                        <Link to='' className="text-secondary border border-secondary p-2">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link to='' className="ml-3 text-secondary border border-secondary p-2">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </Link>
                        <Link to='' className="ml-3 text-secondary border border-secondary p-2">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link to='' className="ml-3 text-secondary border border-secondary p-2">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Doctor;