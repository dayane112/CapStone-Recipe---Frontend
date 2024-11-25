import { useNavigate } from "react-router-dom";
import '../styles/AllRecipeStyle.css'
import FetchAllRecipe from "../components/allRecipe/FetchAllRecipe";

function AllRecipe() {

    const nav = useNavigate();

    function handleClick(e) {
        nav('/addrecipe')
    }

    function handleEditClick(e) {
        nav('/editrecipe')
    }

    function handleViewClick(e) {
        nav('/allrecipe/:id')
    }

    return (
        <>
            <button onClick={handleClick} className="addRecipe"> + Add Recipe</button>

            <h1>All Recipes</h1>

            <FetchAllRecipe />

        </>
    )
}

export default AllRecipe