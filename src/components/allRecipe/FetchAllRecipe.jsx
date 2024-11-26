import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipe } from "../../utilities/controller.mjs";
import defaultImage from "../../utilities/backgroundIMG.mjs";
import '../../styles/FetchAllRecipeStyle.css'

function FetchAllRecipe() {

    const [data, setData] = useState(null);

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
            <div className="recipeContainer">
                {data.map((recipe, i) => (
                    <div key={i} className="recipe">
                            <div className="imageStyle">
                            <img src={recipe.image || defaultImage(recipe.category)} alt={recipe.image} />
                            </div>
                            <div className="imageTextStyle">
                            <Link to={`/allrecipe/${recipe._id}`}> <p>{recipe.name}</p></Link>
                            </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FetchAllRecipe;