import { useState, useEffect } from 'react';
import { deleteRecipe, findOneRecipe } from "../utilities/controller.mjs";
import { useNavigate, useParams } from 'react-router-dom';

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

      
    
      function handleCancel (e){
        nav(`/allrecipe/${recipe._id}`);
      }

    if (!recipe) {
        return <h2>Loading</h2>;
    }
   

    return (
        <>
        <h2>Are you sure you want to delete your recipe?</h2>

            <button onClick={handleDelete}>Delete Recipe</button>
            <button onClick={handleCancel}>Cancel</button>
        </>
    )
}

export default DeleteRecipe;