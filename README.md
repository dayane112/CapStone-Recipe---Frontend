# Recipe Application
### A React-based application that allows users to create, view, and manage recipes, along with integrating weather features and eventually login functionalities. 

## Features
### **Recipe Management**:
  - Add, view, edit, delete and display categorized recipes with images.
#### **Weather Integration**:
  - Displays user location and current weather using OpenWeather API.
  - Supports geolocation-based.
#### **User Authentication**:
  - Login/logout functionality using cookies.

## Project Structure
### Components
- **CreateRecipe.jsx**: Add new recipes via a form.
- **FetchAllRecipe.jsx**: Display all recipes. isplaying image and name of reciper with category-specific default images.
- **FetchOneRecipe.jsx**: Show detailed information for a single recipe with it's id where you can edit and delete recipe.
- **CurrentLocation.jsx**: Fetch and display the user’s current location using geolocation.
- **CurrentWeather.jsx**: Display weather details in Fahrenheit for current location.

### Utilities
- **controller.mjs**: Contains API methods for fetching recipe (`createRecipe`, `getRecipe`, `findOneRecipe`).
- **backgroundIMG.mjs**: Provides default images based on recipe categories if no image is provided.

### Context
- **loginContext.jsx**: Manages login state where it will display all recipe page if you have selected login.

### Styles
Custom CSS files for each component and pages.

## Resource
- https://icons.getbootstrap.com/icons/trash/
- https://hugeicons.com/icon/mixer-stroke-rounded
- https://hugeicons.com/icon/rolling-pin-stroke-rounded
- https://hugeicons.com/icon/spatula-stroke-rounded
- https://hugeicons.com/icon/pot-02-stroke-rounded
- https://hugeicons.com/icon/dish-02-stroke-rounded
- https://hugeicons.com/icon/hand-beater-stroke-rounded
- https://hugeicons.com/icon/pizza-cutter-stroke-rounded
- https://openweathermap.org/api
- https://www.w3schools.com/jsref/met_loc_reload.asp
- https://stackoverflow.com/questions/60575870/how-to-change-login-button-to-logout-button-in-react
- https://www.geeksforgeeks.org/how-to-log-out-user-from-app-using-reactjs/
- https://stackoverflow.com/questions/48969252/changing-react-button-text-upon-login-logout/48970249
- https://stackoverflow.com/questions/72164517/adding-dropdown-menu-inside-react-form
- https://stackoverflow.com/questions/35912731/how-to-create-a-simple-react-dropdown
- https://www.w3schools.com/html/html_form_input_types.asp
- https://mongoosejs.com/docs/guide.html#indexes
- https://stackoverflow.com/questions/46833359/how-to-add-a-dropdown-menu-to-my-react-app
- https://stackblitz.com/run?file=index.js

**Image Resource**
- https://images.pexels.com/photos/14750105/pexels-photo-14750105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
https://images.pexels.com/photos/106877/pexels-photo-106877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- https://images.pexels.com/photos/29253307/pexels-photo-29253307/free-photo-of-delicious-middle-eastern-feast-flat-lay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- https://images.pexels.com/photos/5794881/pexels-photo-5794881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- https://images.pexels.com/photos/6148264/pexels-photo-6148264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
- https://images.pexels.com/photos/28717625/pexels-photo-28717625/free-photo-of-bartender-pouring-cocktail-into-glasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

## Github BackEnd URL
- https://github.com/dayane112/CapStone-Recipe---Backend