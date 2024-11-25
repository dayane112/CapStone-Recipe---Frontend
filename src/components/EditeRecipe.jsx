import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findOneRecipe, updateRecipe } from "../utilities/controller.mjs";

function EditPage() {
    const nav = useNavigate();
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        async function getRecipe() {
          let reciepe = await findOneRecipe(id);
          
          setRecipeData(reciepe);
        }
    
        getRecipe();
      }, [id]);

      function handleChange(e) {
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value,
          });
      }

      function handleIngredientChange(e, i) {
        const updateIngredient = [...recipeData.ingredient];
        updateIngredient[i] = e.target.value;
        setRecipeData({
            ...recipeData,
            ingredient: updateIngredient,
        });

        function handleDirectionChange(e, i) {
            const updateDirection = [...recipeData.direction];
            updateDirection[i] = e.target.value;
            setRecipeData({
                ...recipeData,
                direction: updateDirection,
            });
        }
    }
    
      async function handleSubmit(e) {
        try {
          e.preventDefault();
          let res = await updateRecipe(id, recipeData);
          nav(`/allrecipe/${res._id}`);
        } catch (err) {
          console.error(err);
        }
      }

      function addIngredient() {
        setRecipeData({
            ...recipeData,
            ingredient: [...recipeData.ingredient, '']
        });
    };

    function removeIngredient(Removei) {
        setRecipeData({
            ...recipeData,
            ingredient: recipeData.ingredient.filter((ingredient, i) => i !== Removei)
        });
    };

    function addDirection() {
        setRecipeData({
            ...recipeData,
            direction: [...recipeData.direction, '']
        });
    };

    function removeDirection(Removei) {
        setRecipeData({
            ...recipeData,
            direction: recipeData.direction.filter((direction, i) => i !== Removei)
        });
    };

    async function handleSubmit(e) {
        e.preventDefault()
        let res = await updateRecipe(id, recipeData)
        nav(`/allrecipe/${res._id}`);
    }
    

    return (
        <>
            
        <form onSubmit={handleSubmit}>
          <label>
            Name:{' '}
            <input onChange={handleChange} value={recipeData.name} type='text' name='name' />
          </label>
          <br />
          <label>
          Category:{' '}
            <input onChange={handleChange} value={recipeData.category} type='text' name='category' />
          </label>
          <br />
          <label>
          Difficulty Level:{' '}
            <input onChange={handleChange} value={recipeData.difficulty} type='text' name='difficulty' />
          </label>
          <br />
          <label>
          Serving:{' '}
            <input onChange={handleChange} value={recipeData.serving} type='number' name='serving' />
          </label>
          <br />
          <label>
          Total Time:{' '}
            <input onChange={handleChange} value={recipeData.total} type='text' name='total' />
          </label>
          <br />
          
          <label>
          Ingredients:{' '}
          <label></label>
            <input
              onChange={handleChange} value={recipeData.ingredient} type='text' name='ingredient' />
          </label>
          <br />
          
    
          Directions:{' '}
            <input onChange={handleChange}
              value={recipeData.direction} type='text' name='direction' />
 
          <br />
          <button tupe="submit">Save</button>
        </form>
      
        </>
    )
}

export default EditPage;