import { useNavigate } from "react-router-dom";
import FetchAllRecipe from "../components/allRecipe/FetchAllRecipe";

function AllRecipe() {

    const nav = useNavigate();

    function handleClick(e) {
        nav('/addrecipe')
    }

    return (
        <>

            <h1 className="AllRecipe">All Recipes</h1>
            <div className="buttonContainer">
                <button onClick={handleClick} className="addRecipe"> + Add Recipe</button>
            </div>
            <FetchAllRecipe />

        </>
    )
}

export default AllRecipe;