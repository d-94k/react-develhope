import { useRef } from "react";

export const UncontrolledCarDetails = ({ initialData = {model: 'Model', year: '2022', color: 'White'}}) => {
    const _form = useRef ();

    const formHandler = (event) => {
        const name = event.target.name;
        _form.current[name].value = event.target.value;
    }

    return (
                <form ref={_form} onChange={formHandler}>
                    <input name="model" defaultValue={initialData.model} /> 
                    <input name="year" defaultValue={initialData.year} />   
                    <input name="color" defaultValue={initialData.color} />
                </form>
        )
}