import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NewBlog() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const navigate = useNavigate()
    const whenSubmit = (e) => {
        e.preventDefault();
        const myData = { title, body, author }
        const url = 'http://localhost:8000/blogs'
        fetch(url,
            {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(myData),
            }).then(() => {
                console.log('New Blog Added');
                navigate('/')
            })
    }
    return (
        <div className="container">
            <motion.h1 className='font-bold text-3xl text-center mt-8'
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}>Add New Blog</motion.h1>
            <div className="flex items-center justify-center p-4 mt-2">
                <form className="mt-4" onSubmit={whenSubmit}>
                    <label className="block" htmlFor="title">Title:</label>
                    <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-auto p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    />
                    <label className="block" htmlFor="body">Body:</label>
                    <input
                        required
                        type="text"
                        id="body"
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="w-auto p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    />
                    <label className="block" htmlFor="author">Author:</label>
                    <input
                        required
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-auto p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                    />
                    <motion.button type="submit" className="bg-slate-900 text-white p-2 rounded hover:bg-green-700"
                        whileHover={{ scale: 1.1 }}
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}>Submit
                    </motion.button>
                </form>
            </div>
        </div >
    );
}


export default NewBlog;
