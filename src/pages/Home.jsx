import '../styles/HomePage.css'
import CurrentWeather from '../components/API/currentWeather';
import CurrentLocation from '../components/API/currentLocation';
import DailyFetch from '../components/HomeFetchDaily';


function Home() {
    
    return (
        <>

            <h1>Welcome to Cookify</h1>
            <div className='Discover'>
                <p>Discover, Save, and Share Your Favorite Recipes</p>
            </div>

            <DailyFetch />

            <div className='currentLocation'>
                <CurrentLocation />
                <span className='align'>
                    <CurrentWeather />
                </span>
            </div>


        </>
    )
};

export default Home;