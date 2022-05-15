import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentSlot from './AppoinmentSlot';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({ date }) => {
    const [appoinmentSlots, setAppoinmentSlots] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
            fetch("appoinment.json")
            .then(res => res.json())
            .then(data => setAppoinmentSlots(data))
    }, [])
    return (
        <>
            <h1 className='py-12 text-center text-lg lg:text-xl font-bold text-secondary'>Available Appoinment on {format(date, 'PPP')} </h1>
            <div className="flex flex-wrap text-center px-12">
                {
                    appoinmentSlots.map(appoinmentSlot => <AppoinmentSlot
                        key={appoinmentSlot._id}
                        appoinmentSlot={appoinmentSlot}
                        setTreatment={setTreatment}
                    ></AppoinmentSlot>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </>
    );
};

export default AvailableAppoinment;