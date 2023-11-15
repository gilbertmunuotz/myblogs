import MyblogsR from './MyblogsR'
import UseCostomHook from './UseCostomHook'

function Home() {
    const url = 'http://localhost:8000/blogs'
    const { blogs, message, error } = UseCostomHook(url)

    return (
        <div className='home mx-8'>
            {error && <div>{error}</div>}
            {message && <div>Loading...</div>}
            {blogs && <MyblogsR blogs={blogs} title='Welcome' />}
        </div>
    )
}

export default Home