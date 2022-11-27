import { useState } from "react";

export default function useGithubUser () {

    const [data, setData] = useState (null);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState (null);

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
    
    return {
        data: data,
        loading: loading,
        error: error,
        onFetch: fetchGit
    }
}