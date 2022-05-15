import React from 'react';

const InfoCard = ({ img, bgClass, cardTitle }) => {
    return (
        <div className="p-4 md:w-1/3">
            <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure><img className='mx-auto ml-6' src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;