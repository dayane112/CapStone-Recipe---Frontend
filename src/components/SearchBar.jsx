import { useState } from "react";

function SearchBar({setData}) {
    // const [searchInput, setSearchInput] = useState('');

    function handleChange(e) {       
        setData(e.target.value)
    }

    return (
        <>
            <input onChange={handleChange}type="text" name="search" placeholder="Search" />
        </>
    )
}

export default SearchBar;


 //    setData(e.target.value)
// setData((data) => ({
        //     ...data,
        //     [name]: value,
        // }));