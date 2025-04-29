const model = {
    apiKey: 'a1ca7002cf1db63bdfb94e0678cfee6a', 
    city: '',
    weatherData: null,
    useCelsius: true,

    setCity(newCity) {
        this.city = newCity;
    },

    setWeatherData(data) {
        this.weatherData = data;
    },

    toggleUnit() {
        this.useCelsius = !this.useCelsius;
    },

    getTemperature() {
        if (!this.weatherData) return '';
        const kelvinTemp = this.weatherData.main.temp;
        if (this.useCelsius) {
            return (kelvinTemp - 273.15).toFixed(1) + ' °C';
        } else {
            return ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(1) + ' °F';
        }
    },

    getFeelsLike() {
        if (!this.weatherData) return '';
        const kelvinTemp = this.weatherData.main.feels_like;
        if (this.useCelsius) {
            return "Feels like: " + (kelvinTemp - 273.15).toFixed(1) + ' °C';
        } else {
            return "Feels like: " + ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(1) + ' °F';
        }
    },

    getHumidity() {
        return this.weatherData ? this.weatherData.main.humidity : '';
    },

    getWindSpeed() {
        return this.weatherData ? this.weatherData.wind.speed : '';
    },

    getDescription() {
        return this.weatherData.weather[0].description;
    },

    getIcon() {
        return `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
    }
};
