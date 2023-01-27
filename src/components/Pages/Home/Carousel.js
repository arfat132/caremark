import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import image from "../../Assests/Banner/slider-1.jpg";
import image1 from "../../Assests/Banner/slider-2.jpg";
import image2 from "../../Assests/Banner/slider-3.jpg"
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
                <SwiperSlide>
                <img src={image} alt="slider-1" border="0"/>
                </SwiperSlide>
                <SwiperSlide><img src={image1} alt="slider-1" border="0"/>
                </SwiperSlide>
                <SwiperSlide><img src={image2} alt="slider-1" border="0"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;