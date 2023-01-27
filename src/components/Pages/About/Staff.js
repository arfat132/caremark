import React from 'react';
import { Link } from 'react-router-dom';

const Staff = ({ staff }) => {
    const { name, img, location, reviews } = staff;

    return (
        <div class="p-4 md:w-1/2" >
            <div class="bg-white shadow-lg rounded-lg h-full flex sm:flex-row items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={img} />
                <div class="flex-grow sm:pl-8 p-5">
                    <h2 class="title-font font-bold text-lg text-gray-900">{name}</h2>
                    <h3 class="text-gray-500 mb-3">{location}</h3>
                    <p class="mb-4">{reviews}</p>
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

export default Staff;