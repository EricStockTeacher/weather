import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import localweather from './StJohnsWeather.json';
import ottawaweather from './OttawaWeather.json';

function App() {
  
  const [weatherForecast, setWeatherForecast] = useState(localweather);
  return (
    <>
      <button onClick={ (evt) => {
        weatherForecast.city == "St John's" ? setWeatherForecast(ottawaweather) : setWeatherForecast(localweather);
      }}>{weatherForecast.city}</button>
      <h2>Eric's Weather</h2>
      <WeatherList weather={weatherForecast}></WeatherList>
    </>
  );
}

function WeatherList({weather}) {
  return (
    <>
      <h2>{weather.city}</h2>
      {weather.forecast.map( day => <Weather info={day}></Weather>)}
    </>
  );
}

function Weather({info}) {
  return (
  <>
    <p>{info.day}</p>
    <p>{info.temp}</p>
    <p>{info.precip}</p>
    <p>{info.wind}</p>
    <br></br>
  </>
  );
}

export default App;
