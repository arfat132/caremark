import React from 'react';
import quote from '../../Assests/icons/quote.svg';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
const Review = ({ review }) => {
    const { name, img, location, reviews } = review;
    return (

        <div className="md:w-1/3 p-4 -mt-8">
            <div className="card w-full bg-base-100 shadow-xl mx-auto rounded-none">
                <div className="card-body">
                    <img className='w-24 mx-auto mb-3' src={quote} alt="" srcSet="" />
                    <p className='mb-6'>"{reviews}"</p>
                    <div className="card-actions">
                        <div className="avatar mx-auto">
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='' src={img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;