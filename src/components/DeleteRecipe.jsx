import { useState, useEffect } from 'react';
import { deleteRecipe, findOneRecipe } from "../utilities/controller.mjs";
import { useNavigate, useParams } from 'react-router-dom';
import FetchOneRecipe from './OneRecipe/FetchOneRecipe';
import '../styles/DeleteRecipe.css'

function DeleteRecipe() {
    const nav = useNavigate()
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            const data = await findOneRecipe(id);
            setRecipe(data);
        }

        if (id) {
            fetchRecipe();
        }
    }, [id]);

    async function handleDelete() {
        const res = await deleteRecipe(id);

        nav('/allrecipe');

    }



    function handleCancel(e) {
        location.reload();
        // if (recipe && recipe._id) {
        //     nav(`/allrecipe/${recipe._id}`);
        // }
    }

    if (!recipe) {
        return <h2>Loading</h2>;
    }


    return (
        <>
            <FetchOneRecipe />
            <h2>Are you sure you want to delete {recipe.name} recipe?</h2>
            <div className='btn'>
                <button onClick={handleDelete}>Delete Recipe</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </>
    )
}

export default DeleteRecipe;