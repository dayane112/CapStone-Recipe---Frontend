import { useState } from 'react';
import { deleteRecipe } from "../utilities/controller.mjs";
import { useNavigate } from 'react-router-dom';

function DeleteRecipe() {
    const nav = useNavigate()

    async function handleDelete() {
        let res = await deleteRecipe(recipe._id);
    
        if (res) {
          let copy = produce.filter((el) => el._id !== product._id);
          setInventory(copy);
        }
      }
    
      function handleClick (e){
        nav('/allrecipe')
      }
   

    return (
        <>
        
        </>
    )
}

export default DeleteRecipe;