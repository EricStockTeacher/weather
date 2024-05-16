import logo from './logo.svg';
import './App.css';
import localweather from './StJohnsWeather.json';

function App() {
  return (
    <>
      <h2>Eric's Weather</h2>
      <WeatherList weather={localweather}></WeatherList>
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
