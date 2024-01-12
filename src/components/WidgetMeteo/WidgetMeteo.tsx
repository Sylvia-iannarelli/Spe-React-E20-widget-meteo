import { useEffect, useState } from 'react'
import './WidgetMeteo.scss'
import axios from 'axios'

interface WidgetMeteoProps {
    city: string
    zipcode: string
}

function WidgetMeteo( { city, zipcode }: WidgetMeteoProps) {

    const [temperature, setTemperature] = useState<number | null>(null)
    const [icon, setIcon] = useState('04d')
    
    useEffect(
        () => {
            const fetchTemperature = async () => {

                const API_KEY = import.meta.env.VITE_API_KEY

                let API_URL = '';
                if (import.meta.env.MODE === 'production') {
                    API_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&appid=${API_KEY}&units=metric`
                }
                if (import.meta.env.MODE === 'development') {
                    API_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&appid=${API_KEY}&units=metric`
                }

                const result = await axios.get(API_URL)
                setTemperature(Math.round(result.data.main.temp*10)/10)
                setIcon(result.data.weather[0].icon)
            }
            fetchTemperature() // appel API
        },
        [zipcode] // uniquement au premier rendu
    )

    return (
        <div className="meteo">
            <div>
                <div className="meteo-city">{city}</div>
                <div className="meteo-zipcode">{zipcode}</div>
                <div className="meteo-temperature">{temperature}°C</div>
            </div>
            <div>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            </div>
        </div>
    )
}

export default WidgetMeteo
