import React from 'react';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex my-5  '>
            <div className='grid grid-cols-1  bg-primary w-40 h-96 rounded-3xl'>
                <h3 className='text-center'>Dashboard</h3>
                <Link to='myOrders' className='btn  btn-outline'>My Orders</Link>
                <Link to='myProfile' className='btn  btn-outline'>My Profile</Link>
                <Link to='addReview' className='btn  btn-outline'>Add a Review</Link>
            </div>
            <div>
                <h2 className='text-4xl text-center items-center'>Dashboard</h2>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;