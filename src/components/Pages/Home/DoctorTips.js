import React from 'react';
import doctors from '../../Assests/Banner/Female-Doctor.png';
const DoctorTips = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center -mt-16">
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 pr-20 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-secondary">Tip From DR. Marium Rahman
                    </h1>
                    <h1 className='text-xl font-bold text-accent'>How to live a healthy lifestyle?</h1><br />
                    <p className="mb-8 leading-relaxed">Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.<br />

                        Dont just worry about the things you cannot help.<br />
                        Eat Healthy, work better, do gardening.<br />
                        Some relationships can kill you. Avoid them at the most.<br />
                        Focus on the good things that you like<br />
                        Eat Healthy, work better, do gardening.<br /><br />
                        Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Etiam sit amet orci eget eros faucibus.</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto lg:mr-16 mr-0">
                    <img className="object-cover object-center rounded" alt="hero" src={doctors} />

                </div>
            </div>
        </section>
    );
};

export default DoctorTips;