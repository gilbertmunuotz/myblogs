import React from 'react'
import { NavLink, } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-fixed">
            <nav className='nav-wrapper bg-gray-900'>
                <div className="links text-right mr-12 space-x-4">
                    <NavLink className='active' to="/">Home</NavLink>
                    <NavLink to="/newBlog">New Blog</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </nav >
        </div >
    )
}

export default Navbar