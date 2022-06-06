import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppoinmentSlot from './AppoinmentSlot';
import BookingModal from './BookingModal';
import Spinner from '../../Spinner/Spinner';

const AvailableAppoinment = ({ date }) => {
    // const [appoinmentSlots, setAppoinmentSlots] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PPP');

    const { isLoading, error, data: appoinmentSlots, refetch } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )

    if (isLoading) return <Spinner></Spinner>;

    if (error) return 'An error has occurred: ' + error.message

    // useEffect(() => {
    //         fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setAppoinmentSlots(data))
    // }, [formattedDate])
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
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </>
    );
};

export default AvailableAppoinment;