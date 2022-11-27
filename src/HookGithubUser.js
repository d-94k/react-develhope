import useGithubUser from "./UseGithubUser";

export const HookGithubUser = ({username}) => {
    const { loading, error, data, onFetch } = useGithubUser ({username});
    const handleFetch = () => {
        onFetch (username);
    }
    return (
        <>
            <button onClick={handleFetch}>Load user data:</button>
            {loading && <h3>Loading...</h3>}
            {error && <h1>There has been an error</h1>}
            <h3>Welcome, {data && data.login}</h3>
            <p>Your id# is {data && data.id}</p>
        </>
    )
}