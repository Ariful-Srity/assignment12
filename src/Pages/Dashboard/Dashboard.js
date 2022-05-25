import React from 'react';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='side-navbar'>
                <h3>Dashboard</h3>
                <Link to='myOrders'>My Orders</Link>
                <Link to='myProfile'>My Profile</Link>
                <Link to='addReview'>Add a Review</Link>
            </div>
            <div>
                <h2 className='text-4xl'>Dashboard</h2>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;