import React from 'react';

const About = () => {
    return (
        <section class="text-gray-600 body-font  px-12">
            <div class="container px-5 py-32 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div class="w-full sm:p-4 px-4 mb-6">
                        <h1 class="title-font font-bold text-2xl mb-2 text-secondary">CareMark Medical Group</h1>
                        <div class="leading-relaxed">CareMark is a healthcare organization that is well known for quality and affordable healthcare. We own and operate a hospital in Riyadh and other parts of Saudi Arabia, including Madina, along with a chain of medical centers, pharmacies, and optical outlets across major cities in the country. Established in Sharafiyah, Jeddah, in 1999, we cater to the healthcare needs of nearly 4 million patients every year. We are keen on providing patient care of exceptional standards through a top hospital in Saudi Arabia and medical centers featuring advanced medical technology and modernized caregiving methods. We have the best hospitals in Jeddah and other parts of Saudi Arabia. With the best hospital in Makkah and a well-established hospital in Ha’il and other parts of the country, we plan to expand our quality healthcare services by aligning them with the Saudi Vision 2030 project. Already established with the best hospital in Dammam and other cities, our plan going forward contains new hospitals in Riyadh and Jeddah with the latest medical advancements that will stand on par with international facilities.</div>
                    </div>
                </div>
                <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img class="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                </div>
            </div>
        </section>
    );
};

export default About;