import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateRecipe() {
    const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    level: '',
    serving: '',
    total: '',
    ingredient: [''],
    direction: [''],
  });

    return (
        <>
        
        </>
    )
}