import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'
import './App.css'
function App() {
    const [city, setCity] = useState("")
    const[error,setError]=useState("")
    const [data, setData] = useState({
        region:"",
        description: "",
        temp: 0,
        humidity: 0,
        local_Time:0,
        weather_icons:"",
        wind_speed:"",
        pressure:0,
        language:"",
        
    })

    const handleClick = () => {
        axios.get(`http://api.weatherstack.com/current?access_key=9c7da6bd93e32272321a63dfb695d273&query=${city}`)
            .then((response) => {
                console.log(response.data);
                if (!response.data.error) {
                setData({
                    region:response.data.request.query,
                    description: response.data.current.weather_descriptions,
                    temp: response.data.current.temperature,
                    humidity: response.data.current.humidity,
                    local_Time:response.data.location.localtime,
                    weather_icons:response.data.current.weather_icons[0],
                    wind_speed:response.data.current.wind_speed,
                    pressure:response.data.current.pressure,
                    language:response.data.request.language

                  
                })
            }
            else{
                setError("Invalid Input")
            }
            })
               
           
    }

    return (
        <>
            <div className='container text-center my-2'>
                <h1>Weather App Using React JS</h1>
                <input type="text" className='from-control ' value={city} onChange={(e) => {
                    setCity(e.target.value);
                }} />
                <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>get details</button>

            </div>
         {error===""?<ShowTemp text={data}/>:<h1>Invalid Input</h1>}
     
            
        </>
    )
}

export default App
