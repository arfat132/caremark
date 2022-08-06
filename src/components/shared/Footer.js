import React from 'react';
import { Link } from 'react-router-dom';
import { FiInbox, FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="text-white body-font bg-accent">
      <div className="container px-12 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to='' className="flex title-font font-bold items-center md:justify-start justify-center text-secondary">
            <span className="text-xl font-bold">CareMark</span>
          </Link>
          <p className="mt-2 text-sm mb-4 text-gray-400">Our Hospital has grown to provide a world class facilities for the clinically advanced restorative heart ralated treatments available.</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-8 justify-center sm:justify-start">
            <Link to='' className="text-secondary border border-secondary p-2">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to='' className="ml-3 text-secondary border border-secondary p-2">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to='' className="ml-3 text-secondary border border-secondary p-2">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link to='' className="ml-3 text-secondary border border-secondary p-2">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none">
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>Home</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>About Us</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>Our Team</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>How IT Works</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none">
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>Partners</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>Projects</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>FAQ's</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>Pricing Plans</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none">
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>Feedback</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>Policies</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"> <div className='w-2 h-2 bg-secondary'></div>Contact Us</Link>
              </li>
              <li className='mb-2'>
                <Link to='' className="text-gray-400 hover:text-secondary flex items-center gap-1"><div className='w-2 h-2 bg-secondary'></div>Blog</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">CONTACT</h2>
            <nav className="list-none">
              <div className='flex items-center gap-1 mb-2 text-gray-400 hover:text-secondary'>
                <HiOutlineLocationMarker className='text-secondary text-xl' />
                <h1>Jeddah, Saudi Arabia</h1>
              </div>
              <div className='flex items-center gap-1 mb-2 text-gray-400 hover:text-secondary'>
                <FiPhoneCall className='text-secondary text-xl'/>
                <h1>+966567319348</h1>
              </div>
              <div className='flex items-center gap-1 mb-2 text-gray-400 hover:text-secondary'>
                <HiOutlineMail className='text-secondary text-xl' />
                <h1>caremark@yahoo.com</h1>
              </div>
              <div className='flex items-center gap-1 mb-2 text-gray-400 hover:text-secondary'>
                <FiInbox className='text-secondary text-xl' />
                <h1>+966567319348</h1>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-accent border-t-2 border-t-gray-600">
        <div className="container mx-auto py-4 px-5 ">
          <p className="text-gray-600 text-center">© 2020 Tailblocks —
            <Link to='' href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;