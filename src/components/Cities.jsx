import { useState } from "react";

function Cities() {
    const [weather, setWeather] = useState()
    const [country, setCountry] = useState()
    const [wind, setWind] = useState()
    const [temp, setTemp] = useState()
    const [humidity, setHumidity] = useState()
    const [weatherDescription, setWeatherDescription] = useState()
    const [name, setName] = useState()
    const [search, setSearch] = useState('')

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=81ee83578c6c269602c3144eb5ce6948`

    const s = (e) => {
        if (e.key === 'Enter') {
            fetch(api)
                .then(r => r.json())
                .then(d => {
                    console.log(d);
                    setName(d.name)
                    setTemp(d.main.temp)
                    setHumidity(d.main.humidity)
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
                className="my-5"
                onChange={e => setSearch(e.target.value)}
                onKeyDown={s}
                placeholder='Search for city...'
                value={search}
                type="text" />
            <p className="text-white fs-1">{name} {country}</p>
            {temp ? <p className="text-white fs">{temp.toFixed()} °F</p> : null}
            <p className="fs-1 text-white">{weather}</p>
            <p className="fs-1 text-white text-capitalize">{weatherDescription}</p>
            {humidity || wind ? <p className="fs-1 text-white mb-5">{humidity.toFixed()}% {wind.toFixed()}MPH</p> : null}
        </>
    )
}

export default Cities