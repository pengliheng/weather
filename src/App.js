import React, { useState } from 'react';
import './App.scss';
// import Date from './Components/Date'
// import Time from './Components/Time'
import Locations from './Components/Locations'
import Screenshot from './Components/Screenshot'
import Weather from './Components/Weather'
import Api from './Api'

function reserveGeo(cameras, weatherForecast) {
  return cameras.map(cameras => {
    const {latitude, longitude} = cameras.location
    const absArray = weatherForecast.area_metadata.map(area => {
      return Math.abs(latitude - area.label_location.latitude) + Math.abs(longitude - area.label_location.longitude)
    })
    const min = Math.min(...absArray)
    const index = absArray.indexOf(min)
    return Object.assign(cameras, {
      area: weatherForecast.area_metadata[index],
      forecast: weatherForecast.items[0].forecasts[index],
    })
  })
}

function App() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [locations, setLocations] = useState([]);
  const [screenshot, setScreenshot] = useState('');
  const [forecast, setForecast] = useState('');
  async function requestWeather() {
    const trafficData = await Api.getTrafficImages({ time, date })
    const weatherForecast = await Api.getWeatherForecast({ time, date })
    setLocations(reserveGeo(trafficData.items[0].cameras, weatherForecast))
  }
  function handleDateChange(e) {
    setDate(e.target.value)
    if (time && date) {
      requestWeather()
    }
  }
  function handleTimeChange(e) {
    setTime(e.target.value)
    if (time && date) {
      requestWeather()
    }
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
          {/* {date}
          {time} */}
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
