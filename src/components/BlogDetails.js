import React from 'react'
import { useParams } from 'react-router-dom'
import UseCostomHook from './UseCostomHook'
import { useNavigate } from "react-router-dom";
import styles from './Stylish African American Woman.jpg'
import Footer from './Footer';


function BlogDetails() {

    const { id } = useParams()
    const url = 'http://localhost:8000/blogs/'
    const { blogs, error } = UseCostomHook(url + id)
    const navigate = useNavigate(); // Import and use the useNavigate hook

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
                    <div className="flex justify-evenly mx-4 mb-4">
                        <div className='mx-4'><img src={styles} alt="African Woman" /></div>
                        <div className='mx-4'><img src={styles} alt="African Woman" /></div>
                        <div className='mx-4'><img src={styles} alt="African Woman" /></div>
                    </div>
                    <div className='container font-serif px-2 first-letter:text-7xl'>{blogs.body}</div>
                    <button className=" bg-slate-900 text-white p-2 rounded hover:bg-red-600 ml-8 my-3" onClick={handleDelete}>Delete</button>
                </article>
            )}
            <Footer />
        </div>
    )
}

export default BlogDetails