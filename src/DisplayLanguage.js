
import { useState } from "react";
import { PlaceholderDiv } from "./PlaceholderDiv";
import { LanguageContext } from "./LanguageContext";

export const DisplayLanguage = () => {
    const [language, setLanguage] = useState ('en');

    const handleLanguage = (event) => {
        setLanguage (event.target.value);
    }

    return (
        <>
            <select value={language} onChange={handleLanguage}>
                <option value="en">english</option>
                <option value="it">italian</option>
            </select>
            <LanguageContext.Provider value={language}>
                 <PlaceholderDiv />
            </LanguageContext.Provider>    
        </>
    )
}