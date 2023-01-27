import React from 'react';
import Footer from '../../shared/Footer';
import Hero from './Hero';
import MissionVission from './MissionVission';
import Staffs from './Staffs';

const About = () => {
    return (
        <div className='bg-gray-100'>
            <Hero></Hero>
            <MissionVission></MissionVission>
            <Staffs></Staffs>
            <Footer></Footer>
        </div>
    );
};

export default About;