import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipe } from '../utilities/controller.mjs';
import '../styles/recipeStyle.css'

function CreateRecipe() {
    const nav = useNavigate();

    const [recipeData, setRecipeData] = useState({
        name: '',
        category: '',
        level: '',
        serving: '',
        total: '',
        ingredient: [''],
        direction: [''],
    });
    const [recipeId, setRecipeId] = useState(null)


    const handleCategoryChange = (category) => {
        setRecipeData({
            ...recipeData,
            category: category
        });
    }

    function handleChange(e) {
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value
        });
    }

    function handleIngredientChange(e, i) {
        const newIngredient = [...recipeData.ingredient]
        newIngredient[i] = e.target.value;
        setRecipeData({
            ...recipeData,
            ingredient: newIngredient
        })
    };

    function handleDirectionChange(e, i) {
        const newDirection = [...recipeData.direction]
        newDirection[i] = e.target.value;
        setRecipeData({
            ...recipeData,
            direction: newDirection
        })
    };

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
        let res = await createRecipe(recipeData)
        if (res && res._id) {
            nav(`/allrecipe/${res._id}`);
        }
    }



    return (
        <>
            <h1> RECIPE<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" color="#39906d" fill="none" >
                <g transform="scale(-1, 1) translate(-24, 0)">
                    <path d="M21 17C18.2386 17 16 14.7614 16 12C16 9.23858 18.2386 7 21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M21 21C16.0294 21 12 16.9706 12 12C12 7.02944 16.0294 3 21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 3L6 8M6 21L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 8H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 3L9 7.35224C9 12.216 3 12.2159 3 7.35207L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg></h1>
            <form className="recipeForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label><strong>Name: </strong></label>
                    <input type="text" name="name" value={recipeData.name} onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label><strong>Category: </strong></label>
                    <select className="category" name="category" value={recipeData.category} onChange={e => handleCategoryChange(e.target.value)}>
                        <option id="0" >--Select Category--</option>
                        <option name="breakfast" value="breakfast" id="1" >Breakfast</option>
                        <option name="lunch" value="lunch" id="2" >Lunch</option>
                        <option name="dinner" value="dinner" id="3" >Dinner</option>
                        <option name="dessert" value="dessert" id="4" >Dessert</option>
                        <option name="baking" value="baking" id="5" >Baking</option>
                        <option name="drink" value="drink" id="6" >Drink</option>
                    </select>
                </div><br />

                <div className="form-group">
                    <label><strong>Difficulty Level: </strong></label><input type="text" name="level" value={recipeData.level} onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label><strong>Serving: </strong></label><input type="number" name="serving" value={recipeData.serving} onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label><strong>Total time: </strong></label><input type="text" name="total" value={recipeData.total} onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label><strong>Ingredients: </strong></label>
                    {recipeData.ingredient.length > 0 ? (
                        recipeData.ingredient.map((ingredient, i) => (
                            <div key={i}>
                                <input type="text" value={ingredient} onChange={(e) => handleIngredientChange(e, i)} placeholder={`Ingredient ${i + 1}`} />{recipeData.ingredient.length > 1 && (
                                    <button type="button" onClick={() => removeIngredient(i)}>-</button>
                                )}
                            </div>
                        ))
                    ) : null}
                    <button type="button" onClick={addIngredient}>+</button>
                </div>

                <div className="deleteGroup">
                    <label><strong>Directions: </strong></label>
                    {recipeData.direction.length > 0 ? (
                        recipeData.direction.map((direction, i) => (
                            <div key={i}>
                                <textarea value={direction} onChange={(e) => handleDirectionChange(e, i)} placeholder={`Direction ${i + 1}`} /> {recipeData.direction.length > 1 && (
                                    <button type="button" onClick={() => removeDirection(i)}>-</button>
                                )}
                            </div>
                        ))
                    ) : null }
                        < button type="button" onClick={addDirection}>Add Direction</button>
            </div><br />
            <button className="saveGroup" type="submit">Save</button>
        </form >

        </>
    )
}

export default CreateRecipe;