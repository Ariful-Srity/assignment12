import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        <li><Link to='/myportfolio'>My Portfolio</Link></li>

        <li><Link to='about'>About</Link></li>




        <li>

            {!user && <Link eventKey={2} to="register">
                Register
            </Link>}
        </li>
        <li>{user ?

            <button className="btn btn-ghost" onClick={logout} >Log Out</button> : <Link to="/login">Login</Link>



        }</li>

        {



            user && <div>
                <span>{user.displayName}</span>

                <div class="dropdown dropdown-hover">
                    <label tabindex="0" class="btn m-1">Dashboard</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-warning rounded-box w-52">
                        <li><Link to='/myorders'>My Orders</Link></li>
                        <li><Link to='/addreview'>Add A Review</Link></li>
                        <li><Link to='/myprofile'>My Profile</Link></li>
                    </ul>
                </div>

            </div>
        }










    </>


    return (
        <div className="navbar bg-base-500">
            <div className="navbar-start">
                <div className="dropdown bg-primary">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-warning rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className=" normal-case text-3xl text-bold text-primary">Ontors Manufactures</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItems
                    }
                </ul>
            </div>

        </div>
    );
};

export default Header;