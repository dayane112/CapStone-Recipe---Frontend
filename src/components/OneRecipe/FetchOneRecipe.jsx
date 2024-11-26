import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findOneRecipe } from "../../utilities/controller.mjs";
import defaultImage from "../../utilities/backgroundIMG.mjs";
import '../../styles/FetchOneRecipe.css'

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

    const dateSetup = new Date(data.date).toLocaleDateString("en-US")

    return (
        <>
            <div className="allRecipe">
                <h2>{data.name}</h2>
               <p className="date">{dateSetup}</p>
                <div className="ImgSize"><img src={data.image || defaultImage(data.category)} alt={data.image} /></div>
                <p className="spacing"><strong>Category:</strong> {data.category}</p>
                <p className="spacing"><strong>Difficulty Level:</strong> {data.level}</p>
                <p className="spacing"><strong>Serving:</strong> {data.serving}</p>
                <p className="spacing"><strong>Total Time:</strong> {data.total}</p>

                <h3 className="spacing">Ingredients:</h3>
                <ul className="listSpace">
                    {data.ingredient.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                </ul>

                <h3 className="spacing">Directions:</h3>
                <ol className="listSpace">
                    {data.direction.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default FetchOneRecipe;