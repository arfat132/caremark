import React from 'react';
import image from '../../Assests/Banner/about.png'
import { FaClinicMedical } from "@react-icons/all-files/fa/FaClinicMedical";

const WhyChooseUs = () => {
    return (
        <div>
        <section class="text-gray-600 body-font lg:px-12 bg-gray-100">
            <div class="container mx-auto flex px-5 pb-20 md:flex-row flex-col items-center">
                <div class="lg:flex-grow lg:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h3 className='font-bold text-lg text-secondary mb-3'>Why Choose Us</h3>
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-accent">Heart Surgery Specialist
                    </h1>
                    <p class="mb-8 leading-relaxed text-gray-400">Chest pain is the most common warning sign of a heart attack. But there can be other symptoms, too, like lightheadedness.</p>
                    <div class="lg:flex justify-center gap-5">
                        <div className='mb-5 lg:mb-0 card card-side bg-base-100 shadow-lg border-l-4 border-l-secondary rounded-none'>
                            <FaClinicMedical className='text-8xl text-secondary ml-4 mt-6' />
                            <div className="card-body">
                                <h2 className="card-title text-lg">Heart Transplant</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                            </div>
                        </div>
                        <div className='card card-side bg-base-100 shadow-lg border-l-4 border-l-secondary rounded-none'>
                            <FaClinicMedical className='text-8xl text-secondary ml-4 mt-6' />
                            <div className="card-body">
                                <h2 className="card-title text-lg">Heart Surgery</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 lg:py-8 lg:pl-12">
                    <img class="object-cover object-center rounded" alt="hero" src={image} />
                </div>
            </div>
        </section>
    </div>
    );
};

export default WhyChooseUs;