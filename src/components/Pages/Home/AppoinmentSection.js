import React from 'react';
import doctors from '../../Assests/Banner/three-doctors.png';
const AppoinmentSection = () => {
    return (
        <div className="hero bg-[url(https://media.istockphoto.com/photos/empty-luxury-modern-hospital-room-picture-id1298375809?k=20&m=1298375809&s=612x612&w=0&h=TRwuAULfN4SG_suNeUrFOA_51BMgRNpNV6HJV_Cfmu4=)]">
            <div className="hero-overlay bg-accent bg-opacity-80"></div>
            <div className="text-gray-600 body-font px-5 lg:px-20">
                <div className="container mx-auto flex md:flex-row flex-col items-center lg:px-12 ">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center hidden lg:block rounded mt-[-80px] h-full " alt="hero" src={doctors} />
                    </div>
                    <div className="lg:flex-grow mt-16 lg:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-8">
                        <h4 className='text-secondary font-bold text-xl mb-4'>Appoinment</h4>
                        <h1 className="title-font sm:text-4xl text-3xl text-white mb-4 font-medium ">Make An Appoinment Today</h1>
                        <p className="mb-8 leading-relaxed text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-secondary border-0 py-2 px-4 focus:outline-none rounded text-lg uppercase font-bold">Get Started</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppoinmentSection;