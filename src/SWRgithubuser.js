import useSWR from "swr";

const fetcher = url => fetch(url).then((r) => r.json());

const SWRgithubuser = ({ username }) => {
    const { data, error } = useSWR (`https://api.github.com/users/${username}`, fetcher);
    return (
        <>
            {!data && !error && <h3>Loading...</h3>}
            {error && <h3>An error has occurred</h3>}   
            {!error && data && <h3>fetched Github user with id #{data.id}</h3>}
        </>
    );
}
 
export default SWRgithubuser;