import React from 'react';

const AppoinmentSlot = ({ appoinmentSlot, setTreatment }) => {
    const { name, slots } = appoinmentSlot;
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 bg-gray-50 border-gray-100 border-opacity-20 overflow-hidden shadow-lg rounded-lg">
                <div className="p-6">
                    <h1 className="text-xl font-bold tracking-tight text-secondary">{name}</h1>
                    <p className="text-lg font-medium tracking-tight text-gray-700 my-2">{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                    }</p>
                    <p className='mb-3'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                        <label
                            htmlFor="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(appoinmentSlot)}
                            className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentSlot;