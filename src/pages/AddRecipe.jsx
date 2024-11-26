
import CreateRecipe from "../components/CreateRecipe";

function AddRecipe() {
    

    return (
        <>

        <CreateRecipe />
            

        </>
    )
}

export default AddRecipe;



// <input type="radio" id="breakdfast" name="breakdfast" value="breakdfast" /> <label for="breakdfast">Breakfast</label>
// <input type="radio" id="lunch" name="lunch" value="lunch" /> <label for="lunch">Lunch</label>
// <input type="radio" id="dinner" name="dinner" value="dinner" /> <label for="dinner">Dinner</label>
// <input type="radio" id="dessert" name="dessert" value="dessert" /> <label for="dinner">Dessert</label>
// <input type="radio" id="drink" name="drink" value="drink" /> <label for="dinner">Drink</label>

// <br /><br />


// <form onSubmit={handleSubmit}>
//     <div className="form-container">
//         <div className="form-row">
//             <span className='left'>
//                 <p>Name: </p>
//                 <p>Category: </p>
//                 <p>Level: </p>
//                 <p>Serving: </p>
//                 <p>Total time: </p>
//                 <p>Direction: </p>
//             </span>
//             <span className='right'>
//                 <label>
//                     <input type="text" name="name" />
//                 </label>
//                 <label >
//                     <select name="category" value={category} onChange={e => handleCategoryChange(e.target.value)}>
//                         <option id="0" >--Select Category--</option>
//                         <option name="breakfast" value="breakfast" id="1" >Breakfast</option>
//                         <option name="lunch" value="lunch" id="2" >Lunch</option>
//                         <option name="dinner" value="dinner" id="3" >Dinner</option>
//                         <option name="dessert" value="dessert" id="4" >Dessert</option>
//                         <option name="drink" value="drink" id="5" >Drink</option>
//                     </select>
//                 </label>
//                 <label>
//                     <input type="text" name="level" />
//                 </label>
//                 <br />
//                 <label>
//                     <input type="text" name="serving" />
//                 </label>
//                 <br />
//                 <label>
//                     <input type="text" name="total" />
//                 </label>
//                 <br />
//                 <label>
//                     <textarea name="message" rows="10" cols="30"></textarea>
//                 </label>
//             </span>
//         </div>
//     </div>
// </form>