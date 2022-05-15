import React from 'react';
import banner from '../../Assests/Banner/banner.jpg';
import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';

const AppoinmentBanner = ({ date, setDate }) => {

    const classNames: ClassNames = {
        ...styles,
        head: 'custom-head'
    };

    return (
        <div className="hero min-h-screen bg-[url(https://media.istockphoto.com/photos/modern-medical-clinic-picture-id1152845300?k=20&m=1152845300&s=612x612&w=0&h=izBnjD1RnZhaB4lR4eLKnlNazLUu0-3D7xrOvHXAU64=)]">
            <div className="hero-overlay bg-white bg-opacity-80"></div>
            <div className="text-gray-600 body-font">
                <div className="mx-auto flex py-24 md:flex-row flex-col items-center sm:flex-row-reverse">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0 items-center">
                        <style>{`.custom-head { color: #19D3AE }`}</style>
                        <DayPicker
                            className='bg-white p-4 rounded-lg shadow-lg border-secondary'
                            styles={{
                                caption: { color: '#19D3AE' }
                            }}
                            mode="single"
                            required
                            classNames={classNames}
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
                        <img className="object-cover object-center rounded" alt="hero" src={banner} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;