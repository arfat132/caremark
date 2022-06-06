import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Firebase/firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;

    const [user] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot, price);

        const formattedDate = format(date, 'PPP');

        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: formattedDate,
            slot,
            price,
            patientEmail: user.email,
            patientName: event.target.name.value,
            phone:event.target.phone.value
        }
        // to close the modal
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    alert(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else{
                    alert(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null);
                
            });
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
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="number" name="price" disabled value={price} className="input input-bordered w-full mb-3" />
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full mb-3" />
                        <input type="text" name="email" disabled value={user?.email || ''} className="input input-bordered w-full mb-3" />
                        <input type="text"  name="phone" placeholder="Phone Number" className="input input-bordered w-full mb-3" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full bg-gradient-to-r from-secondary to-primary text-white" />
                        <ToastContainer></ToastContainer>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;