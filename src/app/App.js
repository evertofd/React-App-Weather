import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";

import swal from "sweetalert";
import Form from "./components/Form";
const API_KEY = "ace55d6130bdc366fed533ccb5071d30";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: "",
      icon: "",
      main: "",
      celsius: "",
      temp_max: "",
      temp_min: "",
      description: "",
      error: false,
    };

    this.weatherIcon = {
      Thunderstorm: "fa-poo-storm",
      Drizzle: "fa-cloud-rain",
      Rain: "fa-cloud-showers-heavy",
      Snow: "fa-cloud-rain",
      Atmosphere: "fa-smog",
      Clear: "fa-sun",
      Clouds: "fa-cloud-sun",
    };
  }

  get_WeatherIcon(icons, rangeid) {
    switch (true) {
      case rangeid >= 200 && rangeid <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeid >= 300 && rangeid <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeid >= 500 && rangeid <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeid >= 600 && rangeid <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeid >= 701 && rangeid <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeid === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeid >= 801 && rangeid <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      if (city && country) {
        const api_call = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
        );
        const response = await api_call.json();
        this.setState({
          city: `${response.name}, ${response.sys.country}`,
          celsius: this.calCelsius(response.main.temp),
          temp_max: this.calCelsius(response.main.temp_max),
          temp_min: this.calCelsius(response.main.temp_min),
          description: response.weather[0].description,
          error: false,
        });
        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
      } else {
        this.setState({ error: true });
      }
    } catch (error) {
      swal(
        "Datos incorrectos",
        "Verifique los datos ingresados Ej: City: Mérida Country: VE",
        "warning"
      );
    }
  };
  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
