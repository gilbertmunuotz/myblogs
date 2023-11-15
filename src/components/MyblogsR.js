import React from 'react';

function MyblogsR({ blogs, title }) {
    return (
        <div className="MyblogsR">
            <h1 className="text-4xl font-serif">{title}</h1>
            {blogs.map((blog, index) => (
                <div key={index} className="wrapper hover:bg-slate cursor-pointer">
                    <h1 className="text-center font-bold text-2xl">{blog.title}</h1>
                    <p className="body font-serif">{blog.body}</p>
                </div>
            ))}
        </div>
    );
}

export default MyblogsR;
