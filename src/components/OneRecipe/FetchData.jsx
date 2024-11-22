import { useState, useEffect } from "react";
import axios from "axios";

function RecipeFetching() {

    const [data, setData] = useState(null);

    const url = 'http://localhost:3000/recipe';

    useEffect(() => {
        async function datafetching() {
           const res = await axios.get(url)
           setData(res.data)
        }
        
    }, [])

    return (
        <>
        
        </>
    )
}

export default RecipeFetching;