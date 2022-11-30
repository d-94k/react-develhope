import { useMemo } from "react";

const FilteredList = () => {

    const list = [
        {
            id: 0,
            name: "A",
            age: 15
        },
        {
            id: 1,
            name: "B",
            age: 17
        },
        {
            id: 2,
            name: "C",
            age: 19
        }
    ];

    function filter (list) {
        let newList = list.filter (item => item.age > 18);
        return newList.map ((item, index) => <p key={index}>{item.name}</p>)
    };

    const result = useMemo (() => filter (list), [list]);

    return (
        <>
        <h2>Filtered list:</h2>
        <h3>{result}</h3>
        </>
    );
}
 
export default FilteredList;