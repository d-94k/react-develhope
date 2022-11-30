import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {text: "This text is in english"},
    it: {text: "Questo testo è in italiano"}
}

export const PlaceholderDiv = () => {
    const language = useContext (LanguageContext);
    return (
        <div><h1>{Strings[language].text}</h1></div>
    )
}