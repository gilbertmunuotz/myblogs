import { useEffect, useState } from 'react'
import { AbortedDeferredError } from 'react-router-dom';

function UseCostomHook(url) {

    const [blogs, setBlogs] = useState(null)

    const [message, setMessage] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {

        const abort = new AbortController();

        setTimeout(() => {
            fetch(url)
                .then(Response => {
                    if (!Response.ok) {
                        throw Error('Failed to Fetch Data')
                    }
                    return Response.json()
                })
                .then(data => {
                    setBlogs(data)
                    setMessage(false)
                    setError(null)
                })
                .catch(error => {
                    if (error.name === AbortedDeferredError) {
                        console.log('Fetch Aborted');
                    } else {
                        setMessage(false)
                        setError(error.message)
                    }
                })
        }, 1000);

        return () => abort.abort();

    }, [url]);

    return { blogs, message, error }
}

export default UseCostomHook