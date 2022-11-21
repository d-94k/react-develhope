import React from "react";
import { LanguageContext } from "./LanguageContext";
import PlaceholderDiv from "./PlaceholderDiv";

export default class DisplayLanguage extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            language: 'en'
        }
    }

    handleLanguage = (event) => {
        this.setState ({
            language: event.target.value
        })
    }

    render () {
        return (
            <>
                <select value={this.state.language} onChange={this.handleLanguage}>
                    <option value="en">english</option>
                    <option value="it">italian</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <PlaceholderDiv />
                </LanguageContext.Provider>
            </>
        )
    }
}