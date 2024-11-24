import { useState, useEffect } from "react";
import axios from "axios";

function FetchOneRecipe() {

    const [data, setData] = useState(null);

    const url = 'http://localhost:3000/recipe';

    useEffect(() => {
        async function datafetching() {
            const res = await axios.get(url)
            setData(res.data)

        }
        datafetching()
        // console.log(datafetching())

    }, [])

    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            
        </>
    )
}

export default FetchOneRecipe;