import { useState, useEffect } from 'react';

export default function CurrentLocation() {
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [load, setload] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "eb889a65b1d1b573579883315f022ec8";

  async function FetchWeatherAuto(latitude, longitude) {

    if (latitude && longitude) {
      const limit = 1;
      const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=${limit}&appid=${apiKey}`

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('Bad response')
        }

        const data = await res.json();
        console.log('API res:', data);
        setWeather(data);

      } catch (err) {
        setError(err.message)
        console.error(err)
      } finally {
        setload(false)
      }
    }
  }

  useEffect(() => {
    async function location() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLong(longitude);
          // console.log(FetchWeatherAuto(latitude, longitude));

        });
      } else {
        setload(false)
      }
    }
    location();

  }, [])

  useEffect(() => {
    if (lat && long) {
      FetchWeatherAuto(lat, long);
    }
  }, [lat, long]);

  useEffect(() => {
    if (weather) {
      console.log("Weather:", weather);
    }
  }, [weather]);

  return (
    <>
      {weather && !load && !error && (
        <div className="weather-data">
          <p>Weather of the Day </p>
          {/* <p>{weather[0]?.name}, {weather[0]?.country}!</p> */}
        </div>
      )}
    </>
  )
}