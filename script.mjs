const submit = document.getElementById("submit");
const locationInput = document.getElementById("location");
const weather = document.getElementById("weather");

const apiKey = "c18ac18f95f5429b80a132952241701";

function fetchWeather() {
    const locationValue = locationInput.value;
    if (locationValue) {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationValue}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                const temp = data.current.temp_c;
                const description = data.current.condition.text;
                const wind = data.current.wind_kph;
                const humidity = data.current.humidity;
                const locationName = data.location.name;

                weather.innerHTML = `
                    <h2>${locationName}</h2>
                    <p>Temperature: ${temp}°C</p>
                    <p>Description: ${description}</p>
                    <p>Wind Speed: ${wind} km/h</p>
                    <p>Humidity: ${humidity}%</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weather.innerHTML = "<p>Wrong city Name. Please try again.</p>";
            });
    } else {
        weather.innerHTML = "<p>Please enter a location.</p>";
    }
}

submit.addEventListener("click", fetchWeather);

// Add event listener for Enter key press
locationInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        fetchWeather();
    }
});
