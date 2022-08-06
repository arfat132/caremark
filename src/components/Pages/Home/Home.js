import React from 'react';
import AppoinmentSection from './AppoinmentSection';
import Carousel from './Carousel';
import DoctorTips from './DoctorTips';
import ExceptionalSection from './ExceptionalSection';
import Info from './Info';
import ServiceSection from './ServiceSection';
import Testimonials from './Testimonials';
import Footer from '../../shared/Footer';
import About from '../About';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <About></About>
            <DoctorTips></DoctorTips>
            <ServiceSection></ServiceSection>
            <ExceptionalSection></ExceptionalSection>
            <AppoinmentSection></AppoinmentSection>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;