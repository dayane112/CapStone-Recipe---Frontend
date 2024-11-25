import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipe } from '../utilities/controller.mjs';

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

    function handleChange(e) {
            setRecipeData({
                ...recipeData,
                [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            let res = await createRecipe(recipeData);
            nav('/');
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <>

        </>
    )
}