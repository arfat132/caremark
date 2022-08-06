import React from 'react';
const ServiceSection = () => {
    return (
        <section className="text-gray-600 body-font px-12 bg-gray-100">
            <div className="container px-5 pb-48 mx-auto">
                <div className="text-center mb-20">
                    <h3 className='text-secondary font-bold text-xl'>Our Services</h3>
                    <h1 className="sm:text-3xl text-2xl title-font text-accent mb-4 font-bold">Take The Road To A Healthy Heart Beat</h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-white shadow-lg border-l-4 border-l-secondary rounded-none overflow-hidden">
                            <img className='mx-auto w-40 pt-8' src="https://themetechmount.com/html/dezily/images/cardiology.svg" alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-accent text-2xl title-font font-bold mb-3">Heart Screening Technologies</h2>
                                <p className="leading-relaxed text-base">The heart screening and detection is the essential to the manage and even preventing disease.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-white shadow-lg border-l-4 border-l-secondary rounded-none overflow-hidden">
                            <img className='mx-auto w-40 pt-8' src="https://themetechmount.com/html/dezily/images/healthcare.svg" alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-gray-900 text-2xl title-font font-bold mb-3">Pacemaker Implant Techniquies</h2>
                                <p className="leading-relaxed text-base">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-white shadow-lg border-l-4 border-l-secondary rounded-none overflow-hidden">
                            <img className='mx-auto w-40 pt-8' src="https://themetechmount.com/html/dezily/images/heart.svg" alt="" srcSet="" />
                            <div className="p-6">
                                <h2 className="text-gray-900 text-2xl title-font mb-3 font-bold">Cardiovascular Care Services</h2>
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