import React from 'react';
import { Link } from 'react-router-dom';

function MyblogsR({ blogs, title }) {
    return (
        <div className="MyblogsR mx-8 my-4">
            <h1 className="text-4xl font-serif">{title}</h1>
            {blogs.map((blog, index) => (
                <div key={index} className="wrapper hover:bg-slate cursor-pointer">
                    <Link to={`/blogs/${blog.id}`}>
                        <h1 className="text-center font-bold text-2xl">{blog.title}</h1>
                        <p className="body font-serif">{blog.body}</p>
                    </Link>
                </div>
            ))
            }
        </div >
    );
}

export default MyblogsR;
