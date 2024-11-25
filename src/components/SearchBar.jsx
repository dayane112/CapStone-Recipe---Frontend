function SearchBar({data, setData}) {


    function handleChange(e) {
       setData(e.target.value)
       
        // const { name, value } = e.target;
        // setData((data) => ({
        //     ...data,
        //     [name]: value,
        // }));
    }

    return (
        <>
            <input onChange={handleChange} type="text" name="search" value={setData} placeholder="Search" />
        </>
    )
}

export default SearchBar;