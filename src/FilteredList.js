import { useMemo } from "react";

const FilteredList = ({list = [{id: 0, name: "A", age: 2}, {id: 1, name: "B", age: 20}]}) => {
    const filteredArr = useMemo (() => list.filter (item => item.age > 18), [list])
    return (
        <>
            <div>filtered prop item with the age of: {filteredArr.map ((item, index) => <p key={index}>{item.age}</p>)}</div>
        </>
    );
}
 
export default FilteredList;