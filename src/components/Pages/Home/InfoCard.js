import React from 'react';

const InfoCard = ({ img, bgClass, cardTitle }) => {
    return (
        <div class="p-4 md:w-1/3">
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure><img className='mx-auto ml-6' src={img} alt="Album" /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;