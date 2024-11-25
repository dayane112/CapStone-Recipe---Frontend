import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipe } from "../../utilities/controller.mjs";
import defaultImage from "../../utilities/backgroundIMG.mjs";
import axios from "axios";

function FetchAllRecipe() {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");


    useEffect(() => {
        async function datafetching() {
            const recipe = await getRecipe();
            setData(recipe);           

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
                {data.map((recipe, i) => (
                    <div key={i} className="recipe">
                     {/* <img src={`http://localhost:3000/recipe/${recipe.image}`} alt={recipe.name} />    */}
                     <img src={recipe.image || defaultImage(recipe.category)} alt={recipe.image} />
                     
                       <Link to={`/allrecipe/${recipe._id}`}> <p>{recipe.name}</p></Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FetchAllRecipe;