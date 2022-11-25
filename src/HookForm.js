import { useForm } from "./UseForm";

export const HookForm = () => {
    const { username, password, setUsername, setPassword, submit } = useForm ();

    return (
        <>
            <form onSubmit={submit}>
                <input name="username" type="text" value={username} onChange={setUsername}/>
                <input name="password" type="password" value={password} onChange={setPassword} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}