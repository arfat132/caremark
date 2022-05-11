import React from 'react';
import Appoinment from './Appoinment';
import Carousel from './Carousel';
import ExceptionalSection from './ExceptionalSection';
import Info from './Info';
import ServiceSection from './ServiceSection';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <ServiceSection></ServiceSection>
            <ExceptionalSection></ExceptionalSection>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;