import { useEffect, useState } from 'react'
import './WidgetMeteo.scss'
import axios from 'axios'

interface WidgetMeteoProps {
    city: string
    zipcode: string
}

function WidgetMeteo( { city, zipcode }: WidgetMeteoProps) {

    const [temperature, setTemperature] = useState(0)

    const fetchTemperature = async () => {
        const API_KEY = '47840f4f526d9cc69b4b575c52495860'
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&appid=${API_KEY}&units=metric`)
        console.log(result)
        setTemperature(Math.round(result.data.main.temp*10)/10)
    }

    useEffect(
        () => {
            fetchTemperature() // appel API
        },
        [] // uniquement au premier rendu
    )

    return (
        <div className="meteo">
            <div>
                <div className="meteo-city">{city}</div>
                <div className="meteo-zipcode">{zipcode}</div>
                <div className="meteo-temperature">{temperature}</div>
            </div>
        </div>
    )
}

export default WidgetMeteo
