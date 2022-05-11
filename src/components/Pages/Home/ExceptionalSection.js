import React from 'react';
import exceptionl from '../../Assests/Banner/eceptiona.jpg'
const ExceptionalSection = () => {
    return (
        <section class="text-gray-600 body-font px-12">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Exceptional Dental Care, on Your Terms</h1>
                    <p class="mb-8 leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-gradient-to-r from-secondary to-primary border-0 py-2 px-6 focus:outline-none rounded text-lg uppercase font-bold">Get Started</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={exceptionl} />
                </div>
            </div>
        </section>
    );
};

export default ExceptionalSection;