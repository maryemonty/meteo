import { useState } from "react";
import { FaSun, FaCloud } from "react-icons/fa";
import Forecast from "./Forecast";

function Cities() {
    const [weather, setWeather] = useState()
    const [country, setCountry] = useState()
    const [wind, setWind] = useState()
    const [temp, setTemp] = useState()
    const [humidity, setHumidity] = useState()
    const [weatherDescription, setWeatherDescription] = useState()
    const [name, setName] = useState()
    const [search, setSearch] = useState('')
    const [lat, setLat] = useState()
    const [lon, setLon] = useState()

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=81ee83578c6c269602c3144eb5ce6948`

    const s = (e) => {
        if (e.key === 'Enter') {
            fetch(api)
                .then(r => r.json())
                .then(d => {
                    console.log(d.coord.lat);
                    setName(d.name)
                    setTemp(d.main.temp)
                    setHumidity(d.main.humidity)
                    setWeather(d.weather[0].main)
                    setWeatherDescription(d.weather[0].description)
                    setCountry(d.sys.country)
                    setWind(d.wind.speed)
                    setLat(d.coord.lat)
                    setLon(d.coord.lon)
                })
        }
    }



    return (
        <>
            <input
                className="my-5"
                onChange={e => setSearch(e.target.value)}
                onKeyDown={s}
                placeholder='Search for city...'
                value={search}
                type="text" />
            <p className="text-white fs-1">{name} {country}</p>
            {temp ? <p className="text-white fs">{temp.toFixed()} °</p> : null}
            <p className="fs-1 text-white">{weather} <FaCloud /></p>
            <p className="fs-3 text-white text-capitalize"><FaCloud /> {weatherDescription} <FaCloud /></p>
            {humidity || wind ? <p className="fs-1 text-white mb-5">{humidity.toFixed()}% {wind.toFixed()}MPH</p> : null}
        </>
    )
}

export default Cities