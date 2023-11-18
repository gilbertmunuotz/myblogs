import React from 'react'
import { NavLink, } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/free-regular-svg-icons'
// import { faCircleHalfStroke } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
    return (
        <div className="navbar">
            <nav className='nav-wrapper bg-gray-900'>
                <div className="links text-right mr-12 space-x-4">
                    <NavLink className='active' to="/">Home</NavLink>
                    <NavLink to="/newBlog">New Blog</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <button type="button" className='rounded-3xl bg-slate-50'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg> */}
                        {/* <FontAwesomeIcon icon={ faCircleHalfStroke}></FontAwesomeIcon> */}
                    </button>
                </div>
            </nav >
        </div >
    )
}

export default Navbar