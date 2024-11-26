import { useState } from 'react';
import FetchOneRecipe from "../components/OneRecipe/FetchOneRecipe";
import EditPage from "../components/EditeRecipe";
import DeleteRecipe from '../components/DeleteRecipe';
import '../styles/DeleteRecipe.css'

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
            {!isEditing && !isDeleting && (
                <>
                    <FetchOneRecipe />
                    <div className='Editbtn'>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>
                    </div>
                </>
            )}
            {isEditing && <EditPage setIsEditing={setIsEditing} />}
            {/* <FetchOneRecipe /> */}
            {isDeleting && <DeleteRecipe />}
        </>
    )
};

export default OneRecipe;
