import React from 'react';
import banner from '../../Assests/Banner/banner.jpg'
const Carousel = () => {
    return (
        <div className="hero min-h-screen bg-[url(https://media.istockphoto.com/photos/modern-medical-clinic-picture-id1152845300?k=20&m=1152845300&s=612x612&w=0&h=izBnjD1RnZhaB4lR4eLKnlNazLUu0-3D7xrOvHXAU64=)]">
            <div className="hero-overlay bg-white bg-opacity-80"></div>
            <div className="text-gray-600 body-font  px-20">
                <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-gradient-to-r from-secondary to-primary border-0 p-2 focus:outline-none rounded text-md uppercase font-bold">Get Started</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={banner} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;