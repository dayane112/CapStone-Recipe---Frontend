import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findOneRecipe, updateRecipe } from "../utilities/controller.mjs";
import FetchOneRecipe from './OneRecipe/FetchOneRecipe';
import '../styles/EditRecipe.css'

function EditPage() {
    const nav = useNavigate();
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState(null);
    const [saved, setSaved] = useState(false);

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
    }

    function handleDirectionChange(e, i) {
        const updateDirection = [...recipeData.direction];
        updateDirection[i] = e.target.value;
        setRecipeData({
            ...recipeData,
            direction: updateDirection,
        });
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
        try {
            // e.preventDefault()
            let res = await updateRecipe(id, recipeData)
            if (res && res._id) {
                setSaved(true);
                nav(`/allrecipe/${res._id}`);
            }
        } catch (err) {
            console.error(err);
        }
    }

    if (!recipeData) {
        return <h2>Loading</h2>;
    }

    if (saved) {
        return (
            <div>
                <FetchOneRecipe />
            </div>
        );
    }

    function handleCancel(e) {
        location.reload();
    }


    return (
        <>

            <form className='ditRecipe' onSubmit={handleSubmit}>
                <h1>Edit Recipe</h1>
                <label>
                    <p  className="spacing"><strong> Name:{' '}</strong></p>
                    <input style={{marginLeft: '250px'}} onChange={handleChange} value={recipeData.name} type='text' name='name' />
                </label>
                <br />
                <label>
                    <p  className="spacing"><strong>Category:{' '}</strong></p>
                    <input style={{marginLeft: '250px'}} onChange={handleChange} value={recipeData.category} type='text' name='category' />
                </label>
                <br />
                <label>
                    <p  className="spacing"><strong>Difficulty Level:{' '}</strong></p>
                    <input style={{marginLeft: '250px'}} onChange={handleChange} value={recipeData.level} type='text' name='level' />
                </label>
                <br />
                <label>
                    <p  className="spacing"><strong>Serving:{' '}</strong></p>
                    <input className='inputSection' onChange={handleChange} value={recipeData.serving} type='number' name='serving' />
                </label>
                <br />
                <label>
                    <p  className="spacing"><strong>Total Time:{' '}</strong></p>
                    <input style={{marginLeft: '250px'}} onChange={handleChange} value={recipeData.total} type='text' name='total' />
                </label>
                <br />

                <div className="form-group">
                    <label><p  className="spacing"><strong>Ingredients: {' '}</strong></p></label>
                    {recipeData.ingredient.length > 0 ? (
                        recipeData.ingredient.map((ingredient, i) => (
                            <div className="inputSpace" key={i}>
                                <input  type="text" value={ingredient} onChange={(e) => handleIngredientChange(e, i)} placeholder={`Ingredient ${i + 1}`} />{recipeData.ingredient.length > 1 && (
                                    <button type="button" onClick={() => removeIngredient(i)}>-</button>
                                )}
                            </div>
                        ))
                    ) : null}
                    <button type="button" onClick={addIngredient}>+</button>
                </div>
                <br />


                <div className="deleteGroup">
                    <label><p  className="spacing"><strong>Directions: {' '}</strong></p> </label>
                    {recipeData.direction.length > 0 ? (
                        recipeData.direction.map((direction, i) => (
                            <div key={i}>
                                <textarea className="listSpace" value={direction} onChange={(e) => handleDirectionChange(e, i)} placeholder={`Direction ${i + 1}`} /> {recipeData.direction.length > 1 && (
                                    <button type="button" onClick={() => removeDirection(i)}>-</button>
                                )}
                            </div>
                        ))
                    ) : null}
                    < button type="button" onClick={addDirection}>+</button>
                </div>

                <br />
                <button tupe="submit">Save</button>
                <button onClick={handleCancel}>Cancel</button>
                
            </form>

        </>
    )
}

export default EditPage;