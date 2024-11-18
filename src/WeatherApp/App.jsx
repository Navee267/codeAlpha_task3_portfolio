import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import clearIcon from "./images/clear.webp";
import cloudIcon from "./images/cloud.webp";
import drizzleIcon from "./images/drizzle.png";
import humidityIcon from "./images/humidity.webp";
import rainIcon from "./images/rain.png";
import snowIcon from "./images/snow.png";
import windicon from "./images/wind.png";

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
    return (
        <>
            <div className='image'>
                <img src={icon} alt="Image" />
            </div>
            <div className='temp'>
                {temp}
            </div>
            <div className='location'>
                {city}
            </div>
            <div className='country'>
                {country}
            </div>
            <div className='co-ordinates'>
                <div>
                    <span className='lat'>Latitude</span>
                    <span>{lat}</span>
                </div>
                <div>
                    <span className='log'>Logitude</span>
                    <span>{log}</span>
                </div>
            </div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humidityIcon} alt="humidity" className='icon' />
                    <div className="data">
                        <div className="humidity-percent">
                            {humidity} %
                        </div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={windicon} alt="wind" className='icon' />
                    <div className="data">
                        <div className="wind-percent">
                            {wind} km/h
                        </div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>
            </div>
        </>
    )
};

WeatherDetails.propTypes={
    icon:PropTypes.string.isRequired,
    temp:PropTypes.number.isRequired,
    city:PropTypes.string.isRequired,
    country:PropTypes.string.isRequired,
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.number.isRequired,
    lat:PropTypes.number.isRequired,
    log:PropTypes.number.isRequired

}

export const App = () => {
    const [icon, setIcon] = useState(snowIcon);
    const [temp, setTemp] = useState(0);
    const [city, setCity] = useState("Tenkasi");
    const [country, setCountry] = useState("IN");
    const [lat, setLat] = useState(0);
    const [log, setLog] = useState(0);
    const [wind, setWind] = useState(15);
    const [humidity, setHumidity] = useState(10);
    const [text,setText] = useState("Tenkasi");
    const [loading,setLoading] = useState(false);
    const [cityNotfound,setCityNotFound] = useState(false);
    const [error,setError] = useState(null);

    const weatherIconSelector = {
        '01d' : clearIcon,
        '01n' : clearIcon,
        '02d' : cloudIcon,
        '02n' : cloudIcon,
        '03d' : drizzleIcon,
        '03n' : drizzleIcon,
        '04d' : drizzleIcon,
        '04n' : drizzleIcon,
        '09d' : rainIcon,
        '09n' : rainIcon,
        '10d' : rainIcon,
        '10n' : rainIcon,
        '13d' : snowIcon,
        '13n' : snowIcon
    }

    const search = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=040707055dac0f24eb5328f5f64f41a5&units=Metric`;

        try{
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);

            if(data.cod ==="404"){
                console.log("City Not Found");
                setCityNotFound(true);
                setLoading(false);
                return;
            }
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setTemp(Math.floor(data.main.temp));
            setCity(data.name);
            setCountry(data.sys.country);
            setLat(data.coord.lat);
            setLog(data.coord.lon);
            const weatherCode = data.weather[0].icon;
            setIcon(weatherIconSelector[weatherCode] || clearIcon);
            setCityNotFound(false);

        }
        catch(error)
        {
            console.log("Some Error Occured " + error.message);
            setError("Some Errors Occured During Fetching The Data");
        }
        finally{
            setLoading(false);
        }
    }

    const handleCity=(e)=>{
        setText(e.target.value);
    };

    const keyDown = (e)=>{
        if(e.key === "Enter"){
            search();
        }
    }

    useEffect(function (){
        search();
    },[])
    return (
        <>
            <div className='container'>
                <div className='input-container'>
                    <input type="text" className='cityInput' placeholder='searchCity' onChange={handleCity} value={text} onKeyDown={keyDown}/>
                    <div className='search-icon'>
                        {/* <img src={searchIcon} alt="Search Icon"/> */}
                    </div>

                </div>
                {!loading && !cityNotfound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />}
            {loading && <div className='loading-msg'>Loading...</div>}
                {error && <div className='error-msg'>{error}</div>}
                {cityNotfound && <div className='cnf-msg'>City Not Found</div>}

                <p className='designer'>Designed By <a href="www.linkedin.com/in/n-naveen-kumar-b6a74a299">N.Naveen Kumar</a></p>
            </div>
        </>
    )
};

export default App;
