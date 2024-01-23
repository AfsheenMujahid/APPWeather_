function fetchWeather() {
    const locationValue = locationInput.value;
    if (locationValue) {
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationValue}&aqi=no`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temp = data.current.temp_c;
                const description = data.current.condition.text;
                const locationName = data.location.name;

                weather.innerHTML = `
                    <h2>${locationName}</h2>
                    <p>Temperature ${temp}°C - ${description}</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weather.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
            });
    } else {
        weather.innerHTML = "<p>Please enter a location.</p>";
    }
}
