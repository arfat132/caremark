import React from 'react';
import doctors from '../../Assests/Banner/doctors.png'
const Appoinment = () => {
    return (
        <div class="hero bg-[url(https://media.istockphoto.com/photos/empty-luxury-modern-hospital-room-picture-id1298375809?k=20&m=1298375809&s=612x612&w=0&h=TRwuAULfN4SG_suNeUrFOA_51BMgRNpNV6HJV_Cfmu4=)]">
            <div class="hero-overlay bg-accent bg-opacity-80"></div>
            <div class="text-gray-600 body-font  px-20">
                <div class="container mx-auto flex md:flex-row flex-col items-center px-12 ">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded mt-[-100px] h-90" alt="hero" src={doctors} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
                        <h4 className='text-secondary font-bold text-xl mb-4'>Appoinment</h4>
                        <h1 class="title-font sm:text-4xl text-3xl text-white mb-4 font-medium ">Make An Appoinment Today</h1>
                        <p class="mb-8 leading-relaxed text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-gradient-to-r from-secondary to-primary border-0 py-2 px-6 focus:outline-none rounded text-lg uppercase font-bold">Get Started</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Appoinment;