import React from 'react';
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-area'>

            <footer className="footer-text text-white footer text-base-content">
            <div className='text-white'>
                <span className="footer-title">Motion View</span> 
                <p className='text-white'>Address: Hatirpoo1, Dhaka 1205</p>
                <p className='text-white'>Phone: 01925-460460</p>
                <p className='text-white'>Email: motionview20@gmail.com</p>
                <div className="text-xl p-4 grid grid-flow-col gap-4">
                <div><FaFacebookF></FaFacebookF></div>
                <div><FaLinkedin></FaLinkedin></div>
                <div><FaYoutube></FaYoutube></div>
                
                
                </div>
                
            </div> 
            <div className='text-white'>
                <span className="footer-title">Company</span> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Jobs</a> 
                <a className="link link-hover">Press kit</a>
            </div> 
            <div className='text-white'>
                <span className="footer-title">Join Our Newsletter Now</span> 
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <div id='footer-search' className="form-control">
                    <label className="input-group ">
                        <input type="text"  placeholder="Enter your Email" className="input input-bordered text-black" />
                        <span className='subcribe cursor-pointer font-bold'>SUBSCRIBE</span>
                    </label>
                    </div>
            </div>
            
            </footer>



            <div className="text-center text-white">
                <span>Copyrights &copy;2022 All rights reserved | Motion View</span>
            </div>
        </div>
        
    );
};

export default Footer;