import { useNavigate } from "react-router-dom";
import NavBar from "../components/Nav";

function AllRecipe() {

    const nav = useNavigate();

    function handleClick(e) {
        nav('/addrecipe')
    }
    
    return (
        <>
            <NavBar />
            <button onClick={handleClick} className="addRecipe">Add Recipe</button>
            <h1>All Recipes</h1>;
        </>
    )
}

export default AllRecipe