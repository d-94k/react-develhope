import { useEffect, useState } from "react"

export const GithubUser = ({username}) => {

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
        } catch (e) {
            setError (error);
            setData (null);
        } finally {
            setLoading (false);
        }
    }

    return (
        <>
            <h1>Users API:</h1>
            {loading && <h3>Loading...</h3>}
            {error && <h1>There has been an error</h1>}
            <h3>Welcome, {data && data.login}</h3>
        </>
    )
}