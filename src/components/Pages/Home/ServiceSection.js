import React from 'react';
import fluorida from '../../Assests/icons/fluoride.png';
import cavity from '../../Assests/icons/fluoride.png';
import teeth from '../../Assests/icons/whitening.png';
const ServiceSection = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto">
                <div className="text-center mb-20">
                    <h3 className='text-secondary font-bold text-xl'>Our Services</h3>
                    <h1 className="sm:text-3xl text-2xl title-font text-gray-900 mb-4">Services We Provide</h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full shadow-lg border-2 hover:border-secondary border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className='mx-auto pt-8' src={fluorida} alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Fluoride Treatment</h2>
                                <p className="leading-relaxed text-base">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full shadow-lg border-2 hover:border-secondary border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className='mx-auto pt-8' src={cavity} alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Cavity Filling</h2>
                                <p className="leading-relaxed text-base">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full shadow-lg border-2 hover:border-secondary border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className='mx-auto pt-8' src={teeth} alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Teeth Whitening</h2>
                                <p className="leading-relaxed text-base">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ServiceSection;