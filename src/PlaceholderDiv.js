import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {text: "This text is in english"},
    it: {text: "Questo testo è in italiano"}
}

export default class PlaceholderDiv extends React.Component {
    render () {
        return (
            <LanguageContext.Consumer>
                {(language) => {
                    return <div><h1>{Strings[language].text}</h1></div>
                }}
            </LanguageContext.Consumer>
        )
    }
}