import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findOneRecipe } from "../../utilities/controller.mjs";
import axios from "axios";

function FetchOneRecipe() {

    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function datafetching() {
            if (id) {
            const recipe = await findOneRecipe(id);
            setData(recipe); 
            }

        }
        datafetching()
        // console.log(datafetching())

    }, [id])

    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="allRecipe">
                <h2>{data.name}</h2>
                <p><strong>Category:</strong> {data.category}</p>
                <p><strong>Difficulty Level:</strong> {data.level}</p>
                <p><strong>Serving Size:</strong> {data.serving}</p>
                <p><strong>Total Time:</strong> {data.total}</p>

                <h3>Ingredients:</h3>
                <ul>
                    {data.ingredient.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                </ul>

                <h3>Directions:</h3>
                <ol>
                    {data.direction.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default FetchOneRecipe;