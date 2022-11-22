import React, { useState } from "react";

export default function Login () {

    const [data, setData] = useState ({
        username: '',
        password: '',
        remember: false
    })

    function formHandler (event) {
        const { name, type, value, checked } = event.target;
        setData ((data) => {
            return {
                ...data,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    const formLog = (event) => {
        event.preventDefault ();
        console.log (data);
    }

    const formReset = (event) => {
        event.preventDefault ();
        setData({
            username: '',
            password: '',
            remember: false
        })
    }

    return (
        <>
            <h3>Login form in a function component:</h3>
            <form onSubmit={formLog}>
                <input name="username" type="text" value={data.username} onChange={formHandler} placeholder="username"/>
                <input name="password" type="password" value={data.password} onChange={formHandler} placeholder="password" />
                <input name="remember" type="checkbox" checked={data.remember} onChange={formHandler} />
                <button type="submit" disabled={data.username !== '' && data.password !== '' ? false : true}>Submit</button>
                <button onClick={formReset}>Reset</button>
            </form>
        </>
    )
}
