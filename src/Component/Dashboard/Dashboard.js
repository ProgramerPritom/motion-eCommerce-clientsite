import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {


    const handleLogout = ()=>{
        signOut(auth)
    }
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
        <h2 className="text-2xl font-bold text-purple-500">Welcome to Your Dashboard</h2>
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">View Profile</label>
            <Outlet></Outlet>
        
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            
            <li><Link to='/dashboard/profile'>Profile</Link></li>
            <li><Link to='/dashboard/userProducts'>Your Products</Link></li>
            <li><button onClick={handleLogout} class="w-20 ml-4 btn btn-outline btn-secondary">Logout</button></li>
            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;