import { useState } from 'react';
import FetchOneRecipe from "../components/OneRecipe/FetchOneRecipe";
import EditPage from "../components/EditeRecipe";

function OneRecipe() {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(e) {
        setIsEditing(true);
    }
    return (
        <>
        <FetchOneRecipe />

        {isEditing && <EditPage />}
            <button onClick={handleEditClick}>Edit</button>
            <button>Delete</button>
        </>
    )
};

export default OneRecipe;
