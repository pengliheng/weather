import React, { useState } from 'react';
import Api from './Api'
import Locations from './Components/Locations'
import Screenshot from './Components/Screenshot'
import Weather from './Components/Weather'
import { reserveGeo } from './utils/index.js'
import './App.scss';

function App() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [locations, setLocations] = useState([]);
  const [screenshot, setScreenshot] = useState('');
  const [forecast, setForecast] = useState('');
  async function requestWeather() {
    if (!time || !date) return 
    const trafficData = await Api.getTrafficImages({ time, date })
    const weatherForecast = await Api.getWeatherForecast({ time, date })
    setLocations(reserveGeo(trafficData.items[0].cameras, weatherForecast))
  }
  function handleDateChange(e) {
    setDate(e.target.value)
    requestWeather()
  }
  function handleTimeChange(e) {
    setTime(e.target.value)
    requestWeather()
  }
  async function handleLocationClick(data) {
    setScreenshot(data.image)
    setForecast(data.forecast)
  }
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="date">
            <input value={date} onChange={handleDateChange} type="date"/>
          </div>
          <div className="time">
            <input value={time} onChange={handleTimeChange} type="time"/>
          </div>
        </header>
        <div className="body">
          <Locations cameras={locations} handleLocationClickProp={e => handleLocationClick(e)} />
          <Weather data={forecast} />
        </div>
        <Screenshot src={screenshot} />
      </div>
    </div>
  );
}

export default App;
