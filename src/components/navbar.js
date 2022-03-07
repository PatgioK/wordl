import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './navbar.css';

export default function NavBar(props) {

    return (
        <div className='navbar'>
            <Link className='Link' to='/'>Home</Link>
            <Link className='Link' to='/userprofile'>User Profile</Link>
            <Link className='Link' to='/wordl'>Wordl</Link>

        </div>
    )
}
