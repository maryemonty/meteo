import { useState } from "react";

function Cities() {
    const [weather, setWeather] = useState()
    const [country, setCountry] = useState()
    const [wind, setWind] = useState()
    const [temp, setTemp] = useState()
    const [weatherDescription, setWeatherDescription] = useState()
    const [name, setName] = useState()
    const [search, setSearch] = useState('')

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=81ee83578c6c269602c3144eb5ce6948`

    const s = (e) => {
        if (e.key === 'Enter') {
            fetch(api)
                .then(r => r.json())
                .then(d => {
                    console.log(d.weather);
                    setName(d.name)
                    setTemp(d.main.temp)
                    setWeather(d.weather[0].main)
                    setWeatherDescription(d.weather[0].description)
                    setCountry(d.sys.country)
                    setWind(d.wind.speed)
                })
        }

    }

    return (
        <>
            <input
                onChange={e => setSearch(e.target.value)}
                onKeyDown={s}
                placeholder='City name'
                value={search}
                type="text" />
            <p>{name} {country}</p>
            <p>{weather}</p>
            {temp ? <p>{temp.toFixed()} °F</p> : null}
            <p>{weatherDescription}</p>
            <p>{wind} MPH</p>
        </>
    )
}

export default Cities