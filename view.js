const view = {
    showLoading() {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('weatherDisplay').style.display = 'none';
    },

    hideLoading() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('weatherDisplay').style.display = 'block';
    },

    updateWeatherDisplay() {
        const cityElem = document.getElementById('cityName');
        const tempElem = document.getElementById('temperature');
        const feelsLikeElem = document.getElementById('feelsLike');
        const humidityElem = document.getElementById('humidity');
        const windSpeedElem = document.getElementById('windSpeed');
        const iconElem = document.getElementById('weatherIcon');
        const descElem = document.getElementById('description');

        // 清除雨滴或雪花
        document.querySelectorAll('.raindrop, .snowflake').forEach(elem => elem.remove());

        if (model.weatherData) {
            cityElem.textContent = model.city;
            tempElem.textContent = model.getTemperature();
            feelsLikeElem.textContent = model.getFeelsLike();
            humidityElem.textContent = `Humidity: ${model.getHumidity()}%`;
            windSpeedElem.textContent = `Wind Speed: ${model.getWindSpeed()} m/s`;

            // ✅ 图标处理逻辑（你要求的部分）
            if (model.getIcon()) {
                iconElem.style.display = 'block';
                iconElem.src = model.getIcon();
            } else {
                iconElem.style.display = 'none';
            }

            descElem.textContent = model.getDescription();

            // 动态背景处理
            const weatherMain = model.weatherData.weather[0].main.toLowerCase();
            document.body.className = 'dynamic-bg';

            if (weatherMain.includes('thunderstorm') || weatherMain.includes('rain')) {
                document.body.classList.add('rainy');
                view.generateRain();
            } else if (weatherMain.includes('snow')) {
                document.body.classList.add('snowy');
                view.generateSnow();
            } else if (weatherMain.includes('cloud')) {
                document.body.classList.add('cloudy');
            } else if (weatherMain.includes('mist') || weatherMain.includes('fog')) {
                document.body.classList.add('misty');
            } else if (weatherMain.includes('clear')) {
                document.body.classList.add('sunny');
            } else {
                document.body.style.backgroundColor = 'lightblue';
            }
        } else {
            cityElem.textContent = '';
            tempElem.textContent = '';
            feelsLikeElem.textContent = '';
            humidityElem.textContent = '';
            windSpeedElem.textContent = '';
            iconElem.style.display = 'none';
            descElem.textContent = '';
            document.body.className = '';
        }
    },

    generateRain() {
        for (let i = 0; i < 100; i++) {
            const drop = document.createElement('div');
            drop.className = 'raindrop';
            drop.style.left = Math.random() * window.innerWidth + 'px';
            drop.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
            document.body.appendChild(drop);
        }
    },

    generateSnow() {
        for (let i =
