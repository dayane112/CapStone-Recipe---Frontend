import { useState } from 'react';
import FetchOneRecipe from "../components/OneRecipe/FetchOneRecipe";
import EditPage from "../components/EditeRecipe";
import DeleteRecipe from '../components/DeleteRecipe';

function OneRecipe() {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    function handleEditClick(e) {
        setIsEditing(true);
    }

    function handleDeleteClick(e) {
        setIsDeleting(true);
    }

    return (
        <>
        <FetchOneRecipe />

        {isEditing && <EditPage />}
            <button onClick={handleEditClick}>Edit</button>
            {isDeleting && <DeleteRecipe />}
            <button onClick={handleDeleteClick}>Delete</button>
        </>
    )
};

export default OneRecipe;
