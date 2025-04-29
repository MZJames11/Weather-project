const controller = {
    initialize() {
        model.setCity('');
        model.setWeatherData(null);
        view.updateWeatherDisplay();
    },

    fetchWeather() {
        const cityInput = document.getElementById('cityInput').value;
        if (!cityInput) {
            alert('Please enter a city name!');
            return;
        }
        model.setCity(cityInput);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${model.apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    model.setWeatherData(data);
                    view.updateWeatherDisplay();
                } else {
                    alert('City not found!');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    },

    toggleTemperatureUnit() {
        model.toggleUnit();
        view.updateWeatherDisplay();
    }
};
