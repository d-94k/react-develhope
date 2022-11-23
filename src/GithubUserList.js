import { useState } from "react";
// import { GithubUser } from "./GithubUser";

export const GithubUserList = () => {
    const [data, setData] = useState ({
        username: '',
        items: []
    })

    const inputHandler = (event) => {
        setData ((data) => {
            return {
                username: event.target.value,
                items: []
            }
        })
    }

    const formSubmitter = (event) => {
        event.preventDefault ();
        setData ((data) => {
            return {
                username: '',
                items: ["miao"]
            }
        });
        console.log (data);
    }


    return (
        <div style={{backgroundColor: '#f3f3f3', border: '2px solid gray'}}>
            <form onSubmit={formSubmitter}>
                <h1>Users' List:</h1>
                <ul></ul>
                <input type="text" name="list" onChange={inputHandler} value={data.username} placeholder="enter a GitHub username to retrieve its id" />
                <button type="submit">Submit User</button>
            </form>
        </div>
    )
}