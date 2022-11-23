import React, { useState } from "react";
import { GithubUserP } from "./GithubUserP";

export default function GithubUserList () {

    const [data, setData] = useState ({
        text: '',
        items: []
    })

    function formHandler (event) {
        setData ((data) => {
            return {
                text: event.target.value,
                items: [...data.items]
            }
        })
    }

    const formLog = (event) => {
        event.preventDefault ();
        setData ((data) => {
            return {
                text: '',
                items: [...data.items, data.text]
            }
        })
    }

    return (
        <>
            <h3>Login form in a function component:</h3>
            <form onSubmit={formLog}>
                <input name="username" type="text" value={data.text} onChange={formHandler} placeholder="username"/>
                <button type="submit">Submit</button>
            </form>
            <ul>{data.items.map((item, index) => <li key={index}>Github user with id# <b><GithubUserP username={item} /></b></li>)}</ul>
        </>
    )
}