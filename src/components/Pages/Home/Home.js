import React from 'react';
import AppoinmentSection from './AppoinmentSection';
import Carousel from './Carousel';
import ContactUs from './ContactUs';
import DoctorTips from './DoctorTips';
import ExceptionalSection from './ExceptionalSection';
import Info from './Info';
import ServiceSection from './ServiceSection';
import Testimonials from './Testimonials';
import Footer from '../../shared/Footer';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <DoctorTips></DoctorTips>
            <ServiceSection></ServiceSection>
            <ExceptionalSection></ExceptionalSection>
            <AppoinmentSection></AppoinmentSection>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;