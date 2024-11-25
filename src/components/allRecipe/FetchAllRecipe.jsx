import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FetchAllRecipe() {

    const [data, setData] = useState(null);

    const url = 'http://localhost:3000/recipe';

    useEffect(() => {
        async function datafetching() {
            const res = await axios.get(url)
            setData(res.data)
            // console.log(res.data)
            

        }
        datafetching()
        // console.log(datafetching())

    }, [])

    if (data === null) {
        return <div>Loading</div>;
    }


    return (
        <>
            <div>
                {data.map((recipe, index) => (
                    <div key={index} className="recipe">
                     <img src={`http://localhost:3000/recipe/${recipe.image}`} alt={recipe.name} />   
                     {/* {recipe.image} */}
                       <Link to={`/allrecipe/${res._id}`}> <p>{recipe.name}</p></Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FetchAllRecipe;