import React from 'react';
const ContactUs = () => {
    return (
        <div className="hero bg-[url(https://media.istockphoto.com/photos/empty-luxury-modern-hospital-room-picture-id1298375809?k=20&m=1298375809&s=612x612&w=0&h=TRwuAULfN4SG_suNeUrFOA_51BMgRNpNV6HJV_Cfmu4=)]">
            <div className="hero-overlay bg-accent bg-opacity-80"></div>
            <div className="container px-40 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <div className="p-4 px-4 lg:w-1/3 md:w-1/2 rounded-md bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-secondary text-lg mb-1 font-bold title-font text-center">Contact Us</h2>
                    <h4 className="text-2xl mb-1 title-font text-center">Stay Conected With Us</h4>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0.5 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0.5 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-0.5 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-gradient-to-r from-secondary to-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;