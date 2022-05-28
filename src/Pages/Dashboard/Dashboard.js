import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUsers from '../../Hooks/useUsers';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [users] = useUsers();
    const [loggedInUser, setLoggedInUser] = useState({});


    useEffect(() => {
        setLoggedInUser(users.find(u => u.email === user.email));
    }, [users, user.email]);
    console.log(loggedInUser)
    return (
        <div className='flex sm:flex-cols-1 lg:grid-cols-2  '>
            <div className='grid grid-cols-1  bg-primary w-40 h-96 rounded-3xl'>
                <h3 className='text-center'>Dashboard</h3>
                <>{
                    loggedInUser?.role === 'admin' ?
                        <>
                            <Link to='users' className='btn  btn-outline'>Make Admin</Link>
                            <Link to='manageallorders' className='btn  btn-outline'>Manage All Orders</Link>
                            <Link to='addaproduct' className='btn  btn-outline'>Add A Product</Link>
                            <Link to='manageproduct' className='btn  btn-outline'>Manage Products</Link>

                        </>
                        :
                        <>
                            <Link to='myOrders' className='btn  btn-outline'>My Orders</Link>
                            <Link to='addReview' className='btn  btn-outline'>Add a Review</Link>
                        </>
                }
                </>
                <Link to='myProfile' className='btn  btn-outline'>My Profile</Link>


            </div>
            <div>
                <h2 className='text-4xl text-center items-center my-4'>Dashboard</h2>
                <Outlet />
            </div>
        </div >
    );
};

export default Dashboard;