import React from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from './LoadingSpinner';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/home">Home</Link></li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                <li><Link to="/home">Home</Link></li>
                <li><Link to='/products'>All Products</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
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
            <div for="Cart-drawer" class="text-2xl px-4 ">
            <label for="Cart-drawer" class="cursor-pointer"><GrCart></GrCart></label>
            </div>
            
            </div>
            </div>
    );
};

export default Navbar;