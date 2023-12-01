import React from 'react'
import Footer from './Footer';
import { motion } from "framer-motion";
import UseCostomHook from './UseCostomHook'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function BlogDetails() {

    const { id } = useParams()
    const url = 'http://localhost:8000/blogs/'
    const { blogs, error } = UseCostomHook(url + id)
    const navigate = useNavigate(); // Import and use the useNavigate hook

    const myvariants = {
        hover: {
            scale: 1.1,
            transition: {
                yoyo: Infinity
            }
        }
    }


    function handleDelete() {
        fetch(url + id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/'); // Navigate to the home page after deleting the blog
        });
    }

    return (
        <div className='BlogDetails'>
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h1 className='text-4xl ml-6'>{blogs.title}</h1>
                    <p className='font-bold ml-8'>Written By: {blogs.author}</p>
                    <div className='container font-serif px-2 first-letter:text-7xl'>{blogs.body}</div>
                    <motion.button className=" bg-slate-900 text-white p-2 rounded hover:bg-red-600 ml-8 my-3" variants={myvariants} whileHover="hover" onClick={handleDelete}>Delete</motion.button>

                </article>
            )}
            <Footer />
        </div>
    )
}

export default BlogDetails