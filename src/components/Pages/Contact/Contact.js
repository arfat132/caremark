import React from 'react';
import Footer from '../../shared/Footer';
import Address from './Address';
import ContactUs from './ContactUs';

const Contact = () => {
    return (
        <div className='bg-gray-100'>
            <h1 className='py-36 font-bold text-3xl text-center'>Contact Us</h1>
            <Address></Address>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Contact;