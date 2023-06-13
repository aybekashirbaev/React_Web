import React from 'react';
import './Navbar.scss';
import { Link, Outlet } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
        <div className='navigation'>
            <div className="logo">React_WebSite</div>
            <ul className="nav">
                <li>
                    <i class="fa-solid fa-house"></i>
                    <Link to='/' className='link'> Home</Link>
                </li>
                <li>
                    <i class="fa-solid fa-circle-info"></i>
                    <Link to='/about' className='link'> About</Link>
                </li>
                <li>
                    <i class="fa-solid fa-server"></i>
                    <Link to='/services' className='link'> Services</Link>
                </li>
                <li>
                    <i class="fa-solid fa-address-book"></i>
                    <Link to='/contact' className='link'> Contact</Link>
                </li>
            </ul>
        </div>
        <Outlet/>
        </>
        

    );
};

export default Navbar;