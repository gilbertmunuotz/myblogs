import React from 'react'

function Navbar() {
    return (
        <div className="navbar-fixed">
            <nav className='nav-wrapper bg-gray-900'>
                <div className="links text-right mr-4 space-x-4">
                    <a className='active' href="/">Home</a>
                    <a href="/newBlog">New Blog</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar