import React from 'react';
import Staff from './Staff';
import people1 from '../../Assests/Banner/people1.png';
import people2 from '../../Assests/Banner/people1.png';
import people3 from '../../Assests/Banner/people1.png';

const Staffs = () => {

    const staffs = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, itaque quidem. Facilis omnis enim vel.',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, itaque quidem. Facilis omnis enim vel.',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, itaque quidem. Facilis omnis enim vel.',
            location: 'california',
            img: people3
        },
    ];

    return (
        <section class="text-gray-600 body-font px-12">
            <div class="container px-5 pb-24 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-xl text-secondary tracking-widest font-bold title-font mb-1">Staffs</h2>
                    <h1 className="md:text-3xl text-2xl font-bold title-font text-gray-900">Our General Staffs</h1>
                </div>
                <div class="flex flex-wrap">
                    {
                        staffs.map(staff => <Staff
                            key={staff._id}
                            staff={staff}
                        ></Staff>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Staffs;