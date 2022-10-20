import React from 'react'

function ShowTemp({text}) {
    return (
        <>
        <div class="container my-5  text-dark">
            <div class="row mb-2 text-dark ">
            <div class="col-md-4  text-dark">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Region</h5>
                            <p class="card-text">{text.region}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Weather_Description</h5>
                            <p class="card-text">{text.description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Temp</h5>
                            <p class="card-text">{text.temp}°C</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Humidity</h5>
                            <p class="card-text">{text.humidity} g.m-3</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">local_time</h5>
                            <p class="card-text">{text.local_Time}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">weather_icon</h5>
                            <img src={text.weather_icons} alt=''></img>
                        </div>
                    </div>
                </div>
                </div>
                <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">wind_speed</h5>
                            <p class="card-text">{text.wind_speed}m/s</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">pressure</h5>
                            <p class="card-text">{text.pressure} kg m-1s-2</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" >
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">language</h5>
                            <p class="card-text">{text.language}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        

    )
}

export default ShowTemp;
