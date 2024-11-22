import NavBar from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/recipeStyle.css'

function Edit_Delete_Recipe() {
    const [category, setCategory] = useState('');
    const nav = useNavigate();

    const handleCategoryChange = (category) => {
        setCategory(category);
        console.log(category);
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleClick(e) {
        nav('/allrecipe')
    }

    return (
        <>
            <NavBar />
            <h1>Edit/Delete Recipes</h1>
            <form className="recipeForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" name="name" />
                </div><br />

                <div className="form-group">
                    <label>Category: </label>
                    <select className="category" name="category" value={category} onChange={e => handleCategoryChange(e.target.value)}>
                        <option id="0" >--Select Category--</option>
                        <option name="breakfast" value="breakfast" id="1" >Breakfast</option>
                        <option name="lunch" value="lunch" id="2" >Lunch</option>
                        <option name="dinner" value="dinner" id="3" >Dinner</option>
                        <option name="dessert" value="dessert" id="4" >Dessert</option>
                        <option name="drink" value="drink" id="5" >Drink</option>
                    </select>
                </div><br />

                <div className="form-group">
                    <label>Level: </label><input type="text" name="level" />
                </div><br />

                <div className="form-group">
                    <label>Serving: </label><input type="text" name="serving" />
                </div><br />

                <div className="form-group">
                    <label>Total time: </label><input type="text" name="total" />
                </div><br />

                <div className="form-group" >
                    <label className="direction-label">Direction: </label>
                    <textarea name="message" rows="10" cols="30"></textarea>
                </div><br />

                <button onClick={handleClick} className="save">Save</button>
                <button onClick={handleClick} className="save">Delete</button>
                <button onClick={handleClick} className="save">Cancel</button>
            </form>
            
        </>
    )
}

export default Edit_Delete_Recipe;