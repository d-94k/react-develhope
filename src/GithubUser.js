import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const GithubUser = () => {
    const { username } = useParams ();
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
            {loading && <h3>Loading...</h3>}
            {error && <h1>There has been an error</h1>}
            <p>The id number for the last GitHub user you selected from the above list is <strong>{data && data.id}</strong></p>
        </>
    )
}