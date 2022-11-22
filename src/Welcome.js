import React from "react";
import Age from "./Age";

export default function Welcome (props) {
    return (
            <div className="welcome">
                <p>Welcome, {props.name ? props.name : "guest"}!</p>
                {props.age > 18 ? <Age age={props.age} /> : 'You are very young!'}
            </div>
        )
}