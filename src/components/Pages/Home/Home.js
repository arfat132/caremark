import React from 'react';
import AppoinmentSection from './AppoinmentSection';
import Carousel from './Carousel';
import Info from './Info';
import ServiceSection from './ServiceSection';
import Testimonials from './Testimonials';
import Footer from '../../shared/Footer';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <WhyChooseUs></WhyChooseUs>
            <ServiceSection></ServiceSection>
            <AppoinmentSection></AppoinmentSection>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;