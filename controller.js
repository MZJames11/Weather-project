const controller = {
    initialize() {
        model.setCity('');
        model.setWeatherData(null);
        view.updateWeatherDisplay();
    },

    fetchWeather() {
        const cityInput = document.getElementById('cityInput').value;
        if (!cityInput) {
            view.showError('Please enter a city name!');
            return;
        }
        model.setCity(cityInput);
        view.showLoading();
        view.clearError();

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${model.apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                view.hideLoading();
                if (data.cod === 200) {
                    model.setWeatherData(data);
                    view.updateWeatherDisplay();
                } else {
                    view.showError('City not found. Please try again.');
                }
            })
            .catch(error => {
                view.hideLoading();
                console.error('Error fetching weather data:', error);
                view.showError('Error fetching data. Please try again later.');
            });
    },

    toggleTemperatureUnit() {
        model.toggleUnit();
        view.updateWeatherDisplay();
    },

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.fetchWeather();
        }
    }
};
