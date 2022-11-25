import { useState } from "react";

export const useForm = () => {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const handleUsername = (event) => {
        setUsername (event.target.value);
    }

    const handlePassword = (event) => {
        setPassword (event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault ();
        console.log ({username: username, password: password});
    }

    return {
        username: username,
        password: password,
        setUsername: handleUsername,
        setPassword: handlePassword,
        submit: handleSubmit
    }
}


// Without Hooks:

// export const HookForm = () => {

//     const [username, setUsername] = useState ('');
//     const [password, setPassword] = useState ('');

//     const handleUsername = (event) => {
//         setUsername (event.target.value);
//     }

//     const handlePassword = (event) => {
//         setPassword (event.target.value);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault ();
//         console.log ({username: username, password: password})
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input name="username" type="text" value={username} onChange={handleUsername}/>
//                 <input name="password" type="password" value={password} onChange={handlePassword} />
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }