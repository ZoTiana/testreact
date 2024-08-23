import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div className="weather">
      <ul className="city-list">
        <li>Lisbon</li>
        <li>Paris</li>
        <li>Sydney</li>
        <li>San Francisco</li>
      </ul>
      <form>
        <input type="search" />
        <button type="submit" className="search-button">
          Search
        </button>
        <button type="submit" className="current-button">
          Current
        </button>
      </form>
      <h1>Lisbon</h1>
      <p>
        Thursday 15:54 <br /> Clouds
      </p>
      <div className="weather-details">
        <div>
          <p className="temperature">
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"black"}
              size={50}
              animate={false}
            />
            14<sup>°C</sup>
          </p>
        </div>
        <div>
          <p>
            Precipitation: 82% <br />
            Wind: 4km/h
          </p>
        </div>
      </div>
      <div className="weather-forecast">
        <ul className="forecast-container">
          <li>
            <ul className="forecast-content">
              <li>Fri</li>
              <li>
                <ReactAnimatedWeather
                  icon={"RAIN"}
                  color={"black"}
                  size={20}
                  animate={false}
                />
              </li>
              <li>13°</li>
            </ul>
          </li>
          <li>
            <ul className="forecast-content">
              <li>Sat</li>
              <li>
                <ReactAnimatedWeather
                  icon={"CLOUDY"}
                  color={"black"}
                  size={20}
                  animate={false}
                />
              </li>
              <li>15°</li>
            </ul>
          </li>
          <li>
            <ul className="forecast-content">
              <li>Sun</li>
              <li>
                <ReactAnimatedWeather
                  icon={"FOG"}
                  color={"black"}
                  size={20}
                  animate={false}
                />
              </li>
              <li>17°</li>
            </ul>
          </li>
          <li>
            <ul className="forecast-content">
              <li>Mon</li>
              <li>
                <ReactAnimatedWeather
                  icon={"PARTLY_CLOUDY_DAY"}
                  color={"black"}
                  size={20}
                  animate={false}
                />
              </li>
              <li>16°</li>
            </ul>
          </li>
          <li>
            <ul className="forecast-content">
              <li>Tue</li>
              <li>
                <ReactAnimatedWeather
                  icon={"CLEAR_DAY"}
                  color={"black"}
                  size={20}
                  animate={false}
                />
              </li>
              <li>15°</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p>
          <a
            href="https://github.com/ZoTiana/testreact"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by <a href="mailto:andriamifidy@gmail.com">Zo Tiana</a>
        </p>
      </div>
    </div>
  );
}
