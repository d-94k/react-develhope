import { useEffect, useState } from "react";

export const GithubUserP = ({ username }) => {
    const [data, setData] = useState (null);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState (null);
    useEffect (() => {
        fetchGit (username)
    }, [username])

    async function fetchGit (username) {
        try {
            setLoading (true);
            setError (null);
            const response = await fetch (`https://api.github.com/users/${username}`);
            const json = await response.json ();
            setData (json);
        } catch (error) {
            setError (error);
            setData (null);
        } finally {
            setLoading (false);
        }
    }

    return (
        <>
            
            {loading && <p>Loading...</p>}
            {error && <p>There has been an error</p>}
            <p>{data && data.id}</p>
        </>
    )
}