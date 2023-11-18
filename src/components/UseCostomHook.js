import { useEffect, useState } from 'react';
import { AbortedDeferredError } from 'react-router-dom';

function UseCustomHook(url) {

    const [blogs, setBlogs] = useState(null);

    const [message, setMessage] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        const abort = new AbortController();

        fetch(url, {
            signal: abort.signal,
        })
            .then(Response => {
                if (!Response.ok) {
                    throw Error('Failed to Fetch Data');
                }
                return Response.json();
            })
            .then(data => {
                setBlogs(data);
                setMessage(false);
                setError(null);
            })
            .catch(error => {
                if (error.name === AbortedDeferredError) {
                    console.log('Fetch Aborted');
                } else {
                    setMessage(false);
                    setError(error.message);
                }
            });

        return () => abort.abort();

    }, [url]);

    return { blogs, message, error };
}

export default UseCustomHook;
