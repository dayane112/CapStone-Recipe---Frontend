import axios from 'axios';

async function getRecipe() {
    try {
        let url = 'http://localhost:3000/recipe';

        let res = await axios.get(url);

        return res.data;
    } catch (err) {
        console.error(err);
    }
}

async function createRecipe(recipeData) {
    try {
        let url = 'http://localhost:3000/recipe';

        let res = await axios.post(url, recipeData);

        return res.data;
    } catch (err) {
        console.error(err);
    }
}

async function deleteRecipe(id) {
    try {
        let url = `http://localhost:3000/recipe/${id}`;

        let res = await axios.delete(url);

        return true;
    } catch (err) {
        console.error(err);
    }
}

async function updateRecipe(id, recipeData) {
    try {
        let url = `http://localhost:3000/recipe/${id}`;

        let res = await axios.put(url, recipeData);

        return res.data;
    } catch (err) {
        console.error(err);
    }
}

async function findOneRecipe(id) {
    try {
        let url = `http://localhost:3000/recipe/${id}`;

        let res = await axios.get(url);

        return res.data;
    } catch (err) {
        console.error(err);
    }
}

export {
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe,
    findOneRecipe,
};