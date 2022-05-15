import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);

        // to close the modal
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-5 bg-gradient-to-r from-secondary to-primary border-none text-white">✕</label>
                    <h3 className="font-bold text-lg text-secondary mb-5">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={format(date, 'PPP')} disabled className="input input-bordered w-full mb-3" />
                        <select name="slot" className="select select-bordered w-full mb-3">
                            {
                                slots.map((slot, index )=> <option key= {index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mb-3" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mb-3" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mb-3" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full bg-gradient-to-r from-secondary to-primary text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;