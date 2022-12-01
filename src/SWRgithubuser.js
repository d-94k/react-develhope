import useSWR from "swr";

function useGithubswr (username) {
    const fetcher = url => fetch(url).then((r) => r.json());
    const { data, error } = useSWR (username !== null ? `https://api.github.com/users/${username}`: null, fetcher);
    return {
        data,
        error,
        loading: !data && !error
    }
}

const SWRgithubuser = ({ username }) => {
    const { data, error, loading } = useGithubswr (username);
    return (
        <>
            {loading && <h3>Loading...</h3>}
            {error && <h3>An error has occurred</h3>}   
            {!error && data && <h3>fetched Github user with id #{data.id}</h3>}
        </>
    );
}
 
export default SWRgithubuser;