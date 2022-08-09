import React from 'react';
import AppoinmentSection from './AppoinmentSection';
import Carousel from './Carousel';
import Info from './Info';
import ServiceSection from './ServiceSection';
import Testimonials from './Testimonials';
import Footer from '../../shared/Footer';
import WhyChooseUs from './WhyChooseUs';
import Departments from './Departments';
import Doctors from './Doctors';
import Summary from './Summary';
import PricingPlan from './PricingPlan';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <WhyChooseUs></WhyChooseUs>
            <ServiceSection></ServiceSection>
            <PricingPlan></PricingPlan>
            <AppoinmentSection></AppoinmentSection>
            <Departments></Departments>
            <Doctors></Doctors>
            <Summary></Summary>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;