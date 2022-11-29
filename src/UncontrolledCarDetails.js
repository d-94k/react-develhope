import { useRef } from "react";

export const UncontrolledCarDetails = ({ initialData = {model: 'Model', year: '2022', color: 'White'}}) => {
    const _model = useRef ();
    const _year = useRef ();
    const _color = useRef ();

    const inputHandler = () => {
        console.log (
            {
                model: _model.current.value,
                year: _year.current.value,
                color: _color.current.value
            }
        )
    }

    const inputReset = () => {
        _model.current.value = '';
        _year.current.value = '';
        _color.current.value = '';
    }

    return (
            <>
                <input ref={_model} defaultValue={initialData.model} /> 
                <input ref={_year} defaultValue={initialData.year} />   
                <input ref={_color} defaultValue={initialData.color} />
                <button onClick={inputHandler}>Submit</button>
                <button onClick={inputReset}>Reset</button>
            </>
        )
}