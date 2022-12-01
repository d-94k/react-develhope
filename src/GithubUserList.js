import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { GithubUserP } from "./GithubUserP";

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
            <h3>Enter a valid GitHub username to check their id number:</h3>
            <form onSubmit={formLog}>
                <input name="username" type="text" value={data.text} onChange={formHandler} placeholder="username"/>
                <button type="submit">Submit</button>
            </form>
            <ul>{data.items.map((item, index) => <li key={index}><Link to={item}>Click here to check the #id of the user you entered ({item})</Link></li>)}</ul>
            <Outlet />
        </>
    )
}

// <ul>{data.items.map((item, index) =><li key={index}><Link to=`:${item}`>{item}</Link></li>)}</ul>


//<ul>{data.items.map((item, index) => <li key={index}>Github user with id# <b><GithubUserP username={item} /></b></li>)}</ul>