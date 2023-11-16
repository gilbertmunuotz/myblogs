import React from 'react'
import { useParams } from 'react-router-dom'
import UseCostomHook from './UseCostomHook'
import styles from './Stylish African American Woman.jpg'

function BlogDetails() {

    const { id } = useParams()
    const url = 'http://localhost:8000/blogs/'
    const { blogs, error } = UseCostomHook(url + id)

    return (
        <div className='BlogDetails'>
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h1 className='text-4xl ml-6'>{blogs.title}</h1>
                    <p className='font-bold ml-8'>Written By: {blogs.author}</p>
                    <div className="flex justify-evenly mx-4">
                        <div className='mx-4'><img src={styles} alt="African Woman" /></div>
                        <div className='mx-4'><img src={styles} alt="African Woman" /></div>
                        <div className='mx-4'><img src={styles} alt="African Woman" /></div>
                    </div>
                    <div className='container font-serif'>{blogs.body}</div>
                </article>
            )}
        </div>
    )
}

export default BlogDetails