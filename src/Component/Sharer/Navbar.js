import React from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from './LoadingSpinner';
import { CgProfile } from "react-icons/cg";
import './Navbar.css';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/home">Home</Link></li>
                    <li className='nav-name'><Link to='/products'>All Products</Link></li>
                    <li className='nav-name'><Link to='/about'>About</Link></li>
                    <li className='nav-name'><Link to='/contact'>Contact Us</Link></li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Motion V</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li className='nav-name'><Link to="/home">Home</Link></li>
                <li className='nav-name'><Link to='/products'>All Products</Link></li>
                <li className='nav-name'><Link to='/about'>About</Link></li>
                <li className='nav-name'><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
            <div>
                {
                    user ? <ul className="manu menu-horizontal px-2">
                        <li className="px-4 text-3xl cursor-pointer mt-2"><Link to='/dashboard'><CgProfile></CgProfile></Link></li>
                    </ul> :
                    <ul className="manu menu-horizontal px-2">
                    <li className='px-4'><Link to='/login'>Login</Link></li>
                    <li>|</li>
                    <li className='px-4'><Link to='/signup'>SignUp</Link></li>
                </ul>
                }
            </div>
            <div for="Cart-drawer" className="text-2xl px-4 ">
            <label for="Cart-drawer" className="cursor-pointer"><GrCart></GrCart></label>
            </div>
            
            </div>
            </div>
    );
};

export default Navbar;