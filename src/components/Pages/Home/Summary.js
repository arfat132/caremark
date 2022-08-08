import React from 'react';
import { MdApartment, MdOutlineRateReview } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { FaUserMd } from 'react-icons/fa';
import { RiNurseLine } from 'react-icons/ri';
import CountUp from 'react-countup';

const Summary = () => {
    return (
        <div class="bg-gray-100">
            <div class="container px-5 lg:px-20 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                    <p className='text-secondary font-bold'>OUR SUMMARY</p>
                    <h1 class="font-bold py-2 text-3xl text-accent">Trusted By All Types Guardian</h1>
                </div>
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                        <div class="bg-white shadow-lg border-l-4 border-l-secondary px-4 py-6">
                            <FaUserMd className='mx-auto text-5xl text-secondary mb-3' />
                            <h2 class="title-font font-bold text-3xl text-accent"><CountUp end={234} />K</h2>
                            <p class="leading-relaxed text-secondary">Specialist</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                        <div class="bg-white  shadow-lg border-l-4 border-l-secondary px-4 py-6">
                            <FiUsers className='mx-auto text-5xl text-secondary mb-3' />
                            <h2 class="title-font font-bold text-3xl text-accent"><CountUp end={334} />K</h2>
                            <p class="leading-relaxed text-secondary">Users</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                        <div class="bg-white shadow-lg border-l-4 border-l-secondary px-4 py-6">
                            <MdOutlineRateReview className='mx-auto text-5xl text-secondary mb-3' />
                            <h2 class="title-font font-bold text-3xl text-accent"><CountUp end={734} />K</h2>
                            <p class="leading-relaxed text-secondary">Reviews</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                        <div class="bg-white shadow-lg border-l-4 border-l-secondary px-4 py-6">
                            <MdApartment className='mx-auto text-5xl text-secondary mb-3' />
                            <h2 class="title-font font-bold text-3xl text-accent"><CountUp end={324} />K</h2>
                            <p class="leading-relaxed text-secondary">Departments</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/5 sm:w-1/2 w-full">
                        <div class="bg-white shadow-lg border-l-4 border-l-secondary px-4 py-6">
                            <RiNurseLine className='mx-auto text-5xl text-secondary mb-3' />
                            <h2 class="title-font font-bold text-3xl text-accent"><CountUp end={434} />K</h2>
                            <p class="leading-relaxed text-secondary">Nurses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;