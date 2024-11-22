import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createRecipe } from "../utilities/controller.mjs";
import '../styles/recipeStyle.css'

function AddRecipe() {
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

    const addIngredient = () => {
        setRecipeData({
            ...recipeData,
            ingredient: [...recipeData.ingredient, '']
        });
    };

    async function handleSubmit(e) {
        e.preventDefault()
        let res = await createRecipe(recipeData)
        nav(`/allrecipe/${res._id}`)
    }

    function handleClick(e) {
        nav('/allrecipe')
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
                    <label>Name: </label>
                    <input type="text" name="name" value={recipeData.name} onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label>Category: </label>
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
                    <label>Level: </label><input type="text" name="level" value={recipeData.level} onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label>Serving: </label><input  type="number" name="serving" value={recipeData.serving} onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label>Total time: </label><input type="text" name="total" value={recipeData.total} onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label>Ingredients:</label>
                    {recipeData.ingredient.map((ingredient, i) => (
                        <input key={i} type="text" value={ingredient} onChange={(e) => handleIngredientChange(e, i)} placeholder={`Ingredient ${i + 1}`}
                        />
                    ))}
                    <button type="button" onClick={addIngredient}>+</button>
                    
                </div><br />

                <div className="form-group" >
                    <label className="direction-label">Direction: </label>
                    <textarea name="message" rows="10" cols="30"></textarea>
                </div><br />

                <button className="save">Save</button>
            </form>

        </>
    )
}

export default AddRecipe;



// <input type="radio" id="breakdfast" name="breakdfast" value="breakdfast" /> <label for="breakdfast">Breakfast</label>
// <input type="radio" id="lunch" name="lunch" value="lunch" /> <label for="lunch">Lunch</label>
// <input type="radio" id="dinner" name="dinner" value="dinner" /> <label for="dinner">Dinner</label>
// <input type="radio" id="dessert" name="dessert" value="dessert" /> <label for="dinner">Dessert</label>
// <input type="radio" id="drink" name="drink" value="drink" /> <label for="dinner">Drink</label>

// <br /><br />


// <form onSubmit={handleSubmit}>
//     <div className="form-container">
//         <div className="form-row">
//             <span className='left'>
//                 <p>Name: </p>
//                 <p>Category: </p>
//                 <p>Level: </p>
//                 <p>Serving: </p>
//                 <p>Total time: </p>
//                 <p>Direction: </p>
//             </span>
//             <span className='right'>
//                 <label>
//                     <input type="text" name="name" />
//                 </label>
//                 <label >
//                     <select name="category" value={category} onChange={e => handleCategoryChange(e.target.value)}>
//                         <option id="0" >--Select Category--</option>
//                         <option name="breakfast" value="breakfast" id="1" >Breakfast</option>
//                         <option name="lunch" value="lunch" id="2" >Lunch</option>
//                         <option name="dinner" value="dinner" id="3" >Dinner</option>
//                         <option name="dessert" value="dessert" id="4" >Dessert</option>
//                         <option name="drink" value="drink" id="5" >Drink</option>
//                     </select>
//                 </label>
//                 <label>
//                     <input type="text" name="level" />
//                 </label>
//                 <br />
//                 <label>
//                     <input type="text" name="serving" />
//                 </label>
//                 <br />
//                 <label>
//                     <input type="text" name="total" />
//                 </label>
//                 <br />
//                 <label>
//                     <textarea name="message" rows="10" cols="30"></textarea>
//                 </label>
//             </span>
//         </div>
//     </div>
// </form>