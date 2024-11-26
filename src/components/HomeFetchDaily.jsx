import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getRecipe } from '../utilities/controller.mjs';
import defaultImage from '../utilities/backgroundIMG.mjs';
import '../styles/HomeFetchDaily.css'

function DailyFetch() {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function DailyRecipe() {
            const recipes = await getRecipe();
            if (recipes && recipes.length > 0) {
                const random = Math.floor(Math.random() * recipes.length);
                const randomRecipe = recipes[random];

                setRecipe(randomRecipe);
            }
        }

        DailyRecipe();
    }, []);

    if (!recipe) {
        return <div>Loading</div>;
    }

    return (
        <>
            <div className="dailyRecipe">
                <p className='Title'><strong> Recipe of the Day:</strong> </p>
                <Link to={`/allrecipe/${recipe._id}`}><h2>{recipe.name}</h2></Link>
                <div className="ImgSize"><img src={recipe.image || defaultImage(recipe.category)} alt={recipe.image} /></div>
                <p className='difficulty'><strong>Difficulty Level:</strong> {recipe.level}</p>
                <br/>
            </div>
        </>
    )
}

export default DailyFetch;
