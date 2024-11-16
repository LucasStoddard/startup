import React, { useEffect, useState } from "react";
import './Weather.css';

// Weather, for simplicity for now I will just assume Provo
const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const API_KEY = "0f3892f5145efb8bc154a0840ca82bce"; 
    const CITY = "Provo"; 
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=imperial`;
    
    // Fetch weather data when the component mounts
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('/weather');
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                const data = await response.json();
                console.log('Weather data:', data);  // Log to check
                setWeather(data);
            } catch (err) {
                console.error(err);  // Log the actual error
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchWeatherData();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const { main, weather: weatherDetails } = weather;
    const temperature = main.temp;
    const icon = weatherDetails[0].icon;
    
    return (
        <div className='weather-box'>
            <img style={{ width: '180px', height: '180px'}} src={`https://openweathermap.org/img/wn/${icon}@4x.png`}/>
            <p>Temperature: {temperature}°F</p>
        </div>
    )
}

export default Weather;
