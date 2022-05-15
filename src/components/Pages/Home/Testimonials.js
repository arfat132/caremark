import React from 'react';
import quote from '../../Assests/icons/quote.svg';
import people1 from '../../Assests/Banner/people1.png';
import people2 from '../../Assests/Banner/people1.png';
import people3 from '../../Assests/Banner/people1.png';
import Review from './Review';
import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "../Home/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const reviews = [
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
const Testimonials = () => {

    return (
        <section className="text-gray-600 body-font px-12 mb-40">
            <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                    <h2 className="text-xl text-secondary tracking-widest font-bold title-font mb-1">Testimonials</h2>
                    <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">What our Patiens Says</h1>
                </div>
                <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                    <img className='w-24  lg:w-48' src={quote} alt="" srcSet="" />
                </div>
            </div>
            <div className="flex flex-wrap text-center">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;