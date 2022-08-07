import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Doctor from './Doctor';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [doctors])

    return (
        <section class="bg-gray-100 lg:px-12">
            <div class="container px-5 pb-24 mx-auto">
                <div className="text-center mb-12">
                    <h3 className='text-secondary font-bold text-xl mb-3'>Our Doctors</h3>
                    <h1 className="sm:text-3xl text-2xl title-font text-accent font-bold">Meet With Our Specialist Expert Doctors</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    {
                        doctors.slice(0, 5).map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }

                </div>
                <button onClick={()=>navigate('/doctors')} className='px-3 py-2 border border-secondary font-bold uppercase text-secondary float-right mt-10'>View All Doctors</button>
            </div>
        </section>
    );
};

export default Doctors;