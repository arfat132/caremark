import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="navbar bg-base-100 fixed w-full z-10 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/appoinment'>Appoinment</Link></li>
                        <li><Link to='/about'>ABout</Link></li>
                        <li><Link to=''>Blogs</Link></li>
                        <li><Link to=''>Contact</Link></li>
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost normal-case text-2xl font-bold text-secondary ml-8">CareMark</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ml-60 font-bold uppercase">
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='/appoinment'>Appoinment</Link></li>
                    <li><Link to='/about'>ABout</Link></li>
                    <li><Link to=''>Blogs</Link></li>
                    <li><Link to=''>Contact</Link></li>
                    {user?.uid ?
                        <>
                            <Link to="/dashboard" className="mr-5 font-semibold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Dashboard</Link>
                            <Link to="/signIn" onClick={() => signOut(auth)} className="md:border-l md:border-gray-400 font-semibold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Sign Out
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>

                        </>
                        :
                        <Link to="/signIn" className="md:border-l md:border-gray-400 font-semibold uppercase inline-flex items-center bg-none border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Sign In
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;