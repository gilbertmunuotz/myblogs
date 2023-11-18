import Footer from './Footer'
import MyblogsR from './MyblogsR'
import UseCostomHook from './UseCostomHook'

function Home() {
    const url = 'http://localhost:8000/blogs'
    const { blogs, message, error } = UseCostomHook(url)

    return (
        <div className='home'>
            {error && <div className='mx-8'>{error}</div>}
            {message && <div className='mx-8'>Loading...</div>}
            {blogs && <MyblogsR blogs={blogs} title='Welcome' />}
            <Footer />
        </div>
    )
}

export default Home