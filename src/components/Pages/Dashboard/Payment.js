import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L1mOcDu5yL5XYbRIfzSnxzy8K6KQulgGFGnhiK8lH9NuKQDlegFIpe3OtKnqPm9LDWqBZyBLHtf3zOjiyZk8LS400YKAsgncW');

const Payment = () => {
    const { id } = useParams();

    const { data: appointment, isLoading, error } = useQuery(['booking', id], () => fetch(`http://localhost:5000/booking/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) return <Spinner></Spinner>;

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='px-12 mx-auto pt-16'>
            <div className='grid grid-cols-2 gap-12'>
                <div class="card w-50 h-40 bg-base-100 shadow-xl mb-5">
                    <div class="card-body">
                        <p className='text-secondary font-bold text-xl'>Hello {appointment.patientName},</p>
                        <h4 className='text-md font-bold'>Your Appoinment on <span className='text-md font-bold text-secondary'> {appointment.date}</span></h4>
                        <p className='text-xl font-bold'>Pay <span className='text-xl font-bold text-secondary'>${appointment.price}</span></p>
                    </div>
                </div>
                <div class="card w-50 h-40 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm appointment={appointment}/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;