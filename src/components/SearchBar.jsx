function SearchBar({data, setData}) {

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <input onChange={handleChange} type="text" name="name" placeholder="Search"/>
        </>
    )
}

export default SearchBar;