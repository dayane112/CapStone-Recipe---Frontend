import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findOneRecipe, updateRecipe } from "../utilities/controller.mjs";

function EditPage() {
    const nav = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState(null);

    return (
        <>
        
        </>
    )
}