const view = {
    updateWeatherDisplay() {
        const cityElem = document.getElementById('cityName');
        const tempElem = document.getElementById('temperature');
        const iconElem = document.getElementById('weatherIcon');
        const descElem = document.getElementById('description');

        if (model.weatherData) {
            cityElem.textContent = model.city;
            tempElem.textContent = model.getTemperature();
            iconElem.src = model.getIcon();
            descElem.textContent = model.getDescription();

            // 根据天气情况改变背景颜色
            const weatherMain = model.weatherData.weather[0].main.toLowerCase();
            if (weatherMain.includes('rain')) {
                document.body.style.backgroundColor = 'lightgray';
            } else if (weatherMain.includes('cloud')) {
                document.body.style.backgroundColor = 'lightsteelblue';
            } else if (weatherMain.includes('clear')) {
                document.body.style.backgroundColor = 'skyblue';
            } else {
                document.body.style.backgroundColor = 'lightblue';
            }
        } else {
            cityElem.textContent = '';
            tempElem.textContent = '';
            iconElem.src = '';
            descElem.textContent = '';
        }
    }
};
