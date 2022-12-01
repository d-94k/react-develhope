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
            <h1>Edit website path above to see your Github UserID</h1>
            <p>example: localhost:3000/d-94k</p>
            {loading && <h3>Loading...</h3>}
            {error && <h1>There has been an error</h1>}
            <h3>Welcome, {data && data.id}</h3>
        </>
    )
}