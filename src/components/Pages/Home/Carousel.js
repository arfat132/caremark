import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Carousel = () => {
    return (
        <div className="pt-12">
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div class="hero h-[500px]  lg:h-[800px] bg-[url(https://wallpaperaccess.com/full/5182840.jpg)]">
                    <div class="hero-overlay bg-opacity-0"></div>
                    <div class="hero-content text-left text-neutral-content sm:ml-0 lg:ml-[-800px] lg:w-[700px] md:w-[700px]">
                        <div class="-z-50">
                            <h1 class="mb-5 text-2xl lg:text-5xl font-bold font-mono text-secondary">Enjoy delicious foods <br />with Starbelly</h1>
                            <p class="mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat culpa itaque consequatur accusamus enim perspiciatis maxime numquam doloribus.</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div class="hero h-[500px]  lg:h-[800px] bg-[url(https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg)]">
                    <div class="hero-overlay bg-opacity-0"></div>
                    <div class="hero-content text-right text-neutral-content sm:ml-0 lg:mr-[-800px] lg:w-[700px] md:w-[700px]">
                        <div class="-z-50">
                            <h1 class="mb-5 text-2xl lg:text-5xl font-bold font-mono text-secondary">Enjoy delicious foods <br />with Starbelly</h1>
                            <p class="mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat culpa itaque consequatur accusamus enim perspiciatis maxime numquam doloribus.</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div class="hero h-[500px]  lg:h-[800px] bg-[url(https://www.theindianwire.com/wp-content/uploads/2019/12/FMGE-Students-qualify-The-Indian-Wire.jpg)]">
                    <div class="hero-overlay bg-opacity-0"></div>
                    <div class="hero-content text-left text-neutral-content sm:ml-0 lg:ml-[-800px] lg:w-[700px] md:w-[700px]">
                        <div class="-z-50">
                            <h1 class="mb-5 text-2xl lg:text-5xl font-bold font-mono text-secondary">Enjoy delicious foods <br />with Starbelly</h1>
                            <p class="mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat culpa itaque consequatur accusamus enim perspiciatis maxime numquam doloribus.</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;